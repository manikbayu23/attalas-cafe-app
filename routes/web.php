<?php

use App\Http\Controllers\Admin\MenuController;
use App\Http\Controllers\User\MenuController as MenuUser;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\TableController as TableUser;
use App\Http\Controllers\Admin\TableController;
use App\Http\Controllers\UserReservationController as ReservationUser;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    return Inertia::render('User/Home');
})->name('home');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('home')->name('home.')->group(function () {
        Route::get('/menu', [MenuUser::class, 'index'])->name('menu');
        Route::get('/menu-list', [MenuUser::class, 'list'])->name('menu-list');


        Route::get('/table', [TableUser::class, 'index'])->name('table');
        Route::post('/add-reservation', [ReservationUser::class, 'reservation'])->name('reservation');

        Route::get('/reservation', [ReservationUser::class, 'index'])->name('reservation.dashboard');
    });

    Route::get('/login', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    });


    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::prefix('/admin')->name('admin.')->group(function () {
        Route::prefix('/menu')->name('menu.')->group(function () {
            Route::get('/', [MenuController::class, 'index'])->name('dashboard');
            Route::post('/store', [MenuController::class, 'store'])->name('store');
        });
        Route::prefix('/table')->name('table.')->group(function () {
            Route::get('/', [TableController::class, 'index'])->name('dashboard');
            Route::post('/store', [TableController::class, 'store'])->name('store');
        });
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
