<script>
  import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
  import { goto } from '$app/navigation';
  import { loggedIn } from '../../../utils/func';

  async function login(evt) {
    evt.preventDefault();

    const userData = {
      email: evt.target['email'].value,
      password: evt.target['password'].value
    };

    const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/auth', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    const res = await resp.json();
    console.log(res.accessToken);
    console.log(res.body)
    console.log(resp.status)
    

    if (resp.status == '200') {
      localStorage.setItem(
        'auth',
        JSON.stringify({
          token: res.accessToken
        })
      );
      console.log('worked')
      loggedIn.set(true);
      goto('/');
    } else if (resp.status === 400) {
      const res = await resp.json();
      formErrors = res.data;
      console.log('worked400')
    } else {
      console.log('else')
    }
    console.log(resp.status);
    return formErrors;
  }

  let formErrors = login();
</script>

<div class="hero min-h-screen">
<img src="/BG2.png" alt="Description" class="absolute inset-0 w-full h-full object-cover" />
  <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form class="card-body" on:submit={login}>
      <div class="form-control">
        <label class="label" for="email">
          <span class="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" class="input input-bordered" name="email" required />
      </div>
      <div class="form-control">
        <label class="label" for="password">
          <span class="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" class="input input-bordered" name="password" required />
          <a href="/" class="label-text-alt link link-hover">Forgot password?</a>
      </div>
      <div class="form-control mt-2">
        <button class="btn btn-primary">Login</button>
      </div>
      <div class="mt-6 w-full">
        <span class="label-text text-base font-bold mb-5">Dont have an account?</span>
        <button class="btn btn-primary w-full">Register</button>
      </div>
    </form>
  </div>
</div>