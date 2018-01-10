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
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Styles -->
    {{ HTML::style(mix('css/app.css'), array(), config('app.img')) }}
    {{ HTML::style(mix('css/pages.css'), array(), config('app.img')) }}
    <link type="text/css" rel="stylesheet" href="{{ url('css/simple-sidebar.css') }}">
    <link type="text/css" rel="stylesheet" href="css/sweetalert.css">

    <link rel="stylesheet" href="{{ voyager_asset('css/app.css') }}">
    <!-- Scripts -->
    @yield('scriptsHeader')
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
    <style type="text/css">
        html, body {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
        }
        .content {
            width: 100%;
            margin: 0 auto;
            height: 80%;
            overflow-y: scroll;
        }
        .footer {
            width: 100%;
            height: 10%;
            position: relative;
            background: white;
        }
        .name{
            font-size: 17px;
            margin-left: 15px;
        }
        .logout {
            bottom: 0;
            position: fixed;
            width: 18.5%;
        }

        .sidebar-nav li.active {
            text-decoration: none !important;
            color: #fff !important;
            background: rgba(255,255,255,0.2) !important;
        }
        .media-object {
            height: 35px;
            width: 35px;
        }
        /*scroll css begins*/

        #content::-webkit-scrollbar-track
        {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            background-color: #F5F5F5;
        }

        #content::-webkit-scrollbar
        {
            width: 10px;
            background-color: #F5F5F5;
        }

        #content::-webkit-scrollbar-thumb
        {
            background-color: #000000;
            border: 2px solid #555555;
        }
        #file {
            display: none;
        }
        .activate-chat {
            display: none;
        }
        /*scroll css ends*/
    </style>
</head>
<body class="voyager">
{{ HTML::script(mix('js/LivIconsEvo.js'), array(), config('app.img')) }}
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-101969165-3', 'auto');
    ga('send', 'pageview');

</script>
<div id="app">
    <div class="app-container">
        <div class="row content-container">
            @include('app.partials.headerSite')
            @include('app.partials.rightMenu')
            @include('app.partials.chat')
        </div>
    </div>
</div>

<!-- Scripts -->
{{ HTML::script(mix('js/app.js'), array(), config('app.img')) }}
<script src="js/sweetalert.min.js"></script>
{{ HTML::script(mix('js/all.js'), array(), config('app.img')) }}
<script src="/js/moment.min.js"></script>
<script src="/js/bootstrap-filestyle.min.js"></script>

</body>
</html>
<script>
    $(function(){
        $("#wrapper").toggleClass("toggled");
        var docHeight = $(document).height();
        var contentHeight = docHeight-72;
        $("#content").css('height',''+contentHeight+'px');
    });
</script>
