<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'permission:users']);
    }

    public function index()
    {
        // $permission = Permission::create(['name' => 'users']);
        // $role = Role::create(['name' => 'manager']);
        // Role::where('name', 'manager')->first()->syncPermissions(Permission::all());
        // auth()->user()->assignRole(Role::first());

        return User::get();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
