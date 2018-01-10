<?php

namespace App\Widgets;

use App\Truck_datas;
use Arrilot\Widgets\AbstractWidget;
use Illuminate\Support\Str;

class Trucks extends AbstractWidget
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run()
    {
        $count = Truck_datas::count();
        $string = 'Trucks';

        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-truck',
            'title'  => "{$count} {$string}",
            'text'   => __('voyager.dimmer.post_text', ['count' => $count, 'string' => Str::lower($string)]),
            'button' => [
                'text' => 'Trucks',
                'link' => route('truck'),
            ],
            'image' => 'img/truck.jpg',
        ]));
    }
}
