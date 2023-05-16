<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class FileController extends Controller
{
    public function getImage(Request $request){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $path = Storage::putFile('public', $request->file('img'));
        return $path;
    }
    public function delete(Request $request){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $data = json_decode($request->getContent(), true);
        Storage::delete($data['img']);
        $images = Storage::files('public');
        return $images;
    }
    public function all(Request $request){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $images = Storage::files('public');
        return $images;
    }
}