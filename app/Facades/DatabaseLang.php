<?php
namespace App\Facades;
use Illuminate\Support\Facades\Facade;
class DatabaseLang extends Facade{
    protected static function getFacadeAccessor() { return 'DatabaseLang'; }
}