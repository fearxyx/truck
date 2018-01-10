<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product_datas extends Model
{
    protected $table = 'products_datas';

    public function profile()
    {
        return $this->belongsTo('App\Profile','user_id','user_id');
    }
}