<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function contact(){
        return Inertia::render('Contact/Contact');
    }

    public function mail(Request $request){
        mail('smohammed0576@gmail.com', 'Contact', $request['message']);
        return 'yuh';
    }
}
