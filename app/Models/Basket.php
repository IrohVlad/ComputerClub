<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Basket extends Model
{
    use HasFactory;
    public $table = "basket";
    // protected $fillable = ['user_id'];
    public $timestamps = false;
    public $fillable = ['user_id'];

    public function user() {
        return $this->belongsTo(User::class);
    }
    public function products(){
        return $this->belongsToMany(ProductType::class)->withPivot('count');
    }
    public function rates(){
        return $this->belongsToMany(Rate::class);
    }

}
