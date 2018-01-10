<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Atemption extends Model
{
    public function truck_datas()
    {
        return $this->belongsTo('App\Truck_datas','product_id','id')->orderBy('id','desc');
    }
    public function product_datas()
    {
        return $this->belongsTo('App\Product_datas','product_id','id')->orderBy('id','desc');
    }
}
