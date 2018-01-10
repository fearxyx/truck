const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .js('resources/assets/js/home.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .copy('resources/assets/img', 'public/img')
    .disableNotifications();

mix.styles([
    'resources/assets/css/all.css',
    'resources/assets/css/style.css'
], 'public/css/home.css');

mix.styles([
    'resources/assets/css/pages.css',
    'resources/assets/css/LivIconsEvo.css',
    'resources/assets/css/all.css',
    'resources/assets/css/bootstrap-datepicker.css'
], 'public/css/pages.css');

mix.styles([
    'resources/assets/css/auth.css',
    'resources/assets/css/all.css'
], 'public/css/auth.css');

mix.scripts([
    'resources/assets/js/add.js',
    'resources/assets/js/bootstrap-datepicker.js'
], 'public/js/add.js');

mix.scripts([
    'resources/assets/js/auth.js'
], 'public/js/auth.js');
mix.scripts([
    'resources/assets/js/jquery.js'
], 'public/js/jquery.js');
mix.scripts([
    'resources/assets/js/jquery-1.12.3.min.js',
    'resources/assets/LivIconsEvo/js/tools/snap.svg-min.js',
    'resources/assets/LivIconsEvo/js/tools/TweenMax.min.js',
    'resources/assets/LivIconsEvo/js/tools/DrawSVGPlugin.min.js',
    'resources/assets/LivIconsEvo/js/tools/MorphSVGPlugin.min.js',
    'resources/assets/LivIconsEvo/js/tools/verge.min.js',
    'resources/assets/LivIconsEvo/js/LivIconsEvo.Defaults.js',
    'resources/assets/LivIconsEvo/js/LivIconsEvo.js'
], 'public/js/LivIconsEvo.js');
mix.scripts([
    'resources/assets/js/jquery.js',
    'resources/assets/js/jquery-ui.js'
], 'public/js/all.js');
