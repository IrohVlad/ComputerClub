<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Rate;
use App\Models\RateType;
use App\Models\Pc;

class AutoFill extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'auto:fill';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function __construct()

    {

        parent::__construct();

    }

    public function handle()
    {
        $type = RateType::first();
        $pc = Pc::first();
        Rate::create([
            'rate_type_id' => $type->id,
            'pc_id' => $pc->id,
            'date' => '2025-04-30'
        ]);
    }
}
