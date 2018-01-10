<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="author" content="{{ trans('app.homeTitle') }}">
    <meta name="language" content="{{ trans('app.lang')  }}" />
    <link rel="alternate" href="https://odvez-to.sk/" hreflang="sk" />
    <meta name="country" content="Slovakia">
    <link rel="icon" href="https://odvez-to.sk/img/logo-browser.png">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index, follow" />
    <meta property="fb:app_id" content="1466131740134706"/>
    <meta property="og:url"                content="{{ \Request::fullUrl() }}" />
    <meta property="og:type"               content="article" />
    <meta property="og:image"              content="{{ \Request::root()."/img/facebookShare.jpg" }}" />
    <meta property="og:image:secure_url"              content="{{ \Request::root()."/img/facebookShare.jpg" }}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:height" content="541" />
    <!-- Meta -->
@yield('title')
@yield('facebook')
@yield('keywords')
<!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Styles -->
{{ HTML::style(mix('css/app.css'), array(), config('app.img')) }}
@yield('style')
<!-- Scripts -->
    @yield('scriptsHeader')
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body>

<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-101969165-3', 'auto');
    ga('send', 'pageview');

</script>
<div id="app" class="clearfix">
    <header>
        @include("partials.header")
    </header>
    @if (Auth::guest())
        @if(!isset($register))
            @include("auth.registerModal")
        @endif
        @include("auth.loginModal")
    @endif
    @yield('content')
</div>

<!-- Scripts -->
{{ HTML::script(mix('js/app.js'), array(), config('app.img')) }}
<script>
    truck_errror =  "{{ Session::has('truck_error') ? "1" : "0" }}";
    product_error =  "{{ Session::has('product_error') ? "1" : "0" }}";
    googleText =  "{{ trans('app.googleText')  }}";
</script>

@include("partials.mail")
@include("partials.obchodnePodmienky")
@include('partials.googleMaps')
<footer>
    @include("partials.footer")
</footer>
@yield('scriptsFooter')
@yield('script')
</body>
</html>
