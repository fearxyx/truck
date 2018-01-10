<?php

namespace App\Http\Controllers;


use App\Message;
use Illuminate\Http\Request;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class HomeController extends Controller
{
    public $fullUrl,$root;


    public function __construct(Request $request)
    {

        $this->fullUrl = "https://".trans('app.homeTitle').$request->path();
        $this->root = "https://".trans('app.homeTitle');
    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home',[
            'fullUrl'   => $this->fullUrl,
            'root'   => $this->root,
        ]);
    }
    public function appIndex()
    {
        return view('app.layouts.vue');
    }
    public function getRedirect($type,Request $request){
        if($type ==1 ){
            if($request->type == 1){
                return redirect()->route('search.truck');
            }
            return redirect()->route('search.product');
        }else{
            if($request->type == 1){
                return redirect()->route('add.truck');
            }
            return redirect()->route('add.product');
        }
    }

    public function error404()
    {
        return view('errors.404',[
            'fullUrl'   => $this->fullUrl,
            'root'   => $this->root,
        ]);
    }
}
