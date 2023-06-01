<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RateController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\PcController;

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

Route::post('/signup', [AuthController::class, "signup"]);
Route::post('/login', [AuthController::class, "login"]);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, "logout"]);
Route::middleware('auth:sanctum')->post('/refresh', [AuthController::class, "refresh"]);

Route::prefix('rate')->group(function(){
    Route::middleware('auth:sanctum')->get('/all', [RateController::class, 'index']);
    Route::middleware('auth:sanctum')->post('/basket', [RateController::class, 'inBasket']);
    Route::middleware('auth:sanctum')->post('/add', [RateController::class, 'addToBasket']);
    Route::middleware('auth:sanctum')->delete('/del', [RateController::class, 'deleteFromBasket']);
    Route::middleware('auth:sanctum')->get('/admin', [RateController::class, 'admin']);
    Route::middleware('auth:sanctum')->post('/', [RateController::class, 'create']);
    Route::middleware('auth:sanctum')->post('/date', [RateController::class, 'createDate']);
    Route::middleware('auth:sanctum')->post('/img', [RateController::class, 'setImage']);
    Route::middleware('auth:sanctum')->patch('/', [RateController::class, 'update']);
    Route::middleware('auth:sanctum')->patch('/date', [RateController::class, 'updateDate']);
    Route::middleware('auth:sanctum')->delete('/', [RateController::class, 'delete']);
    Route::middleware('auth:sanctum')->delete('/date', [RateController::class, 'deleteDate']);
    Route::middleware('auth:sanctum')->post('/buy', [RateController::class, 'buy']);
});
Route::prefix('product')->group(function(){
    Route::middleware('auth:sanctum')->get('/all', [ProductController::class, 'index']);
    Route::middleware('auth:sanctum')->post('/basket', [ProductController::class, 'inBasket']);
    Route::middleware('auth:sanctum')->post('/add', [ProductController::class, 'addToBasket']);
    Route::middleware('auth:sanctum')->delete('/del', [ProductController::class, 'deleteFromBasket']);
    Route::middleware('auth:sanctum')->get('/admin', [ProductController::class, 'admin']);
    Route::middleware('auth:sanctum')->post('/', [ProductController::class, 'create']);
    Route::middleware('auth:sanctum')->post('/info', [ProductController::class, 'createInfo']);
    Route::middleware('auth:sanctum')->post('/img', [ProductController::class, 'setImage']);
    Route::middleware('auth:sanctum')->patch('/', [ProductController::class, 'update']);
    Route::middleware('auth:sanctum')->patch('/info', [ProductController::class, 'updateInfo']);
    Route::middleware('auth:sanctum')->delete('/', [ProductController::class, 'delete']);
    Route::middleware('auth:sanctum')->delete('/info', [ProductController::class, 'deleteInfo']);
    Route::middleware('auth:sanctum')->post('/buy', [ProductController::class, 'buy']);
    Route::middleware('auth:sanctum')->delete('/deleteins', [ProductController::class, 'deleteInstance']);
    Route::middleware('auth:sanctum')->post('/createins', [ProductController::class, 'createInstance']);
});
Route::prefix('pc')->group(function(){
    Route::middleware('auth:sanctum')->get('/admin', [PcController::class, 'admin']);
    Route::middleware('auth:sanctum')->post('/', [PcController::class, 'create']);
    Route::middleware('auth:sanctum')->post('/info', [PcController::class, 'createInfo']);
    Route::middleware('auth:sanctum')->patch('/', [PcController::class, 'update']);
    Route::middleware('auth:sanctum')->patch('/info', [PcController::class, 'updateInfo']);
    Route::middleware('auth:sanctum')->delete('/', [PcController::class, 'delete']);
    Route::middleware('auth:sanctum')->delete('/info', [PcController::class, 'deleteInfo']);
});
Route::middleware('auth:sanctum')->get('/image', [FileController::class, "all"]);
Route::middleware('auth:sanctum')->post('/image', [FileController::class, "getImage"]);
Route::middleware('auth:sanctum')->delete('/image', [FileController::class, "delete"]);