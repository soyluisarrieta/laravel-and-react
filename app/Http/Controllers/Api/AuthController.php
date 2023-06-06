<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{

  public function signup(SignupRequest $request)
  {
    $data = $request->validated();
    /** @var \App\Models\User $user */
    $user = User::create([
      'name' => $data['name'],
      'email' => $data['email'],
      'password' => bcrypt($data['password'])
    ]);

    $token = $user->createToken('main')->plainTextToken;

    return response(compact('user', 'token'));
  }

  public function login(LoginRequest $request)
  {
  }

  public function logout(Request $request)
  {
  }
}
