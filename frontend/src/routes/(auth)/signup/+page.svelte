<script lang="ts">
	import { Signup } from '../../../lib';
    let email: string, password: string, repeatpassword: string;
</script>

<div class="flex-1 h-full bg-blue-500 rounded-inherit flex items-center justify-center">
	<img src={Signup} alt="" class="w-4/5 scale-x-[-1]" />
</div>
<div class="flex-1 flex flex-col gap-5 items-center justify-between h-full">
	<div class="flex-1 flex items-center justify-center w-full">
        <div class="w-1/2"> 
            <h1 class="text-3xl font-semibold mb-5">Welcome! Join us and create an account to get started.</h1>
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
                </div>
                <div class="form-control">
                    <label class="label" for="">
                        <span class="label-text">Repeat password</span>
                    </label>
                    <input type="text" placeholder="repeat password" class="input input-bordered" bind:value={repeatpassword}/>
                </div>
                <div class="form-control mt-6">
                    <button class="btn btn-primary">Signup</button>
                </div>
            </form>
        </div>
    </div>
    <div>
        <p class="m-3">Already have an account? <a href="/login" class="font-semibold text-blue-700 cursor-pointer">Login</a> </p>
    </div>
</div>
