<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function About(){
        return Inertia::render('About/About');
    }
}
