<?php

namespace App\Http\Controllers;

use App\Atemption;
use App\Langs;
use App\Profile;
use App\Rating;
use App\Reactions;
use App\Truck;
use App\Truck_categories;
use App\Truck_datas;
use App\Truck_typs;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class TrucksController extends Controller
{
    public $fullUrl,$root,$locale;
    private $typs,$categories,$langs;

    /**
     * TrucksController constructor.
     */
    public function __construct(Request $request)
    {
        $this->locale = app()->getLocale();

        $this->typs = Cache::remember('typsAl'.$this->locale, 22*60, function() {
            $typs_db = Truck_typs::all()->where('lang', $this->locale);
            $typs = '';
            foreach($typs_db as $key => $typ){
                $typs[$typ->typs_id] = $typ->typs;
            }
            return $typs;
        });
        $this->categories = Cache::remember('categoriesAll'.$this->locale, 22*60, function() {
            $categories_db = Truck_categories::all()->where('lang', $this->locale);
            $categories = '';
            foreach($categories_db as $key => $category){
                $categories[$key] = $category->category;
            }

            return $categories;
        });

        $this->langs = Cache::remember('langs', 22*60, function() {
            $langs_db = Langs::all();
            $langs = '';
            foreach($langs_db as $key => $lang){
                $langs[$key] = $lang->country;
            }
            return $langs;
        });
        $this->fullUrl = "https://".trans('app.homeTitle').$request->path();
        $this->root = "https://".trans('app.homeTitle');

    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getIndex($lang = null)
    {

        if(!Auth::user()->profile){
            return redirect()->route('show.registerProfile');
        }
        if ($lang) {
            $userCountry = strtolower($lang);
        } else {
            $userCountry = strtolower(auth()->user()->profile->country);
        }
        $trucks = null;
        if(in_array($userCountry, $this->langs)) {
            $trucks = new Truck();
            $trucks->setable("trucks_$userCountry");
            $trucks->setLang($userCountry);
            $trucks = @$trucks->orderBy('id', 'DESC')->with('truck_datas')->with('typs')->with('cate')->paginate(20);
        }

        return view('layouts.vue',[
            'actualLang' => $userCountry,
            'trucks'    => $trucks,
            'langs'    => $this->langs,
            'typs'          => $this->typs,
            'categories'    => $this->categories,
            'fullUrl'   => $this->fullUrl,
            'root'   => $this->root,
        ]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function postSearch(Request $request)
    {

        $this->validate($request, [
            "from_lat" => 'max:255',
            "from_lng" => 'max:255',
            "from_distance" => 'required|numeric|max:9999',
            "where_lat" => 'max:255',
            "where_lng" => 'max:255',
            "where_distance" => 'required|numeric|max:9999',
            "type" => 'numeric|max:255',
            "cat" => 'numeric|max:255',
            "weight" => 'numeric|max:100|min:0',
            "lm" => 'numeric|max:100|min:0',
        ]);

        $trucks = null;
        $country = strtolower($request->country);
        $check = Langs::where('country',$country)->first();
        if($check){
            $type = $request->type;
            $cat = $request->cat;
            $lm  = preg_replace('/\,/', '.', $request->lm) != '' ? $request->lm : 1;
            $weight = preg_replace('/\,/', '.', $request->weight) != '' ? $request->weight : 1;


            $from_lat = $request->from_lat;
            $from_lng = $request->from_lng;
            $where_lat = $request->where_lat;
            $where_lng = $request->where_lng;

            $from_distance = $request->from_distance;
            if($from_distance == "" || $from_distance == 0){
                $from_distance = 1;
            }
            $from_distance = $from_distance / 100;
            $where_distance = $request->where_distance;
            if($where_distance == "" || $where_distance == 0){
                $where_distance = 1;
            }
            $where_distance = $where_distance / 100;

            $from_upper_lat = $from_lat + $from_distance;
            $from_lower_lat = $from_lat - $from_distance;
            $from_upper_lng = $from_lng + $from_distance;
            $from_lower_lng = $from_lng - $from_distance;

            $where_upper_lat = $where_lat + $where_distance;
            $where_lower_lat = $where_lat - $where_distance;
            $where_upper_lng = $where_lng + $where_distance;
            $where_lower_lng = $where_lng - $where_distance;

            $trucks = new Truck();
            $trucks->setable("trucks_$country");
            $trucks->setLang($country);
            $trucks  = $trucks
                ->orderBy('id','DESC')
                ->select('id','trucks_id', 'type', 'cat', 'weight', 'lm');

              if($type != '0'){
                  $trucks  = $trucks->where('type',$type);
              }
              if($cat != '0'){
                  $trucks  = $trucks->where('cat',$cat);
              }

            $trucks = $trucks->where('lm','>', $lm)
                 ->where('weight','>', $weight)
                 ->whereBetween('from_lat', [$from_lower_lat, $from_upper_lat])
                 ->whereBetween('from_lng', [$from_lower_lng, $from_upper_lng])
                 ->whereBetween('where_lat', [$where_lower_lat, $where_upper_lat])
                 ->whereBetween('where_lng', [$where_lower_lng, $where_upper_lng])
                 ->with('typs')->with('cate')
                 ->with('truck_datas')->paginate(15);
        }
        return view('pages.trucks',[
            'trucks'    => $trucks,
            'typs'          => $this->typs,
            'categories'    => $this->categories,
            'fullUrl'   => $this->fullUrl,
            'root'   => $this->root,
            'langs'    => $this->langs,
            'actualLang' => $country,
        ]);
    }

    public function getShowId($id)
    {
        $truck_datas = Truck_datas::where('id',$id)->first();
        if($truck_datas) {
            return redirect()->route('truck.show',array('id' => $truck_datas->id,'odCountry' => str_slug($truck_datas->from_country), 'odCity' => str_slug($truck_datas->from_city), "doCounty"=> str_slug($truck_datas->where_country),"doCity"=> str_slug($truck_datas->where_city)));
        }

        return redirect()->back();
    }
    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getShow($id)
    {
        $truck_datas = Truck_datas::where('id',$id)->first();
        if($truck_datas) {
            $truck = new Truck();
            $country = strtolower($truck_datas->from_country);
            $truck->setable("trucks_$country");
            $truck = $truck->where('trucks_id', $truck_datas->id)->with('typs')->with('cate')->first();
            if (Auth::user()) {
                $userid = auth()->user()->id;
                $reactions = Reactions::where('product_id', $id)->where('product', 0)->with('profile')
                    ->paginate(10);

                $user_react = Reactions::where('user_id', $userid)->where('product_id', $id)->where('product', 0)->first();
                $atemptions = Atemption::where('product_id', $id)->where('product', '0')->where('user_id', $userid)->get();
                if ($atemptions) {
                    foreach ($atemptions as $atemption) {
                        $atemption->delete();
                    }
                }
                return view("pages.show.truck", [
                    'reactions' => $reactions,
                    'truck' => $truck,
                    'truck_datas' => $truck_datas,
                    'user_react' => $user_react,
                    'fullUrl' => $this->fullUrl,
                    'root' => $this->root,
                ]);
            } else {
                return view("pages.show.truck", [
                    'truck' => $truck,
                    'truck_datas' => $truck_datas,
                    'typs' => $this->typs,
                    'categories' => $this->categories,
                    'fullUrl' => $this->fullUrl,
                    'root' => $this->root,
                ]);
            }
        }
        Session::flash('error', trans('app.notExists'));
        return redirect()->route('home');
    }

    /**
     * @param $id
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function postTruckReactionAdd($truck_id, Request $request){

        Session::flash('reaction', 'error');

        $this->validate($request, [
            "lm"    => 'required|numeric|min:1|max:1000',
            "weight"    => 'required|numeric|min:1|max:1000',
            "desc"      => 'max:2000',
            "price"     => 'required|numeric|min:1|max:99999999999',
        ]);
        Session::forget('reaction');

        $user_id = Truck_datas::where('id',$truck_id)->first()->user_id;
        $check = Atemption::where('user_id', $user_id)->where('product', 0)->where('product_id', $truck_id)->where('kind', 0)->first();

        if(!$check){
            $atemption = new Atemption();
            $atemption-> user_id = $user_id;
            $atemption->product = 0;
            $atemption->product_id = $truck_id;
            $atemption->kind = 0;
            $atemption->save();
        }
            $desc = $request->desc;
            $reaction = new Reactions();
            $reaction->user_id = Auth::user()->id;
            $reaction->product = 0;
            $reaction->product_id = $truck_id;
            $reaction->desc = $desc;
            $reaction->lm = $request->lm;
            $reaction->weight = $request->weight;
            $reaction->price = $request->price;
            $reaction->timestamps = false;
            $reaction->save();
        Cache::forget('profile'.Auth::user()->id);
        Session::flash('success', trans('app.reactAdded'));
        return redirect()->back();
    }

    /**
     * @param $truck_id
     * @param $user_id
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function postTruckReactionRewrite($truck_id, $user_id, Request $request){
        Session::flash('reactionEdit', 'error');
        $this->validate($request, [
            "lm"    => 'required|numeric|min:1|max:1000',
            "weight"    => 'required|numeric|min:1|max:1000',
            "desc"      => 'max:2000',
            "price"     => 'required|numeric|min:1|max:99999999999',
        ]);
        Session::forget('reactionEdit');
        DB::table('reactions')->where('product',0)->where('product_id',$truck_id)->where('user_id', $user_id)->update([
            'lm'  => $request->lm,
            'weight' => $request->weight,
            'price' => $request->price,
            'desc'  => $request->desc,
        ]);
        Cache::forget('profile'.Auth::user()->id);
        return redirect()->back();
    }

    /**
     * @param $truck_id
     * @param $user_id
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function postTruckReactionDelete($truck_id, $user_id, Request $request){
        $this->validate($request, [
            "truck_id"    => 'numeric',
            "user_id"     => 'numeric',
        ]);

        DB::table('reactions')->where('product',0)->where('product_id',$truck_id)->where('user_id', Auth::user()->id)->delete();

        Cache::forget('profile'.Auth::user()->id);
        return redirect()->back();
    }

    /**
     * @param $id
     * @param $user_id
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function getTruckReactionAccept($id, $user_id)
    {
        //after 30 day after the accept delete the record
        $delete = Carbon::now()->addDay(30);
        $query = Truck_datas::where('id', $id)->first();


        if($query->user_id == Auth::user()->id){
            $check = Atemption::where('user_id', $user_id)->where('product', 0)->where('product_id', $id)->where('kind', 1)->first();

            if(!$check){
                $atemption = new Atemption();
                $atemption-> user_id = $user_id;
                $atemption->product = 0;
                $atemption->product_id = $id;
                $atemption->kind = 1;
                $atemption->save();
            }
            Truck_datas::where('id', $id)->update([
                'accept' => $user_id,
                'delete' => $delete
            ]);
        }

        return redirect()->back();
    }

    /**
     * @param $truck_id
     * @param $user_id
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function getTruckReactionAcceptDelete($truck_id, $user_id)
    {
        $delete = Carbon::now()->addDay(60);
        //Megvizsgaljuk hogy a tulajdonos e akarja torolni
        $query = Truck_datas::where('id', $truck_id)->first();
        if($query->user_id == Auth::user()->id){
            // lekerjuk hogy van e ertekelve mar az aktuallis project
            $rating = Rating::where('truck_id', $truck_id)->where('rated_id', $user_id)->first();
            // ha vollt akkor kikell torolnunk es visszakell allitani az elozore a felhasznalonal
            if($rating){
                $rating =   ($rating->termin + $rating->kvalita + $rating->price + $rating->komunication ) /4;
                $profile = Profile::where('user_id',$user_id)->first();
                if($profile->vote != 1){
                    $old_rating =$profile->rating *2 - $rating;
                }else{
                    $old_rating = $profile->rating - $rating;
                }
                Rating::where('truck_id', $truck_id)->delete();
                DB::table('profiles')->where('user_id',$user_id)->update(['vote' => $profile->vote -1, 'rating' => $old_rating]);
            }

            Truck_datas::where('id', $truck_id)->update([
                'accept' => null,
                'rated' => 0,
                'delete' => $delete
            ]);
        }
        return redirect()->back();
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function getDeletetruck($id)
    {
        if(Auth::user()){
        $userid = auth()->user()->id;
        $truck_datas = Truck_datas::where('id',$id)->where('user_id',$userid)->first();
            if($truck_datas){
                $truck = new Truck();
                $country = strtolower($truck_datas->from_country);
                $truck->setable("trucks_$country");
                $truck = $truck->where('trucks_id',$truck_datas->id)->first();
                $truck->setable("trucks_$country");
                $truck->delete();
                $truck_datas->delete();
            }
        }
        Session::flash('success', trans('app.ponukaDeleted'));
        return redirect()->route('home');
    }

}





