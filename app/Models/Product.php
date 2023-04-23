<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function baskets(){
        $this->belongsToMany(Basket::class);
    }
    public function productType(){
        $this->belongsTo(ProductType::class);
    }
}
