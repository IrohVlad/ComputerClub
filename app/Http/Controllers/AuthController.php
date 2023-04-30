<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Validation\Validator;
use App\Models\Basket;

class AuthController extends Controller
{   

    public function signup(SignupRequest $request){
        $data = $request->validated();
        $user = User::create([
            'mail'=> $data['mail'],
            'password_hash'=> bcrypt($data['password']),
            'nickname'=> 'user',
            'role'=>'USER'
        ]);
        return ['token'=> $user->createToken($data['mail'])->plainTextToken, 'role' => 'USER'];
    }
    public function login(Request $request){
        $users = Basket::with('products')->get();

        return $users;
    }
}
