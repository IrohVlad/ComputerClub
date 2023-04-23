<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rate extends Model
{
    use HasFactory;

    public function pc(){
        $this->belongsTo(Pc::class);
    }
    public function pcInfo(){
        $this->belongsToMany(Basket::class);
    }
}
