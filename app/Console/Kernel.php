<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Models\Rate;
use App\Models\RateType;
use App\Models\Pc;

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
                $type = RateType::first();
                    $pc = Pc::first();
                    Rate::create([
                        'rate_type_id' => $type->id,
                        'pc_id' => $pc->id,
                        'date' => '2025-04-30'
                    ]);
            }
        )->everyMinute();
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
