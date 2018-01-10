@extends('layouts.app')
@section('title')
    <title>{{ trans('app.homeTitle')  }}</title>
@endsection
@section('keywords')
    <meta name="description" content="{{ substr(trans('app.homeDescription'),0,152) }}"/>
@endsection
@section('facebook')
    <meta property="og:title"              content="{{ trans('app.homeOgTitle')  }}" />
    <meta property="og:description"        content="{{ trans('app.HomeOgDescription')  }}" />
@endsection
@section('style')
    {{ HTML::style(mix('css/home.css'), array(), config('app.img')) }}
@endsection
@section('script')
    {{ HTML::script(mix('js/home.js'), array(), config('app.img')) }}
    {{ HTML::script(mix('js/all.js'), array(), config('app.img')) }}
@endsection
@section('content')
    @include('partials.message')
    <header class="header-home">
        {{ HTML::image('img/home.jpg', 'image', ['class' => 'home-image'], config('app.img'))}}
        <div class="col-md-12  header-bottom text-center">
            <a href="{{ secure_url(URL::route('truck',[], config('app.http'))) }}" class="home-buttons">
                <div class="col-xs-6  prepravca">
                    <div class="col-md-6 col-md-offset-3 buttons-desc"><h2>{{ trans('app.prepravcaPopis')  }}</h2></div>
                    <h1>{{ trans('app.prepravca')  }}</h1>
                </div>
            </a>
            <a href="{{ secure_url(URL::route('product',[], config('app.http'))) }}" class="home-buttons">
                <div class="col-xs-6  dopravca">
                    <div class="col-md-6 col-md-offset-3 buttons-desc"><h2>{{ trans('app.dopravcaPopis')  }}</h2></div>
                    <h1>{{ trans('app.dopravca')  }}</h1>
                </div>
            </a>
        </div>
        <div class="header">
            <div class="v-midle">
                <div class="col-md-12 text-center" id="header-text">
                    <h1>{{ trans('app.homeNadpis')  }}</h1>

                    <h2>{{ trans('app.homeNadpis1')  }}<br>
                        {{ trans('app.homeNadpis2')  }}</h2>
                </div>
            </div>
        </div>
    </header>
    <section id="about" class="about">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-4 box-cont">
                        <div class="text-center box">
                            <div>
                                {{ HTML::image('img/overenie.png', 'image', ['class' => 'home-icons'], config('app.img'))}}
                                <h3>{{ trans('app.overenie')  }}</h3>
                                <h4>{{ trans('app.overeniePodpis')  }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 box-cont">
                        <div class="text-center box">
                            <div>
                                {{ HTML::image('img/hodnotenie.png', 'image', ['class' => 'home-icons'], config('app.img'))}}
                                <h3>{{ trans('app.hodnotenie')  }}</h3>
                                <h4>{{ trans('app.hodnoteniePodpis')  }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 box-cont">
                        <div class="text-center box">
                            <div>
                                {{ HTML::image('img/databaza.png', 'image', ['class' => 'home-icons'], config('app.img'))}}
                                <h3>{{ trans('app.databaza')  }}</h3>
                                <h4>{{ trans('app.databazaPodpis')  }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="col-md-4 box-cont">
                        <div class="text-center box">
                            <div>
                                {{ HTML::image('img/databaza.png', 'image', ['class' => 'home-icons'], config('app.img'))}}
                                <h3>{{ trans('app.ponuky')  }}</h3>
                                <h4>{{ trans('app.ponukyPodpis')  }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 box-cont">
                        <div class="text-center box">
                            <div>
                                {{ HTML::image('img/databaza.png', 'image', ['class' => 'home-icons'], config('app.img'))}}
                                <h3>{{ trans('app.licit')  }}</h3>
                                <h4>{{ trans('app.licitPodpis')  }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 box-cont">
                        <div class="text-center box">
                            <div>
                                {{ HTML::image('img/bezpecnost.png', 'image', ['class' => 'home-icons'], config('app.img'))}}
                                <h3>{{ trans('app.bezpecnost')  }}</h3>
                                <h4>{{ trans('app.bezpecnostPodpis')  }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="padding-top: 0 !important;" class="row flex-row ">
                <div class="col-md-6 col-sm-12 col-xs-12">
                    {{ HTML::image('img/about-truck.jpg', 'image', ['class' => 'home-about'], config('app.img'))}}
                </div>
                <div class="col-md-5 col-md-offset-1 col-sm-12">
                    <div class="promo-section__description">
                        <h2>{{ trans('app.searchTitle')  }}</h2>
                        <p>{{ trans('app.searchSubtitle')  }}</p>
                    </div>
                </div>
            </div>
            <div class="row flex-row ">
                <div class="col-md-5 col-md-offset-1 col-sm-12">
                    <div class="promo-section__description">
                        <h2>{{ trans('app.licitTitle')  }}</h2>
                        <p>{{ trans('app.licitSubtitle')  }}</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12">
                    {{ HTML::image('img/about-licit.jpg', 'image', ['class' => 'home-about'], config('app.img'))}}
                </div>
            </div>


        </div>
    </section>
@endsection
