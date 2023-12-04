<?php

namespace App\Models;

use App\Models\Table;
use App\Models\Customer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reservation extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'reservations';
    protected $primaryKey = 'id_reservation';

    /**
     * Get the user that owns the phone.
     */
    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class, 'id_customer');
    }
    public function table(): BelongsTo
    {
        return $this->belongsTo(Table::class, 'id_table');
    }


}
