<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Models\Rate;
use App\Models\RateType;
use App\Models\Pc;
use Carbon\Carbon;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected $commands = [
        Commands\AutoFill::class,
    ];
    protected function schedule(Schedule $schedule): void
    {
        $schedule->call(
            function (){
                $yesterday = Carbon::now()->add(-1, 'day');
                $rates = Rate::where('sold', false)->get();
                foreach($rates as $rate){
                    if($yesterday->greaterThan($rate->date)){
                        $rate->expired = true;
                        $rate->save();
                    }
                }
                $types = RateType::get();
                $pcs = Pc::get();
                for($i = 1; $i < 7; $i++){
                    $date = Carbon::now()->add($i, 'day')->toDateString();
                    foreach($types as $type){
                        $ratesCollection = Rate::where('rate_type_id', $type->id)->where('date', $date)->get();
                        if(count($ratesCollection) < count($pcs)){
                            foreach($pcs as $pc){
                                $rate = Rate::where('rate_type_id', $type->id)->where('pc_id', $pc->id)->where('date', $date)->first();
                                if(!$rate){
                                    Rate::create([
                                        'rate_type_id' => $type->id,
                                        'pc_id' => $pc->id,
                                        'date' => $date
                                    ]);
                                }
                            }
                        }
                    }
                }
            }
        )->daily();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
