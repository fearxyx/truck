<?php

namespace App\Http\Controllers;

use App\Events\MessagePosted;
use App\Message;
use App\Receiver;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MessagesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($userId)
    {
        $user = Auth::user();
        $message= new Message();
        $message->message = request()->get('message');
        $message->type = request()->get('type');
        $message->save();

        $receiver = new Receiver();
        $receiver->user_id = $user->id;
        $receiver->r_user_id = $userId;
        $receiver->message_id = $message->id;
        $receiver->save();

        // // new message has beed posted
        broadcast(new MessagePosted($message,$user,$userId))->toOthers();
        $output['message'] = $message;
        $output['user'] = $user;

        return response(['output'=> $output]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($userId)
    {
        $authUserId = Auth::user()->id;
        $messages = DB::table('messages')
            ->join('receivers','receivers.message_id','=','messages.id')
            ->leftJoin('profiles','profiles.user_id',	'=',	'receivers.user_id')
            ->where('receivers.user_id','=',$authUserId)
            ->where('receivers.r_user_id','=',$userId)
            ->orWhere('receivers.user_id','=',$userId)
            ->where('receivers.r_user_id','=',$authUserId)
            ->select('profiles.name','profiles.avatar','profiles.user_id','messages.message','messages.id as message_id' ,'messages.file_path','messages.file_name','messages.type','messages.created_at as time','receivers.user_id as r_user_id')
            ->orderBy("messages.id","asc")
            ->limit('150')
            ->get();
        DB::table('receivers')->where('r_user_id',$authUserId)->update(['status'=>2]);
        return response(['messages' => $messages]);

    }

    public function getMessageNotifications()
    {
        $messages = Receiver::where('r_user_id', Auth::user()->id)->where('status',1)->with('message')->with('profile');
        $messages = $messages->select(DB::raw('MAX(message_id) as message_id'),DB::raw('user_id'))
            ->groupBy('user_id')->get('user_id');

        return response(['messages'=> $messages]);
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
}
