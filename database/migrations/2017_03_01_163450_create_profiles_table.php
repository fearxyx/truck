<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('name');
            $table->string('country');
            $table->string('city');
            $table->string('street');
            $table->string('street_number');
            $table->string('psc');
            $table->decimal('lat',10,6);
            $table->decimal('lng',10,6);
            $table->string('web_page')->nullable();
            $table->string('ico');
            $table->string('tel_number1');
            $table->string('tel_number2')->nullable();
            $table->string('description')->nullable();
            $table->integer('vote')->default('0');
            $table->float('rating',8,2)->nullable();
            $table->integer('verify')->default('0');
            $table->integer('admin')->default('0');;
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
        Schema::dropIfExists('profiles');
    }
}
