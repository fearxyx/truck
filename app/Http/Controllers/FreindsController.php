<?php

namespace App\Http\Controllers;

use App\Freind;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class FreindsController extends Controller
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
        $authID = Auth::user()->id;
        $users = DB::table('freinds')
            ->where('freinds.user_id', '=', $authID)
            ->leftJoin('profiles','profiles.user_id',	'=',	'freinds.freind_id')
            ->select('profiles.name','profiles.avatar','freinds.freind_id')
            ->orderBy("profiles.name","asc")
            ->get();

        return $users;
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
    public function store(Request $request)
    {
        $user = User::find($request->id);

        if($user){
            $newFreind = new Freind();
            $newFreind->user_id = Auth::user()->id;
            $newFreind->freind_id = $request->id;
            $newFreind->save();
            return response('success', 200);
        }
        return response('error', 401);
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
        $freind = Freind::where('user_id',Auth::user()->id)->where('freind_id', $id)->first();
        if($freind){
            $freind->delete();
            return response('success', 200);
        }
        return response('error', 401);
    }
}
