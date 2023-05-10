<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Validation\Validator;
use App\Models\Basket;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{   

    public function signup(SignupRequest $request){
        $data = $request->validated();
        $user = User::create([
            'email'=> $data['email'],
            'password'=> bcrypt($data['password']),
            'nickname'=> 'user',
            'role'=>'USER'
        ]);
        Basket::create([
            'user_id'=> $user->id
        ]);
        return ['token'=> $user->createToken($data['email'])->plainTextToken, 'role' => 'USER'];
    }
    public function login(Request $request){
        $data = json_decode($request->getContent(), true);
        if(!Auth::attempt(['email'=>$data['email'], 'password'=>$data['password']])){
            return 'Вы не авторизованы';
        }
        $user = Auth::user();
        $user->tokens()->delete();
        $role = $user->role;
        if($role = 'ADMIN'){
            $token = $user->createToken($data['email'], ['admin'])->plainTextToken;
        } else {
            $token = $user->createToken($data['email'])->plainTextToken;
        }


        return response(['role' => $role, 'token' => $token], 200);
    }
    public function logout(Request $request){
        $user = Auth::user()->tokens()->delete();
        return response('', 200);
    }
    public function refresh(Request $request){
        $user = Auth::user();
        $user->tokens()->delete();
        $role = $user->role;
        if($role = 'ADMIN'){
            $token = $user->createToken($user->email, ['admin'])->plainTextToken;
        } else {
            $token = $user->createToken($user->email)->plainTextToken;
        }


        return response(['role' => $role, 'token' => $token], 200);
    }
}
