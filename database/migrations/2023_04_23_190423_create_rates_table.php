<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rate', function(Blueprint $table){
            $table->id()->autoIncrement();
            $table->foreignId('rate_type_id')->constrained('rate_type');
            $table->foreignId('pc_id')->constrained('pc');
            $table->string('title');
            $table->string('price');
            $table->string('short_description');
            $table->text('description');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
