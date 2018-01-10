<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
	protected $fillable = ['message','file_path','file_name','type','user_id'];

    public function user() 
    {
    	return $this->belongsTo('App\User');
    }

    public function receivers() {
        return $this->hasMany('App\Receiver');
    }
    public function profile()
    {
        return $this->belongsTo('App\Profile','id','user_id')->select('avatar','user_id','name');
    }
}
