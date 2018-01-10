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
            <h2 class="text-center">{{ trans('app.registracia')  }}</h2>
            <div class="col-md-12" id="register-cont">
                <div class="panel panel-default">
                    <div class="panel-body">
                        {!! Form::open(['url' => [secure_url(URL::route('register',[], config('app.http')))], 'method' => 'GET/PUT', 'class' => "form-horizontal"]) !!}
                            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 clearfix">
                                @include('partials.message')
                                <!-- Modal content-->
                                <div class="col-md-10 col-md-offset-1 modal-cont" style="clear: both">


                                    <div class="col-md-12 modal-cont" style="clear: both">

                                        <div class="modal-body">
                                            {{ csrf_field() }}

                                            <div class="form-group clearfix">
                                                <div class="col-md-6{{ $errors->has('name') && !Session::has('login') ? ' has-error' : '' }}">
                                                    <label for="name" class="col-xs-4 control-label">{{ trans('app.nazovFirmy')  }}</label>

                                                    <div class="col-md-6 col-xs-11">
                                                        <input placeholder="odvez-to" id="name" type="text" class="form-control" name="name" value="{{ old('name') }}" required autofocus>

                                                        @if ($errors->has('name') && !Session::has('login'))
                                                            <span class="help-block">
                                            <strong>{{ $errors->first('name') }}</strong>
                                        </span>
                                                        @endif
                                                    </div>
                                                    <div class="col-xs-1 text-center tooltip-cont">
                                    <span data-toggle="tooltip" title="{{ trans('app.nazovFirmy')  }}
                                    {{ trans('app.PovinneVyplnit')  }}"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6{{ $errors->has('email') && !Session::has('login') ? ' has-error' : '' }}">
                                                    <label for="email" class="col-xs-4 control-label">{{ trans('app.emailovaAdresa')  }}</label>

                                                    <div class="col-md-6 col-xs-11 {{ $errors->has('email') && !Session::has('login') ? ' has-error' : '' }}">
                                                        <input placeholder='odvez-to@gmail.com' id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required>
                                                        @if ($errors->has('email') && !Session::has('login'))
                                                            <span class="help-block">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                                        @endif
                                                    </div>
                                                    <div class="col-xs-1 text-center tooltip-cont">
                                    <span data-toggle="tooltip" title="{{ trans('app.valid')  }}
                                    {{ trans('app.PovinneVyplnit')  }}
                                    {{ trans('app.Unikatne')  }}"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clearfix form-group{{ $errors->has('password') && !Session::has('login') ? ' has-error' : '' }}">
                                                <div class="col-md-6">
                                                    <label for="password" class="col-xs-4 control-label">{{ trans('app.heslo')  }}</label>
                                                    <div class="col-md-6 col-xs-11">
                                                        <input placeholder="******" id="password" type="password" class="form-control" name="password" required>
                                                    </div>
                                                    <div class="col-xs-1 text-center tooltip-cont">
                                    <span data-toggle="tooltip" title="{{ trans('app.minimum')  }}
                                    {{ trans('app.PovinneVyplnit')  }}"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                                    </div>
                                                    <div class="col-md-12 text-center">
                                                        @if ($errors->has('password') && !Session::has('login'))
                                                            <span class="help-block">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                                        @endif
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="password-confirm" class="col-xs-4 control-label">{{ trans('app.overeni')  }}</label>

                                                    <div class="col-md-6 col-xs-11">
                                                        <input placeholder="******" id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                                                    </div>
                                                    <div class="col-xs-1 text-center tooltip-cont">
                                    <span data-toggle="tooltip" title="{{ trans('app.zhoda')  }}
                                    {{ trans('app.PovinneVyplnit')  }}"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12 modal-cont">
                                        <div class="modal-body">
                                            <div class="form-group">
                                                <div class="col-md-12">
                                                    <div class="col-md-4 col-md-offset-4 col-xs-11">
                                                        {{ Form::text('autocomplete','', ['class' => 'field form-control text-center registration autocomplete', 'id' => 'autocomplete', 'placeholder' => trans('app.napisteAdresu') , 'required' => 'required']) }}
                                                        {{ Form::hidden('lat', '', array('class' => 'lat', 'id' => 'lat')) }}
                                                        {{ Form::hidden('lng', '', array('class' => 'lng', 'id' => 'lng')) }}
                                                    </div>
                                                    <div class="col-xs-1 text-center tooltip-cont">
                                    <span data-toggle="tooltip" title="{{ trans('app.presne')  }}
                                    {{ trans('app.PovinneVyplnit')  }}"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="autocomplete" style="display:{{ Session::has('registration_error') ? "block" : "none" }}">
                                                <div class="form-group">
                                                    <div class="col-md-6{{ $errors->has('country') && !Session::has('login') ? ' has-error' : '' }}">
                                                        {{ Form::label('country', trans('app.stat').':',['class' => "col-xs-4 control-label"]) }}

                                                        <div class="col-md-6 col-xs-11{{ $errors->has('country') && !Session::has('login') ? ' has-error' : '' }}">
                                                            {{ Form::text('country','', ['class' => 'form-control text-center', 'id' => 'country', 'required' => 'required', "readonly" => "readonly"]) }}
                                                            @if ($errors->has('country') && !Session::has('login'))
                                                                <span class="help-block"><strong>{{ $errors->first('country') }}</strong></span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6{{ $errors->has('city') && !Session::has('login') ? ' has-error' : '' }}">
                                                        {{ Form::label('city', trans('app.mesto').':',['class' => "col-xs-4 control-label"]) }}

                                                        <div class="col-md-6 col-xs-11{{ $errors->has('city') && !Session::has('login') ? ' has-error' : '' }}">
                                                            {{ Form::text('city', '', ['class' => 'form-control text-center', 'id' => 'locality', 'required' => 'required', "placeholder" => "Galanta"]) }}
                                                            @if ($errors->has('city') && !Session::has('login'))
                                                                <span class="help-block"><strong>{{ $errors->first('city') }}</strong></span>
                                                            @endif
                                                        </div>
                                                        <div class="col-xs-1 text-center tooltip-cont">
                                                            <span data-toggle="tooltip" title="{{ trans('app.PovinneVyplnit')  }}"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-md-6{{ $errors->has('street') && !Session::has('login') ? ' has-error' : '' }}">
                                                        {{ Form::label('street', trans('app.ulica').':',['class' => "col-xs-4 control-label"]) }}

                                                        <div class="col-md-6 col-xs-11{{ $errors->has('street') && !Session::has('login') ? ' has-error' : '' }}">
                                                            {{ Form::text('street',"", ['class' => 'form-control', 'id' => 'route', 'required' => 'required', "placeholder" => "Trnavská cesta"]) }}
                                                            @if ($errors->has('street') && !Session::has('login'))
                                                                <span class="help-block"><strong>{{ $errors->first('street') }}</strong></span>
                                                            @endif
                                                        </div>
                                                        <div class="col-xs-1 text-center tooltip-cont">
                                                            <span data-toggle="tooltip" title="{{ trans('app.PovinneVyplnit')  }}"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6{{ $errors->has('psc') && !Session::has('login') ? ' has-error' : '' }}">
                                                        {{ Form::label('psc', trans('app.psc').':',['class' => "col-xs-4 control-label"]) }}

                                                        <div class="col-md-6 col-xs-11{{ $errors->has('psc') && !Session::has('login') ? ' has-error' : '' }}">
                                                            {{ Form::text('psc','', ['class' => 'form-control', 'id' => 'postal_code', 'required' => 'required', "placeholder" => "926 01"]) }}
                                                            @if ($errors->has('psc') && !Session::has('login'))
                                                                <span class="help-block"><strong>{{ $errors->first('psc') }}</strong></span>
                                                            @endif
                                                        </div>
                                                        <div class="col-xs-1 text-center tooltip-cont">
                                                            <span data-toggle="tooltip" title="{{ trans('app.PovinneVyplnit')  }}"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">

                                                    <div class="col-md-6{{ $errors->has('street_number') && !Session::has('login') ? ' has-error' : '' }}">
                                                        {{ Form::label('street_number', trans('app.cisloDomu').':',['class' => "col-xs-4 control-label"]) }}

                                                        <div class="col-md-6 col-xs-11{{ $errors->has('street_number') && !Session::has('login') ? ' has-error' : '' }}">
                                                            {{ Form::text('street_number',"", ['class' => 'form-control', 'id' => 'street_number', 'required' => 'required', 'placeholder' => "995"]) }}
                                                            @if ($errors->has('street_number') && !Session::has('login'))
                                                                <span class="help-block"><strong>{{ $errors->first('street_number') }}</strong></span>
                                                            @endif
                                                        </div>
                                                        <div class="col-xs-1 text-center tooltip-cont">
                                                            <span data-toggle="tooltip" title="{{ trans('app.PovinneVyplnit')  }}"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6{{ $errors->has('ico') && !Session::has('login') ? ' has-error' : '' }}">
                                                        {{ Form::label('ico', trans('app.ico').':',['class' => "col-xs-4 control-label"]) }}

                                                        <div class="col-md-6 col-xs-11{{ $errors->has('ico') && !Session::has('login') ? ' has-error' : '' }}">
                                                            {{ Form::text('ico',"", ['class' => 'form-control', 'id' => 'ico', 'required' => 'required', "placeholder" => "9587899"]) }}
                                                            @if ($errors->has('ico') && !Session::has('login'))
                                                                <span class="help-block"><strong>{{ $errors->first('ico') }}</strong></span>
                                                            @endif
                                                        </div>
                                                        <div class="col-xs-1 text-center tooltip-cont">
                                        <span data-toggle="tooltip" title="{{ trans('app.Unikatne')  }}
                                        {{ trans('app.PovinneVyplnit')  }}"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-md-6{{ $errors->has('tel_number1') && !Session::has('login') ? ' has-error' : '' }}">
                                                        {{ Form::label('tel_number1', trans('app.telCislo1').':',['class' => "col-xs-4 control-label"]) }}

                                                        <div class="col-md-6 col-xs-11{{ $errors->has('tel_number1') && !Session::has('login') ? ' has-error' : '' }}">
                                                            {{ Form::tel('tel_number1',"", ['class' => 'form-control', 'id' => 'tel_number1', 'required' => 'required', "placeholder" => "+421958789"]) }}
                                                            @if ($errors->has('tel_number1') && !Session::has('login'))
                                                                <span class="help-block"><strong>{{ $errors->first('tel_number1') }}</strong></span>
                                                            @endif
                                                        </div>
                                                        <div class="col-xs-1 text-center tooltip-cont">
                                                            <span data-toggle="tooltip" title="{{ trans('app.PovinneVyplnit')  }}"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6{{ $errors->has('tel_number2') && !Session::has('login') ? ' has-error' : '' }}">
                                                        {{ Form::label('tel_number2', trans('app.telCislo2').':',['class' => "col-xs-4 control-label"]) }}

                                                        <div class="col-md-6 col-xs-11{{ $errors->has('tel_number2') && !Session::has('login') ? ' has-error' : '' }}">
                                                            {{ Form::text('tel_number2',"", ['class' => 'form-control', 'id' => 'tel_number2', "placeholder" => "+421958788"]) }}
                                                            @if ($errors->has('tel_number2') && !Session::has('login'))
                                                                <span class="help-block"><strong>{{ $errors->first('tel_number2') }}</strong></span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">

                                                    <div class="col-md-6{{ $errors->has('web_page') && !Session::has('login') ? ' has-error' : '' }}">
                                                        {{ Form::label('web_page', trans('app.web').':',['class' => "col-xs-4 control-label"]) }}

                                                        <div class="col-md-6 col-xs-11{{ $errors->has('web_page') && !Session::has('login') ? ' has-error' : '' }}">
                                                            {{ Form::text('web_page',"", ['class' => 'form-control', 'id' => 'web_page', "placeholder" => "wwww.odvez-to.sk"]) }}
                                                            @if ($errors->has('web_page') && !Session::has('login'))
                                                                <span class="help-block"><strong>{{ $errors->first('web_page') }}</strong></span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-md-12{{ $errors->has('description') && !Session::has('login') ? ' has-error' : '' }}">
                                                        {{ Form::label('description', trans('app.popis').':',['class' => "col-md-2 control-label"]) }}

                                                        <div class="col-md-9{{ $errors->has('description') && !Session::has('login') ? ' has-error' : '' }}">
                                                            {{ Form::textarea('description',"", ['class' => 'form-control', 'id' => 'description']) }}
                                                            @if ($errors->has('description') && !Session::has('login'))
                                                                <span class="help-block"><strong>{{ $errors->first('description') }}</strong></span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class=" col-md-offset-5 col-md-5{{ $errors->has('podmienki') && !Session::has('login') ? ' has-error' : '' }}">
                                                        <a href="#podm" role="button" data-toggle="modal">
                                                            {{ Form::label('podmienki', trans('app.suhlas').':',['class' => "col-xs-10 podmienky text-right control-label"]) }}
                                                        </a>
                                                        <div class="col-xs-1{{ $errors->has('podmienki') && !Session::has('login') ? ' has-error' : '' }}">
                                                            {{ Form::checkbox('podmienki', 2, null, ['class' => 'form-control ', 'id' => 'podmienki' , 'required' => 'required']) }}

                                                        </div>
                                                        @if ($errors->has('podmienki') && !Session::has('login'))
                                                            <div class="col-md-6 col-md-offset-6">
                                                                <span class="help-block text-right"><strong>{{ $errors->first('podmienki') }}</strong></span>
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary">
                                                {{ trans('app.registracia') }}
                                            </button>
                                            <button type="button" class="btn btn-danger close-modal" data-dismiss="modal">{{ trans('app.zavriet') }}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                </div>
            </div>
        </div>
</div>
@endsection
@section('autocomplete')
    @include('partials.googleMaps')
@endsection

