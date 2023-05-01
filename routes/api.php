<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RateController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\FileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/signup', [AuthController::class, "signup"]);
Route::get('/login', [AuthController::class, "login"]);
Route::post('/logout', [AuthController::class, "logout"]);
Route::prefix('type')->group(function(){
    Route::get('/', [RateController::class, 'index']);
});
Route::prefix('rate')->group(function(){
    Route::post('/all', [RateController::class, 'index']);
    Route::post('/basket', [RateController::class, 'inBasket']);
    Route::post('/add', [RateController::class, 'addToBasket']);
    Route::delete('/del', [RateController::class, 'deleteFromBasket']);
    Route::post('/', [RateController::class, 'create']);
    Route::patch('/', [RateController::class, 'update']);
    Route::delete('/', [RateController::class, 'delete']);
});
Route::prefix('product')->group(function(){
    Route::post('/all', [ProductController::class, 'index']);
    Route::post('/basket', [ProductController::class, 'inBasket']);
    Route::post('/add', [ProductController::class, 'addToBasket']);
    Route::delete('/del', [ProductController::class, 'deleteFromBasket']);
    Route::post('/', [ProductController::class, 'create']);
    Route::post('/img', [ProductController::class, 'setImage']);
    Route::patch('/', [ProductController::class, 'update']);
    Route::delete('/', [ProductController::class, 'delete']);
});
Route::post('/image', [FileController::class, "getImage"]);
Route::delete('/image', [FileController::class, "delete"]); 
Route::get('/image', [FileController::class, "all"]);