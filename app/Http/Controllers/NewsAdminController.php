<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = News::all();
        $users = User::all();

        return Inertia::render('News/News', ['news' => $news, 'users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('News/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $this->validateData($request);

        $news = News::create($validatedData);

        return redirect(route('news.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $news = News::where('id', $id)->get();
        $users = User::all();
        return Inertia::render('News/Post', ['news' => $news, 'users' => $users]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    protected function validateData(Request $request){
        $data = $request->validate([
            'title' => 'required',
            'intro' => 'required',
            'description' => 'required',
            'image' => '',
            'user_id' => 'required'
        ]);

        return $data;
    }
}
