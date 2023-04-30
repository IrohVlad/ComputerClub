<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        foreach(range(1, 5) as $i){
            DB::table('user')->insert([
                'mail' => "mail$i@mail.ru",
                'password_hash' => "wfdfsfsefefsef123$i",
                "nickname" => "user$i",
                "role" => "USER"
            ]);
            DB::table('basket')->insert([
                'user_id' => $i
            ]);
            DB::table('product_type')->insert([
                'name' => "name$i",
                'price' => 10,
                'img' => "img_$i"
            ]);
            DB::table('product_info')->insert([
                'title' => "title$i",
                'value' => "value$i",
                'product_type_id' => 1
            ]);
            DB::table('product')->insert([
                'product_type_id' => 1
            ]);
            DB::table('basket_product_type')->insert([
                'product_type_id' => $i,
                'basket_id' => 1
            ]);
            DB::table('pc')->insert([
                'id' => $i
            ]);
            DB::table('rate_type')->insert([
                'title' => "Утро$i",
                'price' => 10,
                'img' => 'hero.png',
                'short_description' => 'с 8:00 до 12:00',
                'description' => 'Это базовый курс для начинающих тестировщиков, который научит вас писать автоматизированные UI-тесты на языке программирования Python с помощью библиотеки Selenium. А еще мы рассмотрим популярные фреймворки и хорошие практики написания автотестов.',

            ]);
            DB::table('pc_info')->insert([
                'pc_id' => 1,
                'title' => 'Процессор',
                "value" => 'Хуан',
            ]);
            DB::table('rate')->insert([
                'rate_type_id' => 1,
                'pc_id' => 1,
                'date' => '2023-04-30'
            ]);
            DB::table('basket_rate')->insert([
                'basket_id' => 1,
                'rate_id' => 1,
            ]);
        }
    }
}
