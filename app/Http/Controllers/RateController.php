<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\RateType;
use App\Models\Rate;
use App\Models\Basket;
use App\Models\Pc;
use Carbon\Carbon;

class RateController extends Controller
{
    public function index(Request $request){
        $user = Auth::user();
        if(!$user){
            return response('unauthorized', 401);
        }
        $basket = $user->basket;
        $rates = RateType::with('rates')->get();
        foreach($rates as $rate){
            foreach($rate['rates'] as $currentRate){
                $inBasket = Basket::find($basket->id)->rates()->where('rate_id', $currentRate['id'])->first();
                if($inBasket){
                    $currentRate->in = true;
                } else {
                    $currentRate->in = false;
                }
                if($currentRate->sold){
                }
            }
            
        }
        
        return $rates;
    }

    public function inBasket(Request $request){
        $user = Auth::user();
        if(!$user){
            return response('unauthorized', 401);
        }
        $basket = $user->basket;
        $rates = $basket->rates;
        foreach($rates as $rate){
            if($rate->sold == true){
                $basket->rates()->detach($rate->id);
            }
        }  
        return $basket->rates()->with('rateTypes')->get();
    }
    public function admin(){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $rates = RateType::with('rates')->get();
        
        return $rates;
    }
    public function create(Request $request){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $data = json_decode($request->getContent(), true);
        RateType::create([
            'title' => $data['title'],
            'price' => $data['price'],
            'short_description' => $data['short_description'],
            'description' => $data['description']
        ]);
        return RateType::get();
    }
    public function createDate(Request $request){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $data = json_decode($request->getContent(), true);
        $pcs = Pc::get();
        foreach($pcs as $pc){
            Rate::create([
                'pc_id' => $pc->id,
                'rate_type_id' => $data['rate_type_id'],
                'date' => $data['date']
            ]);
        }
        return Rate::get();
    }
    public function update(Request $request){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $data = json_decode($request->getContent(), true);
        $rate = RateType::find($data['id']);
        $rate->title = $data['title'];
        $rate->price = $data['price'];
        $rate->short_description = $data['short_description'];
        $rate->description = $data['description'];
        $rate->save();
        return RateType::get();
    }
    public function updateDate(Request $request){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $data = json_decode($request->getContent(), true);
        $rate = Rate::find($data['id']);
        if(Carbon::parse(Carbon::now()->format('Y-m-d'))->gt(Carbon::parse($data['date']))){
            $rate->date = $data['date'];
            $rate->save();
        } else {
            $rate->date = Carbon::now()->format('Y-m-d');
            $rate->save();
        }
        return Rate::get();
    }
    public function setImage(Request $request){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $data = json_decode($request->getContent(), true);
        $rate = RateType::find($data['id']);
        $rate->img = $data['img'];
        $rate->save();
        return RateType::get();
    }
    public function delete(Request $request){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $data = json_decode($request->getContent(), true);
        RateType::destroy($data['id']);
        return RateType::get();
    }
    public function deleteDate(Request $request){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $data = json_decode($request->getContent(), true);
        Rate::destroy($data['id']);
        return Rate::get();
    }
    public function addToBasket(Request $request){
        $data = json_decode($request->getContent(), true); 
        $user = Auth::user();
        if(!$user){
            return response('unauthorized', 401);
        }
        $basket = $user->basket;
        $rate = Rate::find($data['rateId']);
        $rate->baskets()->attach($basket->id);
        return Basket::with('rates')->get();
    }
    public function deleteFromBasket(Request $request){
        $data = json_decode($request->getContent(), true);
        $user = Auth::user();
        if(!$user){
            return response('unauthorized', 401);
        }
        $basket = $user->basket;
        $rate = Rate::find($data['rateId']);
        $rate->baskets()->detach($basket->id);
        return Basket::with('rates')->get();
    }
    public function buy(Request $request){
        $data = json_decode($request->getContent(), true);
        $user = Auth::user();
        if(!$user){
            return response('unauthorized', 401);
        }
        $basket = $user->basket;
        $rate = Rate::find($data['rate_id'])->where('sold', false)->first();
        if($rate){
            $rate->sold = true;
            $rate->buyer = $user->id;
            $rate->save();
            $basket->rates()->detach($data['rate_id']);
            return $basket->with('rates')->get();
        } else {
            return ["error"=>"Тариф не найден"];
        }
    }
}
