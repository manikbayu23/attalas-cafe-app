<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Menu extends Model
{
    use HasFactory;


    protected $table = 'menus';
    protected $primaryKey = 'id_menu';

    /**
     * Get the user that owns the phone.
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'id_category');
    }
}
