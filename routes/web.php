<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\EmployeeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('admin.admin_login');
// });


    Route::get('/register', [AdminController::class, 'signup'])->name('register');
    Route::post('/admin_create', [AdminController::class, 'admin_create']);
    
    Route::get('/', [AdminController::class, 'index'])->name('login');
    Route::get('/login', [AdminController::class, 'signin'])->name('login');
    Route::post('/admin_signin', [AdminController::class, 'admin_signin']);



    Route::get('/emp_dashboard', [EmployeeController::class, 'index'])->name('emp_dashboard');
    Route::get('/get_all_emp_data', [EmployeeController::class, 'get_all_emp_data'])->name('get_all_emp_data');
    Route::get('/save_emp_info', [EmployeeController::class, 'save_emp_info'])->name('save_emp_info');
    Route::get('/get_emp_data', [EmployeeController::class, 'get_emp_data'])->name('get_emp_data');
    Route::get('/update_emp_data', [EmployeeController::class, 'update_emp_data'])->name('update_emp_data');
    Route::get('/delete_emp', [EmployeeController::class, 'delete_emp'])->name('delete_emp');
    Route::get('/logout', [AdminController::class, 'logout'])->name('logout');
    Route::get('/print_emp_all_data', [EmployeeController::class, 'print_emp_all_data'])->name('print_emp_all_data');



