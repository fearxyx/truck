<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Truck_datas extends Model
{
    protected $table = 'trucks_datas';

    public function profile()
    {
        return $this->belongsTo('App\Profile','user_id','user_id');
    }
}
