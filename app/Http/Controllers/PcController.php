<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Pc;
use App\Models\PcInfo;
use App\Models\RateType;
use App\Models\Rate;

class PcController extends Controller
{
    public function admin(){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $pcs = Pc::with('pcInfo', 'rates')->get();
        return $pcs;
    }
    public function create(Request $request){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $pc = Pc::create([
        ]);
        $pcSome = Pc::first();
        $rates = Rate::where('pc_id', $pcSome->id)->get();
        foreach($rates as $rate){
            
            Rate::create([
                "rate_type_id" => $rate->rate_type_id,
                "pc_id" => $pc->id,
                "date" => $rate->date
            ]);
        }
        return Pc::get();
    }
    public function createInfo(Request $request){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $data = json_decode($request->getContent(), true);
        PcInfo::create([
            'pc_id' => $data['pc_id'],
            'title' => $data['title'],
            'value' => $data['value'],
        ]);
        return PcInfo::get();
    }
    public function updateInfo(Request $request){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $data = json_decode($request->getContent(), true);
        $rate = PcInfo::find($data['id']);
        $rate->title = $data['title'];
        $rate->value = $data['value'];
        $rate->save();
        return PcInfo::get();
    }
    public function delete(Request $request){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $data = json_decode($request->getContent(), true);
        Pc::destroy($data['id']);
        return Pc::get();
    }
    public function deleteInfo(Request $request){
        $user = Auth::user();
        if(!$user->tokenCan('admin')){
            return response('forbidden', 403);
        }
        $data = json_decode($request->getContent(), true);
        PcInfo::destroy($data['id']);
        return PcInfo::get();
    }
}
