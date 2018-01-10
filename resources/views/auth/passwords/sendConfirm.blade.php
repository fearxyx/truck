@extends('layouts.app')
@section('style')
    {{ HTML::style(mix('css/auth.css'), array(), config('app.img')) }}
@endsection
@section('script')
    {{ HTML::script(mix('js/all.js'), array(), config('app.img')) }}
@endsection
@section('title')
    <title>{{ trans('app.homeTitle')  }}- {{ trans('app.prihlasit')  }}</title>
@endsection
@section('keywords')
    <meta name="description" content="{{ substr(trans('app.homeDescription'),0,152) }}"/>
@endsection
@section('content')

    <div class="login-img-cont">
        {{ HTML::image('img/home.jpg', 'background',[], config('app.img'))}}
    </div>

<div class="col-md-12 login-cont">
    <div class="col-md-6 col-md-offset-3">
        <h3 style="text-align: center;">{{ trans('app.passH3')  }}</h3>
        @include('partials.message')
        <div class="col-md-12">
            <h4 class="text-center" style="margin-bottom: 60px;">{{ trans('app.passH4')  }} <a
                        href="#" onclick="event.preventDefault();document.getElementById('resend').submit();">{{ trans('app.sem')  }}</a></h4>
            {!! Form::open(['url' => [secure_url(URL::route('account.resend',[], config('app.http')))], 'style'=>'display: none', 'method' => 'POST', "id" => "resend", 'class' => "form-horizontal"]) !!}
                {{ csrf_field() }}
                <input type="hidden" value="{{ $code }}" name="code">
                <input type="hidden" value="{{ $email }}" name="email">
            </form>
        </div>
    </div>
</div>
@endsection
