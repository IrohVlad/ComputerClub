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
        Schema::create('basket_product_type', function (Blueprint $table) {
            $table->id();
            $table->foreignId('basket_id')->constrained('basket');
            $table->foreignId('product_type_id')->constrained('product_type');
            $table->integer('count')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('basket_product_type');
    }
};
