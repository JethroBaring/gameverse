<script lang="ts">
	import { Login } from '../../../lib';
    let email: string, password: string;
</script>

<div class="flex-1 h-full bg-blue-500 rounded-inherit flex items-center justify-center">
	<img src={Login} alt="" class="w-4/5" />
</div>
<div class="flex-1 flex flex-col gap-5 items-center justify-between h-full">
	<div class="flex-1 flex items-center justify-center w-full">
        <div class="w-1/2"> 
            <h1 class="text-3xl font-semibold mb-5">Welcome back! Log in and pick up where you left off.</h1>
            <form>
                <div class="form-control">
                    <label class="label" for="">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" class="input input-bordered" bind:value={email}/>
                </div>
                <div class="form-control">
                    <label class="label" for="">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" class="input input-bordered" bind:value={password}/>
                    <label class="label" for="">
                        <a href="/" class="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div class="form-control mt-6">
                    <button class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    </div>
    <div>
        <p class="m-3">Don't have an account? <a href="/signup" class="font-semibold text-blue-700 cursor-pointer">Signup</a> </p>
    </div>
</div>
