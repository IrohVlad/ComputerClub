<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pc extends Model
{
    use HasFactory;

    protected $table = 'pc';
    protected $fillable = ['pc_id', 'rate_type_id', 'date'];
    public $timestamps = false;

    public function rates(){
        return $this->hasMany(Rate::class);
    }
    public function pcInfo(){
        return $this->hasMany(PcInfo::class);
    }
}