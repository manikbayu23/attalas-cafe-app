<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Table;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class TableController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            return Inertia::render('Table');

        } catch (\Throwable $th) {
            Log::error('Terjadi kesalahan: ' . $th->getMessage());
            return response()->json(['error' => 'Terjadi kesalahan'], 500);
        }
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            $table = new Table;
            $table->table_no = $request->input('table_no');
            $table->capacity = $request->input('capacity');
            $table->status = 1;
            $table->created_at = Carbon::now();
            $table->updated_at = Carbon::now();
            $table->save();
            return redirect()->back()->with('message', 'Berhasil menambahkan meja');


        } catch (\Throwable $th) {
            Log::error('Terjadi kesalahan: ' . $th->getMessage());
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
}
