<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Contracts\Foundation\Application;

class Locale
{
    protected $app;

    public function __construct(Application $app, Request $request)
    {
        $count = strlen ($request->path());
        if($count <= 1){
            $locale = 'sk';
        }else{
            if($count < 3){
                $locale = substr($request->path(),0,2);
            }else{
                $lang =substr($request->path(),2,1);
                if($lang != '/' ){
                    $locale = 'sk';
                }else{
                    $locale =substr($request->path(),0,2);
                }
            }
        }

        $app->setLocale($locale);
    }

    /**
     * Handle an incoming request.
     *
     * @param  Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request);
    }
}