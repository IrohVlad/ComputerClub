<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'product';
    public $fillable = ["product_type_id"];
    public function productType(){
        return $this->belongsTo(ProductType::class);
    }
}
