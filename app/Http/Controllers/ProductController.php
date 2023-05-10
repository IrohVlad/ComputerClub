<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\ProductType;
use App\Models\ProductInfo;
use App\Models\Product;
use App\Models\Basket;

class ProductController extends Controller
{
    public function index(Request $request){
        $products = ProductType::with(['productInfo'])->get(); 
        $user = Auth::user();
        if(!$user){
            return response('unauthorized', 401);
        }
        $basket = $user->basket;
        $result = [];
        foreach($products as $product){
            $inBasket = Basket::find($basket->id)->products()->where('product_type_id', $product['id'])->first();
            if($inBasket){
                $product->count = $inBasket->pivot->count;
            } else{
                $product->count = 0;
            }
            // $product->count = $inBasket->pivot->count;
            $result[] = $product;
        }  
        return $result;
    }
    public function admin(){
        $products = ProductType::with('productInfo')->get();
        return $products;
    }
    public function inBasket(Request $request){
        $user = Auth::user();
        if(!$user){
            return response('unauthorized', 401);
        }
        $basket = $user->basket;  
        $products = Basket::find($basket->id)->products;
        foreach($products as $product){
            $store = Product::where('product_type_id', $product->id)->where('sold', false)->get();
            if(count($store)){
                if(count($store)<$product->pivot->count){
                    $product->pivot->count = count($store);
                    $product->pivot->save();
                }

            } else{
                $basket->products()->detach($product->id);
            }
        }    
        return $products;
    }
    public function create(Request $request){
        $data = json_decode($request->getContent(), true);
        ProductType::create([
            'name' => $data['name'],
            'price' => $data['price']
        ]);
        return ProductType::get();
    }
    public function createInfo(Request $request){
        $data = json_decode($request->getContent(), true);
        ProductInfo::create([
            'product_type_id' => $data['product_type_id'],
            'title' => $data['title'],
            'value' => $data['value'],
        ]);
        return ProductInfo::get();
    }
    public function update(Request $request){
        $data = json_decode($request->getContent(), true);
        $rate = ProductType::find($data['id']);
        $rate->name = $data['name'];
        $rate->price = $data['price'];
        $rate->save();
        return ProductType::get();
    }
    public function updateInfo(Request $request){
        $data = json_decode($request->getContent(), true);
        $rate = ProductInfo::find($data['id']);
        $rate->title = $data['title'];
        $rate->value = $data['value'];
        $rate->save();
        return ProductInfo::get();
    }
    public function setImage(Request $request){
        $data = json_decode($request->getContent(), true);
        $rate = ProductType::find($data['id']);
        $rate->img = $data['img'];
        $rate->save();
        return ProductType::get();
    }
    public function delete(Request $request){
        $data = json_decode($request->getContent(), true);
        ProductType::destroy($data['id']);
        return ProductType::get();
    }
    public function deleteInfo(Request $request){
        $data = json_decode($request->getContent(), true);
        ProductInfo::destroy($data['id']);
        return ProductInfo::get();
    }

    public function addToBasket(Request $request){
        $data = json_decode($request->getContent(), true);
        $user = Auth::user();
        if(!$user){
            return response('unauthorized', 401);
        }
        $basket = $user->basket;
        $rates = Product::where('product_type_id', $data['productId'])->where('sold', false)->get();
        $inBasket = Basket::find($basket->id)->products()->where('product_type_id', $data['productId'])->first();
        if($inBasket){
            if(count($rates) <= $inBasket->pivot->count){
                return ["error" => "Недостаточно товаров"];
            } 
            $inBasket->pivot->count = $inBasket->pivot->count + 1;
            $inBasket->pivot->save();
            return Basket::with('products')->get();
        } else {
            if(count($rates) < 1){
                return ["error" => "Недостаточно товаров"];
            }
            $rate = ProductType::find($data['productId']);
            $rate->baskets()->attach($basket->id);
            return Basket::with('products')->get();
        }

    }
    public function deleteFromBasket(Request $request){
        $data = json_decode($request->getContent(), true);
        $user = Auth::user();
        if(!$user){
            return response('unauthorized', 401);
        }
        $basket = $user->basket;
        $inBasket = Basket::find($basket->id)->products()->where('product_type_id', $data['productId'])->first();
        if($inBasket){
            if($data['clear']){
                $rate = ProductType::find($data['productId']);
                $rate->baskets()->detach($basket->id);
            }
            else if($inBasket->pivot->count > 1){
                $inBasket->pivot->count = $inBasket->pivot->count - 1;
                $inBasket->pivot->save();
            } else{
                $rate = ProductType::find($data['productId']);
                $rate->baskets()->detach($basket->id);
            }
            return Basket::with('products')->get();
        } else {
            return 'Товара нет в корзине';
        }
    }
    public function buy(Request $request){
        $data = json_decode($request->getContent(), true);
        $user = Auth::user();
        if(!$user){
            return response('unauthorized', 401);
        }
        $basket = $user->basket;
        $products = Product::where('product_type_id', $data['product_type_id'])->get();
        $productInBasket = $basket->products()->find($data['product_type_id']);
        if(count($products) >= $productInBasket->pivot->count){
            for($i = 0; $i < $productInBasket->pivot->count; $i++){
                $products[$i]->sold = true;
                $products[$i]->buyer = $user->id;
                $products[$i]->save();
            }
            $basket->products()->detach($data['product_type_id']);
            return $basket->with('products')->get();
        } else {
            return ["error"=>"Недостаточно товаров"];
        }
    }
}
