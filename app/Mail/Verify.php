<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Http\Request;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class Verify extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(Request $request)
    {
        if($request->hasFile('rar')) {
            $user = Auth::user();
            $email = $user->email;
            $name = $user->profile->name;
            $subject = 'Verify Account';
            $text = $request->popis;
            $rar = $request->file('rar');
            $ext = $request->rar->getClientOriginalExtension();
            Session::flash('success', trans('app.dakujeme'));
            return $this->view('mail.questions',[
                'email' =>    $email,
                'name' =>    $name,
                'subject' => $subject,
                'text' =>     $text,
            ])
                ->from("info@odvez-to.sk", $name)
                ->cc("fearx38@gmail.com", $name)
                ->subject($subject)
                ->attach($request->file('rar')->getRealPath(), [
                    'as' => $request->file('rar')->getClientOriginalName(),
                    'mime' => $request->file('rar')->getMimeType()
                ]);

        }
        return redirect()->back();

    }
}
