<?php

namespace App\Http\Controllers\API\v1\message;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MessageController extends Controller
{
 public function addMessageToDB(Request $request) {
     $data = Validator::make($request->all(), [
         'name' => ['required'],
         'email' => ['required'],
         'message' => ['required'],
     ])->validate();

     $isMessageAdd = Message::create([
         'name' => $data['name'],
         'email' => $data['email'],
         'message' => $data['message'],
     ]);
     if ($isMessageAdd) {
         return true;
     }
     return false;
 }
}

