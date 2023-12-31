<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 1; $i < 11; $i++)
        {
            $dob = Carbon::now()->subYears(random_int(20, 50))->format('Y-m-d');
            $joinedDate = Carbon::now()->subDays(random_int(0, 365))->format('Y-m-d');

            DB::table('rbs_db.tbl_employee')
            ->insert([
                'e_name'=>Str::random(10),
                'e_address'=>Str::random(20),
                'e_dob'=>$dob,
                'e_joined_date'=>$joinedDate,
                'e_phone_number'=>Str::random(10)
            ]);
        }
    }
}
