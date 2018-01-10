<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Freind extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'freind_id', 'user_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'id',
    ];

    public function user()
    {
        return $this->belongsTo('App\Profile','freind_id','user_id')->select('name','user_id')->orderBy('name','ASC');
    }
}
