<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PcInfo extends Model
{
    use HasFactory;

    protected $table = 'pc_info';
    protected $fillable = ['pc_id', 'title', 'value'];
    public $timestamps = false;
    public function pc(){
        return $this->belongsTo(Pc::class);
    }
}