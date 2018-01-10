<?php

use App\Events\MessagePosted;
use Illuminate\Support\Facades\Log;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::resource('user','UserController');
Auth::routes();
// get stored messages
Route::get('/messages/{userId}', 'MessagesController@show')->where(['userId' => '[0-9]+']);
Route::post('/messages/{userId}', 'MessagesController@store')->where(['userId' => '[0-9]+']);
Route::get('/messages/notifications', 'MessagesController@getMessageNotifications');
// post new messages

Route::post('/fileUpload/{userId}',function($userId) {
	$file = request('file');
	$user = Auth::user();
	if (!empty($file)) {
        $fileName = $file->getClientOriginalName();
        // file with path
        $filePath = url('uploads/chats/'.$fileName);
        //Move Uploaded File
        $destinationPath = 'uploads/chats';
        if($file->move($destinationPath,$fileName)) {
            $request['file_path'] = $filePath;
            $request['file_name'] = $fileName;
            $request['message'] = 'file';
            $request['type'] = request('type');
        }

        $message = $user->messages()->create($request);

		$message->receivers()->create([
				'user_id'=>$userId
			]);

		$output = [];
		broadcast(new MessagePosted($message,$user,$userId))->toOthers();

		$output['message'] = $message;
		$output['user'] = $user;
		return ['output'=> $output];

    }

})->middleware('auth');


Route::get('/', [
    'uses'   =>'HomeController@index',
    'as'     => 'home'
]);
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
Route::get('/freinds', [
    'uses'   =>'FreindsController@index',
    'as'     => 'freind.user'
]);
Route::get('/freinds/store/{id}', [
    'uses'   =>'FreindsController@store',
    'as'     => 'freind.store'
])->where(['id' => '[0-9]+']);

Route::get('/freinds/destroy/{id}', [
    'uses'   =>'FreindsController@destroy',
    'as'     => 'freind.destroy'
])->where(['id' => '[0-9]+']);

Route::get('/users/search/{value}', [
    'uses'   =>'UserController@search',
    'as'     => 'user.search'
]);
Route::get('/user/profile', [
    'uses'   =>'UserController@getData',
    'as'     => 'user.get'
]);

Route::get('/{any}', [
    'uses'   =>'HomeController@appIndex',
    'as'     => 'home.app'
])->where('any', '.*');

/**                 Products              */
Route::group(['prefix' => '/'.trans('routers.routeCarier')], function(){
    Route::get('/{lang?}', [
        'uses'   =>'HomeController@appIndex',
        'as'     => 'product'
    ]);
    Route::post('/', [
        'uses'   =>'HomeController@index',
        'as'     => 'product.search'
    ]);
});

/**                 truck              */
Route::group(['prefix' => '/'.trans('routers.routeShipper')], function(){
    Route::get('/{lang?}', [
        'uses'   =>'HomeController@index',
        'as'     => 'truck'
    ]);
    Route::post('/', [
        'uses'   =>'HomeController@index',
        'as'     => 'truck.search'
    ]);
});

