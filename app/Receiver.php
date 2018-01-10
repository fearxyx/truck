<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Receiver extends Model
{
	protected $fillable = ['user_id','message_id'];


    public function user() 
    {
    	return $this->belongsTo('App\User');
    }

    public function message()
    {
    	return $this->belongsTo('App\Message');
    }
    public function profile()
    {
        return $this->belongsTo('App\Profile','user_id','user_id')->select('avatar','user_id','name');
    }
}
