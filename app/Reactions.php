<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reactions extends Model
{
    public $timestamps = false;

    public function profile()
    {
        return $this->belongsTo('App\Profile','user_id','user_id');
    }
    public function truck_datas()
    {
        return $this->belongsTo('App\Truck_datas','product_id','id')->orderBy('id','desc');
    }
    public function product_datas()
    {
        return $this->belongsTo('App\Product_datas','product_id','id')->orderBy('id','desc');
    }
}
