<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RateType;
use App\Models\Rate;
use App\Models\Basket;

class RateController extends Controller
{
    public function index(Request $request){
        $data = json_decode($request->getContent(), true);
        $rates = RateType::with('rates')->get();
        foreach($rates as $rate){
            foreach($rate['rates'] as $currentRate){
                $inBasket = Basket::find($data['basketId'])->rates()->where('rate_type_id', $rate['id'])->where('date', $currentRate['date'])->first();
                if($inBasket){
                    $currentRate->in = true;
                } else {
                    $currentRate->in = false;
                }
            }
            
        }
        
        return $rates;
    }

    public function inBasket(Request $request){
        $data = json_decode($request->getContent(), true);
        $rates = Basket::find($data['basketId'])->rates()->with('rateTypes')->get();
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
        if($request->user()->isNot(Basket::find(1)->user()->get())){
            return 'Вы не авторизованы';
        }
        $data = json_decode($request->getContent(), true); 
        $rate = Rate::find($data['rateId']);
        $rate->baskets()->attach($data['basketId']);
        return Basket::with('rates')->get();
    }
    public function deleteFromBasket(Request $request){
        $data = json_decode($request->getContent(), true);
        $rate = Rate::find($data['rateId']);
        $rate->baskets()->detach($data['basketId']);
        return Basket::with('rates')->get();
    }
}
