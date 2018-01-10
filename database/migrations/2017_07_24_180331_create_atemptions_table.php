<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAtemptionsTable extends Migration
{
    /**
     * Run the migrations.
     * 0-new Comment
     * 1-accepted
     * @return void
     */
    public function up()
    {
        Schema::create('atemptions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('product_id');
            $table->integer('product');
            $table->integer('kind');
            $table->index('user_id');
            $table->index('product_id');
            $table->index('product');
            $table->index('kind');
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
        Schema::dropIfExists('atemptions');
    }
}
