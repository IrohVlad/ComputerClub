<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pc extends Model
{
    use HasFactory;

    public function rates(){
        $this->hasMany(Rate::class);
    }
    public function pcInfo(){
        $this->hasMany(PcInfo::class);
    }
}
