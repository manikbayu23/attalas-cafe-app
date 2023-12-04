<?php

namespace App\Http\Controllers\User;

use App\Models\Table;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class TableController extends Controller
{
    public function index(Request $request)
    {
        try {
            $tables = Table::all();

            return Inertia::render('User/Table', [
                "tables" => $tables
            ]);

        } catch (\Throwable $th) {
            Log::error('Terjadi kesalahan: ' . $th->getMessage());
            return response()->json(['error' => 'Terjadi kesalahan'], 500);
        }
    }
}
