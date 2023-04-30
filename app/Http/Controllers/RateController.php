<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RateType;
use App\Models\Rate;
use App\Models\Basket;

class RateController extends Controller
{
    public function index(){
        $rates = RateType::with('rates')->get();
        return $rates;
    }
    public function create(Request $request){
        $data = json_decode($request->getContent(), true);
        RateType::create([
            'title' => $data['title'],
            'price' => $data['price'],
            'short_description' => $data['short_description'],
            'description' => $data['description']
        ]);
        return RateType::get();
    }
    public function update(Request $request){
        $data = json_decode($request->getContent(), true);
        $rate = RateType::find($data['id']);
        $rate->title = $data['title'];
        $rate->price = $data['price'];
        $rate->short_description = $data['short_description'];
        $rate->description = $data['description'];
        $rate->save();
        return RateType::get();
    }
    public function setImage(Request $request){
        $data = json_decode($request->getContent(), true);
        $rate = RateType::find($data['id']);
        $rate->img = $data['img'];
        $rate->save();
        return RateType::get();
    }
    public function delete(Request $request){
        $data = json_decode($request->getContent(), true);
        RateType::destroy($data['id']);
        return RateType::get();
    }
    public function addToBasket(Request $request){
        $data = json_decode($request->getContent(), true);
        $rates = Rate::where('rate_type_id', $data['rateId'])->get();
        $inBasket = Basket::find($data['basketId'])->rates()->where('rate_type_id', $data['rateId'])->first();
        if($inBasket){
            if(count($rates) <= $inBasket->pivot->count){
                return 'Недостаточно товаров';
            } 
            $inBasket->pivot->count = $inBasket->pivot->count + 1;
            $inBasket->pivot->save();
            return Basket::with('rates')->get();
        } else {
            if(count($rates) < 1){
                return 'Недостаточно товаров';
            }
            $rate = RateType::find($data['rateId']);
            $rate->baskets()->attach($data['basketId']);
            return Basket::with('rates')->get();
        }
    }
    public function deleteFromBasket(Request $request){
        $data = json_decode($request->getContent(), true);
        $inBasket = Basket::find($data['basketId'])->rates()->where('rate_type_id', $data['rateId'])->first();
        if($inBasket){
            if($inBasket->pivot->count > 1){
                $inBasket->pivot->count = $inBasket->pivot->count - 1;
                $inBasket->pivot->save();
            } else{
                $rate = RateType::find($data['rateId']);
                $rate->baskets()->detach($data['basketId']);
            }
            return Basket::with('rates')->get();
        } else {
            return 'Товара нет в корзине';
        }
    }
}
