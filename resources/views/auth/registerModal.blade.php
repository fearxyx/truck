<div id="registerModal" class="modal {{
    Session::has('registration_error') && !isset($register) ? 'fade in' : 'fade'}}" role="dialog" style="{{
    Session::has('registration_error') && !isset($register)  ? 'display:block;background: rgba(0, 0, 0, 0.6)' : 'display:none;' }}">
    <div id="close" class="close-modal"></div>
    {!! Form::open(['url' => [secure_url(URL::route('register',[], config('app.http')))], 'method' => 'GET/PUT', 'class' => "form-horizontal", 'style' => 'padding-top: 30px']) !!}
        <div class=" col-lg-6 col-lg-offset-3 col-md-10 col-md-offset-1 clearfix">
            @include('partials.message')
            <!-- Modal content-->
            <div class="modal-content clearfix">
                <div class="modal-header">
                    <button type="button" class="close close-modal" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">{{ trans('app.registracia')  }}</h4>
                </div>

                <div class="col-md-12 modal-cont" style="clear: both">

                    <div class="modal-body" style="padding-top: 5rem;">
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
                <div class="col-md-12 clearfix" style="padding-top: 3rem;">
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
<script>
    var _token = "{{ csrf_token() }}";
</script>
