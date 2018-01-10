<?php

namespace App\Mail;

use App\Email;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Reklama extends Mailable
{
    use Queueable, SerializesModels;
    public $email,$end;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($email, $end)
    {
        $this->email = $email;
        $this->end = $end;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        if($this->end == 'sk'){
            return $this->view('mail.reklamaSk',[
            ])
                ->from("postmaster@odvez-to.sk", "Nová web aplikacia")
                ->cc($this->email, "Nová web aplikacia")
                ->subject('Nová web aplikacia');
        }elseif ($this->end == 'hu'){
            return $this->view('mail.reklamaHu',[
            ])
                ->from("postmaster@odvez-to.sk", "Új web applikació")
                ->cc($this->email, "Új web applikació")
                ->subject("Új web applikació");
        }else{
            return $this->view('mail.reklamaEng',[
            ])
                ->from("postmaster@odvez-to.sk", "New web application")
                ->cc($this->email, "New web application")
                ->subject("New web application");
        }

    }
}
