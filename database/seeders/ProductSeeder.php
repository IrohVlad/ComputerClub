<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::factory()->createMany([
            ["name"=>"Коврик", "price"=> 22, "img"=> "kovr3ikimg.img"],
            ["name"=>"Коврик2", "price"=> 2, "img"=> "ko1vrikimg.img"],
            ["name"=>"Коврик3", "price"=> 212, "img"=> "kovri7kimg.img"],
            ["name"=>"Коврик4", "price"=> 12, "img"=> "kovri13kimg.img"],
        ]);
    }
}
