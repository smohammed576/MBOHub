<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostsController extends Controller
{
    public function posts(){
        $posts = Post::all();
        return Inertia::render('Posts/Posts', [
            'posts' => $posts
        ]);
    }

    public function post(Post $post){
        return Inertia::render('Posts/Post', [
            'post' => $post
        ]);
    }
}
