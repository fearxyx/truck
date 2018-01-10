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
    <div class="col-md-12 login-cont" style="background: none !important;">
        <h1 class=" col-md-11 col-md-offset-1 text-center">{{ trans('app.dokoncenie')  }}</h1>
        <h2 class=" col-md-11 col-md-offset-1 text-center">{{ trans('app.tooltipAdresa')  }}</h2>
        <div class="col-md-12" id="register-cont">

            <div class="panel panel-default">
                {!! Form::open(['url' => [secure_url(URL::route('registerProfile',[], config('app.http')))], 'method' => 'POST', 'class' => "form-horizontal"]) !!}
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 clearfix">
                @include('partials.message')
                    <div class="col-md-10 col-md-offset-1" style="clear: both">
                        {{ csrf_field() }}
                        <div class="col-md-12">
                            <div>
                                <div class="form-group">
                                    <div class="col-md-6 col-md-3 col-md-offset-4">
                                        <div class="col-md-11">
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
                                <div class="autocomplete" style="display:{{ Session::has('profile_error') ? "block" : "none" }}">
                                    <div class="form-group">
                                        <div class="col-md-6{{ $errors->has('country') ? ' has-error' : '' }}">
                                            {{ Form::label('country', trans('app.stat').':',['class' => "col-xs-4 control-label"]) }}

                                            <div class="col-md-6 col-xs-11{{ $errors->has('country') ? ' has-error' : '' }}">
                                                {{ Form::text('country','', ['class' => 'form-control text-center', 'id' => 'country', 'required' => 'required', "readonly" => "readonly"]) }}
                                                @if ($errors->has('country'))
                                                    <span class="help-block"><strong>{{ $errors->first('country') }}</strong></span>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-md-6{{ $errors->has('city') ? ' has-error' : '' }}">
                                            {{ Form::label('city', trans('app.mesto').':',['class' => "col-xs-4 control-label"]) }}

                                            <div class="col-md-6 col-xs-11{{ $errors->has('city') ? ' has-error' : '' }}">
                                                {{ Form::text('city', '', ['class' => 'form-control text-center', 'id' => 'locality', 'required' => 'required', "placeholder" => "Galanta"]) }}
                                                @if ($errors->has('city'))
                                                    <span class="help-block"><strong>{{ $errors->first('city') }}</strong></span>
                                                @endif
                                            </div>
                                            <div class="col-xs-1 text-center tooltip-cont">
                                                <span data-toggle="tooltip" title="{{ trans('app.PovinneVyplnit')  }}"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-6{{ $errors->has('street') ? ' has-error' : '' }}">
                                            {{ Form::label('street', trans('app.ulica').':',['class' => "col-xs-4 control-label"]) }}

                                            <div class="col-md-6 col-xs-11{{ $errors->has('street') ? ' has-error' : '' }}">
                                                {{ Form::text('street',"", ['class' => 'form-control', 'id' => 'route', 'required' => 'required', "placeholder" => "Trnavská cesta"]) }}
                                                @if ($errors->has('street'))
                                                    <span class="help-block"><strong>{{ $errors->first('street') }}</strong></span>
                                                @endif
                                            </div>
                                            <div class="col-xs-1 text-center tooltip-cont">
                                                <span data-toggle="tooltip" title="{{ trans('app.PovinneVyplnit')  }}"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                        <div class="col-md-6{{ $errors->has('psc') ? ' has-error' : '' }}">
                                            {{ Form::label('psc', trans('app.psc').':',['class' => "col-xs-4 control-label"]) }}

                                            <div class="col-md-6 col-xs-11{{ $errors->has('psc') ? ' has-error' : '' }}">
                                                {{ Form::text('psc','', ['class' => 'form-control', 'id' => 'postal_code', 'required' => 'required', "placeholder" => "926 01"]) }}
                                                @if ($errors->has('psc'))
                                                    <span class="help-block"><strong>{{ $errors->first('psc') }}</strong></span>
                                                @endif
                                            </div>
                                            <div class="col-xs-1 text-center tooltip-cont">
                                                <span data-toggle="tooltip" title="{{ trans('app.PovinneVyplnit')  }}"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">

                                        <div class="col-md-6{{ $errors->has('street_number') ? ' has-error' : '' }}">
                                            {{ Form::label('street_number', trans('app.cisloDomu').':',['class' => "col-xs-4 control-label"]) }}

                                            <div class="col-md-6 col-xs-11{{ $errors->has('street_number') ? ' has-error' : '' }}">
                                                {{ Form::text('street_number',"", ['class' => 'form-control', 'id' => 'street_number', 'required' => 'required', 'placeholder' => "995"]) }}
                                                @if ($errors->has('street_number'))
                                                    <span class="help-block"><strong>{{ $errors->first('street_number') }}</strong></span>
                                                @endif
                                            </div>
                                            <div class="col-xs-1 text-center tooltip-cont">
                                                <span data-toggle="tooltip" title="{{ trans('app.PovinneVyplnit')  }}"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                        <div class="col-md-6{{ $errors->has('ico') ? ' has-error' : '' }}">
                                            {{ Form::label('ico', trans('app.ico').':',['class' => "col-xs-4 control-label"]) }}

                                            <div class="col-md-6 col-xs-11{{ $errors->has('ico') ? ' has-error' : '' }}">
                                                {{ Form::text('ico',"", ['class' => 'form-control', 'id' => 'ico', 'required' => 'required', "placeholder" => "9587899"]) }}
                                                @if ($errors->has('ico') )
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
                                        <div class="col-md-6{{ $errors->has('tel_number1') ? ' has-error' : '' }}">
                                            {{ Form::label('tel_number1', trans('app.telCislo1').':',['class' => "col-xs-4 control-label"]) }}

                                            <div class="col-md-6 col-xs-11{{ $errors->has('tel_number1') ? ' has-error' : '' }}">
                                                {{ Form::tel('tel_number1',"", ['class' => 'form-control', 'id' => 'tel_number1', 'required' => 'required', "placeholder" => "+421958789"]) }}
                                                @if ($errors->has('tel_number1'))
                                                    <span class="help-block"><strong>{{ $errors->first('tel_number1') }}</strong></span>
                                                @endif
                                            </div>
                                            <div class="col-xs-1 text-center tooltip-cont">
                                                <span data-toggle="tooltip" title="{{ trans('app.PovinneVyplnit')  }}"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                        <div class="col-md-6{{ $errors->has('tel_number2') ? ' has-error' : '' }}">
                                            {{ Form::label('tel_number2', trans('app.telCislo2').':',['class' => "col-xs-4 control-label"]) }}

                                            <div class="col-md-6 col-xs-11{{ $errors->has('tel_number2') ? ' has-error' : '' }}">
                                                {{ Form::text('tel_number2',"", ['class' => 'form-control', 'id' => 'tel_number2', "placeholder" => "+421958788"]) }}
                                                @if ($errors->has('tel_number2'))
                                                    <span class="help-block"><strong>{{ $errors->first('tel_number2') }}</strong></span>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">

                                        <div class="col-md-6{{ $errors->has('web_page') ? ' has-error' : '' }}">
                                            {{ Form::label('web_page', trans('app.web').':',['class' => "col-xs-4 control-label"]) }}

                                            <div class="col-md-6 col-xs-11{{ $errors->has('web_page') ? ' has-error' : '' }}">
                                                {{ Form::text('web_page',"", ['class' => 'form-control', 'id' => 'web_page', "placeholder" => "wwww.odvez-to.sk"]) }}
                                                @if ($errors->has('web_page'))
                                                    <span class="help-block"><strong>{{ $errors->first('web_page') }}</strong></span>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12{{ $errors->has('description') ? ' has-error' : '' }}">
                                            {{ Form::label('description', trans('app.popis').':',['class' => "col-md-2 control-label"]) }}

                                            <div class="col-md-9{{ $errors->has('description') ? ' has-error' : '' }}">
                                                {{ Form::textarea('description',"", ['class' => 'form-control', 'id' => 'description']) }}
                                                @if ($errors->has('description'))
                                                    <span class="help-block"><strong>{{ $errors->first('description') }}</strong></span>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class=" col-md-12{{ $errors->has('podmienki') ? ' has-error' : '' }}">
                                            <a href="#podm" role="button" data-toggle="modal">
                                                {{ Form::label('podmienki', trans('app.suhlas').':',['class' => "col-xs-10 podmienky text-right control-label"]) }}
                                            </a>
                                            <div style="width: 30px;" class="right col-xs-1{{ $errors->has('podmienki') ? ' has-error' : '' }}">
                                                {{ Form::checkbox('podmienki', 2, null, ['class' => 'form-control ', 'id' => 'podmienki' , 'required' => 'required']) }}

                                            </div>
                                            @if ($errors->has('podmienki'))
                                                <div class="col-md-6 col-md-offset-6">
                                                    <span class="help-block text-right"><strong>{{ $errors->first('podmienki') }}</strong></span>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-12 text-right">
                                        <button type="submit" class="btn btn-primary">
                                            {{ trans('app.dalej') }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>

@endsection
@section('autocomplete')
    @include('partials.googleMaps')
@endsection


