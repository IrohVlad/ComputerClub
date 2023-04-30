<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PcInfo extends Model
{
    use HasFactory;
    public function pc(){
        return $this->belongsTo(Pc::class);
    }
}
