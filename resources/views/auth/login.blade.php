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
    <div class="col-lg-4 col-lg-offset-4">
        <h2 class="text-center">{{ trans('app.prihlasit')  }}</h2>
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <form class="form-horizontal" role="form" method="POST" action="{{ secure_url(URL::route('login',[], config('app.http'))) }}">
                        {{ csrf_field() }}
                        <div class="form-group{{ $errors->has('email') && Session::has('login') ? ' has-error' : '' }}">
                            <label for="email" class="col-md-4 control-label">{{ trans('app.emailovaAdresa')  }}</label>
                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email') && Session::has('login'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email')  }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password') && Session::has('login') ? ' has-error' : '' }}">
                            <label for="password" class="col-md-4 control-label">{{ trans('app.heslo')  }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" required>

                                @if ($errors->has('password') && Session::has('login'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-4">
                                <button type="submit" class="buttons btn">
                                    {{ trans('app.prihlasit')  }}
                                </button>
                                <a class="btn btn-link" href="{{ secure_url(URL::route('password.request',[], config('app.http'))) }}">
                                    {{ trans('app.forget')  }}
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
