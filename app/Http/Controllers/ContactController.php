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
        mail('33046@ma-web.nl', 'Contact', $request['message']);
        return redirect(route('welcome'));
    }
}
