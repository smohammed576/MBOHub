<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EventsAdminController;
use App\Http\Controllers\NewsAdminController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [AboutController::class, 'welcome'])->name('welcome');

Route::get('/dashboard', function () {
    return redirect(route('welcome'));
})->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/post', [PostsController::class, 'posts'])->name('posts.posts');
    Route::get('/post/{post}', [PostsController::class, 'post'])->name('posts.post');

    Route::resources([
        'posts' => AdminController::class,
        'news' => NewsAdminController::class,
        'events' => EventsAdminController::class
    ]);
});
Route::get('/about', [AboutController::class, 'about'])->name('about.about');
Route::get('/contact', [ContactController::class, 'contact'])->name('contact.contact');
Route::get('/contact/mail', [ContactController::class, 'mail'])->name('contact.mail');


require __DIR__.'/auth.php';