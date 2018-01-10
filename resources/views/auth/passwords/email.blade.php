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
        <div class="col-md-4 col-md-offset-4">
            <h2 class="text-center">{{ trans('app.forget')  }}</h2>
                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                        {!! Form::open(['url' => [secure_url(URL::route('password.email',[], config('app.http')))], 'method' => 'POST', 'class' => "form-horizontal"]) !!}
                        {{ csrf_field() }}

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label for="email" class="col-md-4 control-label">{{ trans('app.emailovaAdresa')  }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn buttons">
                                    {{ trans('app.poslatEmail')  }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

@endsection
