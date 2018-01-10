<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTruckDatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trucks_datas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->references('id')->on('users');
            $table->string('from_country')->nullable();
            $table->string('from_city')->nullable();
            $table->string('from_street')->nullable();
            $table->string('from_street_number')->nullable();
            $table->string('from_psc')->nullable();
            $table->date('time')->nullable();
            $table->string('where_country')->nullable();
            $table->string('where_city')->nullable();
            $table->string('where_street')->nullable();
            $table->string('where_street_number')->nullable();
            $table->string('where_psc')->nullable();
            $table->text('desc')->nullable();
            $table->integer('accept')->nullable();
            $table->integer('rated')->default(0);
            $table->date('delete');
            $table->timestamps();
            $table->index('user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trucks_datas');
    }

}
