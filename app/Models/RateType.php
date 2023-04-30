<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RateType extends Model
{
    use HasFactory;
    protected $table = 'rate_type';
    public $timestamps = false;
    protected $fillable = ['title', 'price', 'short_description', 'description'];
    public function rates(){
        return $this->hasMany(Rate::class);
    }
}
