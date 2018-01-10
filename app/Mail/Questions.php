<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Http\Request;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Session;

class Questions extends Mailable
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
        $email = $request->emailAdress;
        $subject = $request->subject;
        $text = $request->text;
        Session::flash('success', trans('app.dakujeme'));
        return $this->view('mail.questions',[
            'email' =>    $email,
            'subject' => $subject,
            'text' =>     $text,
        ])
            ->from("info@odvez-to.sk", $subject)
            ->cc("fearx38@gmail.com", $subject)
            ->subject($subject);
    }
}
