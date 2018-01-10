<div id="mail" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div id="close" class="close-modal"></div>
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close close-modal" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">{{ trans('app.napiste')  }}</h4>
            </div>
                <form class="form-horizontal" role="form" method="POST" action="{{ secure_url(URL('/mail/send',[], config('app.img'))) }}">
                    <div class="modal-body">
                    {{ csrf_field() }}

                <div class="form-group{{ $errors->has('emailAdress') ? ' has-error' : '' }}">
                        <label for="emailAdress" class="col-md-3 control-label text-center">{{ trans('app.emailovaAdresa')  }}</label>

                        <div class="col-md-8">
                            <input id="emailAdress" type="text" class="form-control" name="emailAdress" value="{{ old('emailAdress') }}" required>
                            @if ($errors->has('emailAdress'))
                                <span class="help-block">
                                <strong>{{ $errors->first('emailAdress') }}</strong>
                            </span>
                            @endif
                        </div>
                    </div>
                    <div class="form-group{{ $errors->has('subject') ? ' has-error' : '' }}">
                        <label for="subject" class="col-md-3 control-label text-center">{{ trans('app.predmet')  }}</label>

                        <div class="col-md-8">
                            <input id="subject" type="text" class="form-control" name="subject" value="{{ old('subject') }}" required>
                            @if ($errors->has('subject'))
                                <span class="help-block">
                                        <strong>{{ $errors->first('subject') }}</strong>
                                    </span>
                            @endif
                        </div>
                    </div>

                    <div class="form-group{{ $errors->has('message') ? ' has-error' : '' }}">
                        <label for="text" class="col-md-3 control-label">{{ trans('app.sprava')  }}</label>

                        <div class="col-md-8">
                            <textarea id="message" class="form-control" name="message" cols="30" rows="10" required></textarea>

                            @if ($errors->has('message'))
                                <span class="help-block">
                                        <strong>{{ $errors->first('message') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger close-modal left" data-dismiss="modal">{{ trans('app.zavriet')  }}</button>
                        <button type="submit" class="btn-primary btn right">{{ trans('app.poslat')  }}</button>
                    </div>
                </form>

        </div>

    </div>
</div>

