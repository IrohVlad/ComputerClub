<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function getImage(Request $request){
        $path = Storage::putFile('public', $request->file('img'));
        return $path;
    }
    public function delete(Request $request){
        $data = json_decode($request->getContent(), true);
        Storage::delete($data['img']);
        $images = Storage::files('public');
        return $images;
    }
    public function all(Request $request){
        $images = Storage::files('public');
        return $images;
    }
}
