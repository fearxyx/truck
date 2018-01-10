<?php

namespace App\Http\Controllers\voyager;

use App\Email;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('vendor.voyager.emails.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'email1' => 'unique:emails,email',
            'email2' => 'unique:emails,email',
            'email3' => 'unique:emails,email',
            'email4' => 'unique:emails,email',
            'email5' => 'unique:emails,email',
            'email6' => 'unique:emails,email',
            'email7' => 'unique:emails,email',
            'email8' => 'unique:emails,email',
            'email9' => 'unique:emails,email',
            'email10' => 'unique:emails,email',
            'email11' => 'unique:emails,email',

        ]);
        $request = $request->all();
        foreach($request as $key => $email){
            if($key != "_token" && $email != null){
                $query = new Email();
                $query->email = $email;
                $query->save();
            }
        };
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function send()
    {
        set_time_limit(-1);
        ini_set('max_execution_time', -1);
        ini_set("memory_limit",-1);
        ini_set('post_max_size', '97280M');

        $emails = Email::all()->where('send','!=',1);
        foreach($emails as $email){
            $check = preg_split('/[.]/', $email->email);
            $end = end($check);
            $emailAdress = $email->email;
            Mail::to('postmaster@odvez-to.sk')->send(new \App\Mail\Reklama($emailAdress,$end));
            $email->send = 1;
            $email->save();
        }
        return redirect()->back();
    }

}
