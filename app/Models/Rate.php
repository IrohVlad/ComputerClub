<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rate extends Model
{
    use HasFactory;

    protected $table = 'rate';
    public function pc(){
        return $this->belongsTo(Pc::class);
    }
    public function rateTypes(){
        return $this->belongsTo(RateType::class, 'rate_type_id');
    }
    public function baskets(){
        return $this->belongsToMany(Basket::class);
    }
}
