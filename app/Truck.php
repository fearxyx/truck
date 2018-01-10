<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Truck extends Model
{

    protected $table = 'trucks';
    protected $lang;
    protected $fillable =  [ 'type', 'cat', 'weight', 'height','width'];
    public $timestamps = false;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'id', 'user_id', 'where_lat', 'where_lng', 'country', 'from_lat',
    ];

    public function setable($table)
    {
        $this->table = $table;
    }

    public function setLang($lang)
    {
        $this->lang = $lang;
    }

    public function truck_datas()
    {
        return $this->belongsTo('App\Truck_datas','trucks_id','id')->with('profile');
    }
    public function truck_reactions()
    {
        return $this->belongsTo('App\Reaction','trucks_id','truck_id')->where('product',0);
    }

    public function typs()
    {
        $locale = app()->getLocale();
        return $this->belongsTo('App\Truck_typs','type','typs_id')->where('lang', $locale);
    }
    public function cat()
    {
        $locale = app()->getLocale();
        return $this->belongsTo('App\Truck_categories','cat','id')->select('category')->where('lang', $locale);
    }
    public function cate()
    {
        $locale = app()->getLocale();
        return $this->belongsTo('App\Truck_categories','cat','category_id')->where('lang', $locale);
    }
}
