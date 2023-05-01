<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductType;
use App\Models\Product;
use App\Models\Basket;

class ProductController extends Controller
{
    public function index(Request $request){
        $data = json_decode($request->getContent(), true);
        $products = ProductType::with(['productInfo'])->get(); 
        $result = [];
        foreach($products as $product){
            $inBasket = Basket::find($data['basketId'])->products()->where('product_type_id', $product['id'])->first();
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
    public function inBasket(Request $request){
        $data = json_decode($request->getContent(), true);
        return Basket::find($data['basketId'])->products;
    }
    public function create(Request $request){
        $data = json_decode($request->getContent(), true);
        ProductType::create([
            'name' => $data['name'],
            'price' => $data['price']
        ]);
        return ProductType::get();
    }
    public function update(Request $request){
        $data = json_decode($request->getContent(), true);
        $rate = ProductType::find($data['id']);
        $rate->name = $data['name'];
        $rate->price = $data['price'];
        $rate->save();
        return ProductType::get();
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

    public function addToBasket(Request $request){
        $data = json_decode($request->getContent(), true);
        $rates = Product::where('product_type_id', $data['productId'])->get();
        $inBasket = Basket::find($data['basketId'])->products()->where('product_type_id', $data['productId'])->first();
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
            $rate->baskets()->attach($data['basketId']);
            return Basket::with('products')->get();
        }

    }
    public function deleteFromBasket(Request $request){
        $data = json_decode($request->getContent(), true);
        $inBasket = Basket::find($data['basketId'])->products()->where('product_type_id', $data['productId'])->first();
        if($inBasket){
            if($data['clear']){
                $rate = ProductType::find($data['productId']);
                $rate->baskets()->detach($data['basketId']);
            }
            else if($inBasket->pivot->count > 1){
                $inBasket->pivot->count = $inBasket->pivot->count - 1;
                $inBasket->pivot->save();
            } else{
                $rate = ProductType::find($data['productId']);
                $rate->baskets()->detach($data['basketId']);
            }
            return Basket::with('products')->get();
        } else {
            return 'Товара нет в корзине';
        }
    }
}
