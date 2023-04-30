<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class User extends Model
{
    public $table = "user";
    protected $fillable = ['mail', 'password_hash', 'role', 'nickname'];
    public $timestamps = false;
    use HasFactory, HasApiTokens;
    public function basket() {
        return $this->hasOne(Basket::class);
    }
}
