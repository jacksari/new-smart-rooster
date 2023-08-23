<?php

use Illuminate\Support\Facades\Route;
use Illuminate\View\View;

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



Route::get('/', function () {
    $path = public_path('index.html');
    abort_unless(file_exists($path), 400, 'Page is not Found!');
    return file_get_contents($path);
    // return "hola";
});
