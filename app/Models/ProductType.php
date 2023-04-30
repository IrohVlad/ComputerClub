<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductType extends Model
{
    use HasFactory;
    protected $table = 'product_type';
    public $timestamps = false;
    protected $fillable = ['name', 'price', 'img'];

    public function productInfo(){
        return $this->hasMany(ProductInfo::class);
    }
    public function products(){
        return $this->hasMany(Product::class);
    }

    public function baskets(){
        return $this->belongsToMany(Basket::class)->withPivot('count');
    }
}
