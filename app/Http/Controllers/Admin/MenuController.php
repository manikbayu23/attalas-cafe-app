<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use App\Models\Menu;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;

class MenuController extends Controller
{
    public function index()
    {
        try {

            $category = Category::all();
            $menus = Menu::paginate(10)->map(function ($menu) {
                return [
                    'name' => $menu->name,
                    'image' => asset('assets/images/' . $menu->image),
                    'price' => $menu->price
                ];
            });

            // dd($menus);

            return Inertia::render('Menu')->with(["category" => $category, "menus" => $menus]);

        } catch (\Throwable $th) {
            Log::error('Terjadi kesalahan: ' . $th->getMessage());
            return response()->json(['error' => 'Terjadi kesalahan'], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            $image = $request->file('image');

            if ($request->hasFile('image')) {
                $image = $request->file('image'); // Get the uploaded image file

                $originalName = $image->getClientOriginalName();
                $extension = $image->getClientOriginalExtension();
                $timestamp = round(microtime(true) * 1000);
                $imageName = $timestamp . '-' . Str::slug(pathinfo($originalName, PATHINFO_FILENAME)) . '.' . $extension;

                $image->move(public_path('assets/images'), $imageName);
            }

            $menu = new Menu;
            $menu->name = $request->input('name');
            $menu->id_category = $request->input('id_category');
            $menu->price = $request->input('price');
            $menu->image = $imageName;
            $menu->status = 1;
            $menu->save();

            return redirect()->back()->with('message', 'Berhasil menambahkan menu');


        } catch (\Throwable $th) {
            Log::error('Terjadi kesalahan: ' . $th->getMessage());
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }
}
