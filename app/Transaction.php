<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Transaction extends Model
{
    protected $guarded = [];

    /**
     * Convert to cents before saving.
     *
     * @param string $value
     * @return void
     */
    public function setTotalAttribute($value)
    {
        $this->attributes['total'] = (floatval($value) * 100);
    }

    /**
     * Convert the total back to decimal value.
     *
     */
    public function getTotalAttribute()
    {
        return $this->attributes['total'] / 100;
    }

    public function scopeFromToday($query)
    {
        return $query->whereDate('created_at', Carbon::today());
    }
}
