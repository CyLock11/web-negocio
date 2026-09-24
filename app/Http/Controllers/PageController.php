<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller {
    public function home() {
        return view('pages.home');
    }

    public function products() {
        return view('pages.products');
    }

    public function project() {
        return view('pages.project');
    }
}
