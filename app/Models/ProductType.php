<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductType extends Model
{
    use HasFactory;

    public function productInfo(){
        $this->hasMany(ProductInfo::class);
    }
    public function products(){
        $this->hasMany(Product::class);
    }
}
