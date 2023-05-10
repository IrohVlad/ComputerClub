<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    public $table = "user";
    protected $fillable = ['email', 'password', 'role', 'nickname'];
    public $timestamps = false;
    use HasFactory, HasApiTokens, Notifiable;
    public function basket() {
        return $this->hasOne(Basket::class);
    }
}
