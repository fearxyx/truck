<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use \Hash;

class User extends \TCG\Voyager\Models\User
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','image','image_path'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function setPasswordAttribute($value) {
        $this->attributes['password'] = Hash::make($value);
    }

    public function messages() {
        return $this->hasMany('App\Message');
    }

    public function receivers() {
        return $this->hasMany('App\Receiver');
    }
    public function profile()
    {
        return $this->belongsTo('App\Profile','id','user_id');
    }

    public function atemptions()
    {
        return $this->belongsTo('App\Atemption','id','user_id')->select('product','kind','product_id')->orderBy('created_at', 'desc');
    }

    public function freinds(){
        return $this->belongsTo('App\Freind','id','freind_id')->where('user_id',Auth::user()->id);
    }
    public function notifications(){
        return $this->hasMany('App\Message','r_user_id','id')->select('user_id')->groupBy('user_id');
    }
}
