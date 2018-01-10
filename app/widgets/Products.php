<?php

namespace App\Widgets;

use App\Product_datas;
use Arrilot\Widgets\AbstractWidget;
use Illuminate\Support\Str;

class Products extends AbstractWidget
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
        $count = Product_datas::count();
        $string = 'Products';

        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-anchor',
            'title'  => "{$count} {$string}",
            'text'   => __('voyager.dimmer.post_text', ['count' => $count, 'string' => Str::lower($string)]),
            'button' => [
                'text' => 'Products',
                'link' => route('product'),
            ],
            'image' => 'img/product.jpg',
        ]));
    }
}
