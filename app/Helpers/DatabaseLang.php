<?php
namespace App\Helpers;
use App\Langs;
use Illuminate\Support\Facades\Artisan;

class DatabaseLang
{
    public  $langs = ['new','ru','de','tr','fr','gb','it','es','ua','pl','ro','kz','nl','be','gr',
        'cz','pt','se','hu','az','by','at','ch','bg','rs','dk','fi','sk','no','ie','hr',
        'ba','ge','md','am','lt','al','mk','si','lv','xk','ee','cy','me','lu','mt','is','je',
        'im','ad','gg','fo','li','mc','gi','sm','ax','sj','va'
    ];

    public function lang($lang)
    {
        if(in_array(strtolower($lang), $this->langs)){

            return strtolower($lang);
        }
        return 'other';
    }

    public function getLangs()
    {
        return $this->langs;
    }
    public function getDatabase($database, $lang)
    {
     return $database.'_'.$this->lang($lang);
    }

    public function getDatasDatabase($database, $lang)
    {
        return $database.'_'.$this->lang($lang).'_datas';
    }

    public function check($lang){
        if (in_array(strtolower($lang), $this->langs)) {

            return strtolower($lang);
        }
        return 'other';
    }




}