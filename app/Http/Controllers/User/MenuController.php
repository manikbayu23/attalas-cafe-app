<?php

namespace App\Http\Controllers\User;

use App\Models\Menu;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class MenuController extends Controller
{
    public function index(Request $request)
    {
        try {
            // dd($request->all());
            $menus = Menu::query();

            if ($request->params == 0 || $request->params == null) {
                $menus = $menus->where('id_category', 1);
            }
            if ($request->params == 1) {
                $menus = $menus->where('id_category', 2);
            }
            if ($request->params == 2) {
                $menus = $menus->where('id_category', 3);
            }
            if ($request->params == 3) {
                $menus = $menus->where('id_category', 4);
            }

            $menus = $menus->paginate(30)->map(function ($menu) {
                return [
                    'name' => $menu->name,
                    'image' => asset('assets/images/' . $menu->image),
                    'price' => $menu->price
                ];
            });

            // dd($menus);

            return Inertia::render('User/Menu', ["menus" => $menus]);

        } catch (\Throwable $th) {
            Log::error('Terjadi kesalahan: ' . $th->getMessage());
            return response()->json(['error' => 'Terjadi kesalahan'], 500);
        }
    }

    public function list(Request $request)
    {
        try {
            // dd($request->all());
            $menus = Menu::query();

            if ($request->params == 0 || $request->params == null) {
                $menus = $menus->where('id_category', 1);
            }
            if ($request->params == 1) {
                $menus = $menus->where('id_category', 2);
            }
            if ($request->params == 2) {
                $menus = $menus->where('id_category', 3);
            }
            if ($request->params == 3) {
                $menus = $menus->where('id_category', 4);
            }

            $menus = $menus->paginate(30)->map(function ($menu) {
                return [
                    'name' => $menu->name,
                    'image' => asset('assets/images/' . $menu->image),
                    'price' => $menu->price
                ];
            });

            // dd($menus);

            return redirect()->back();

        } catch (\Throwable $th) {
            Log::error('Terjadi kesalahan: ' . $th->getMessage());
            return response()->json(['error' => 'Terjadi kesalahan'], 500);
        }
    }
}
