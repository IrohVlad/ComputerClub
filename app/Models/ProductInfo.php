<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductInfo extends Model
{
    use HasFactory;
    protected $table = 'product_info';
    protected $fillable = ['product_type_id', 'title', 'value'];
    public $timestamps = false;

    public function productType(){
        return $this->belongsTo(ProductType::class);
    }
}
