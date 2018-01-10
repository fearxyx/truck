<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

class Langs extends Model
{
    public $timestamps = false;

    public function check($lang){
        $check = Langs::where('country',$lang)->first();
        if(!$check){
            $table = new Langs();
            $table->country = $lang;
            $table->save();
            Cache::forget('langs');
            $this->createTruckTable($lang);
            $this->createProductTable($lang);
            return true;
        }
        return true;
    }

    /**
     * @param $lang
     */
    public function createProductTable($lang){
        Schema::create("products_$lang", function (Blueprint $table) {
            $table->increments('id');
            $table->integer('products_id');
            $table->decimal('from_lat',10,6);
            $table->decimal('from_lng',10,6);
            $table->decimal('where_lat',10,6);
            $table->decimal('where_lng',10,6);
            $table->integer('type');
            $table->integer('cat');
            $table->integer('weight');
            $table->integer('lm');
            $table->index('products_id');
        });
    }

    /**
     * @param $lang
     */
    public function createTruckTable($lang)
    {
        Schema::create("trucks_$lang", function (Blueprint $table) {
            $table->increments('id');
            $table->integer('trucks_id');
            $table->decimal('from_lat',10,6);
            $table->decimal('from_lng',10,6);
            $table->decimal('where_lat',10,6);
            $table->decimal('where_lng',10,6);
            $table->integer('type');
            $table->integer('cat');
            $table->integer('weight');
            $table->integer('lm');
            $table->index('trucks_id');
        });
    }

}
