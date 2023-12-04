<?php

namespace App\Http\Controllers;

use App\Models\Table;
use Inertia\Inertia;
use App\Models\Customer;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UserReservationController extends Controller
{

    public function index()
    {
        try {

            $reservation = Reservation::whereHas('customer', function ($query) {
                $query->where('id_user', auth()->user()->id);
            })->with('table')->get();

            return Inertia::render('User/Reservation', ["reservation" => $reservation]);

        } catch (\Throwable $th) {
            Log::error('Terjadi kesalahan: ' . $th->getMessage());
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }
    public function reservation(Request $request)
    {
        try {
            DB::beginTransaction();

            $customer = new Customer;
            $customer->id_user = auth()->user()->id;
            $customer->name = $request->input('name');
            $customer->email = auth()->user()->email;
            $customer->phone = $request->input('phone');
            $customer->address = $request->input('address');
            $customer->save();


            $id_customer = Customer::where('id_user', $customer->id_user)->orderBy('id_customer', 'desc')->first();
            $reservation = new Reservation;
            $reservation->id_table = $request->input('id_table');
            $reservation->id_customer = $id_customer->id_customer;
            $reservation->number_of_people = $request->input('number_of_people');
            $reservation->time_reservation = $request->input('time_reservation');
            $reservation->note = $request->input('note');
            $reservation->payment_method = $request->input('payment_method');
            $reservation->save();

            DB::commit();

            $message = "Berhasil memesan meja " . Table::find($request->input('id_table'))->table_no;

            return redirect()->back()->with(["message" => $message]);

        } catch (\Throwable $th) {
            DB::rollback();
            Log::error('Terjadi kesalahan: ' . $th->getMessage());
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }
}
