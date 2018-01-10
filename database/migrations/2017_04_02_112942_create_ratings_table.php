<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRatingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ratings', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('rated_id');
            $table->integer('truck_id');
            $table->integer('user_id');
            $table->integer('type');
            $table->float('termin',8,2);
            $table->float('kvalita',8,2);
            $table->float('price',8,2);
            $table->float('komunication',8,2);
            $table->text('comment')->nullable();
            $table->index('rated_id');
            $table->index('truck_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ratings');
    }
}
