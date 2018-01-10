<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Profile extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User','user_id','id');
    }
    public function ratings()
    {
        return $this->hasMany('App\Rating','rated_id','user_id')->orderBy('updated_at','desc');
    }
    public function ratingsLimit()
    {
        return $this->ratings()->limit(5)->with('user');
    }
    public function trucks()
    {
        return $this->hasMany('App\Truck_datas','user_id','user_id')->orderBy('id','desc');
    }
    public function trucksLimit()
    {
        return $this->trucks()->limit(5);
    }
    public function trucksTypeCat()
    {
        return $this->hasMany('App\UserTrucks','user_id','user_id');
    }

    public function products()
    {
        return $this->hasMany('App\Product_datas','user_id','user_id')->orderBy('id','desc');
    }
    public function productsLimit()
    {
        return $this->products()->limit(5);
    }
    public function reacts()
    {
        return $this->hasMany('App\Reactions','user_id','user_id')->orderBy('id','desc');
    }
    public function reactsLimit()
    {
        return $this->reacts()->limit(5)->with('product_datas','truck_datas');
    }
    public function truckReacts()
    {
        return $this->hasMany('App\Reactions','user_id','user_id')->where('product', 0)->orderBy('id','desc');
    }
    public function productReacts()
    {
        return $this->hasMany('App\Reaction','user_id','user_id')->where('product', 1)->orderBy('id','desc');
    }
    public function freinds(){
        return $this->belongsTo('App\Freind','id','freind_id')->where('user_id',Auth::user()->id)->select('freind_id','user_id');
    }
    public function messages() {
        return $this->hasMany('App\Message','user_id','user_id');
    }
}
