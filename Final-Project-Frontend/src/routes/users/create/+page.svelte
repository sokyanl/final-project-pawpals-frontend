<script>
  import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
  import { goto } from '$app/navigation';

  async function createUser(evt) {
    evt.preventDefault();

    if (evt.target['password'].value != evt.target['password-confirmation'].value) {
      formErrors['password'] = { message: 'Password confirmation does not match' };
      clicked = false;
      console.log(clicked);
      return;
    }

    const userData = {
      name: evt.target['name'].value,
      email: evt.target['email'].value,
      password: evt.target['password'].value
    };

    const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/users', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

        if(resp.status === 200) {
      goto('/users/login')
        } else if (resp.status === 400) {
            const res = await resp.json();
      formErrors = res.data;
        } else {
        }
        console.log(resp.status)
        return formErrors
  }

    let formErrors = createUser()
</script>

<div class="hero min-h-screen">
<img src="/BG1.png" alt="Description" class="absolute inset-0 w-full h-full object-cover" />
   <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form class="card-body" on:submit={createUser}>
      <!-- Name -->
      <div class="form-control mt-1">
        <label class="label" for="name">
          <span class="label-text">Name</span>
        </label>
        <input type="text" placeholder="name" class="input input-bordered" name="name" required />
      </div>
      <!-- Email -->
      <div class="form-control mt-1">
        <label class="label" for="email">
          <span class="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" class="input input-bordered" name="email" required />
      </div>
      <!-- Password -->
      <div class="form-control mt-1">
        <label class="label" for="password">
          <span class="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" class="input input-bordered" name="password" required />
      <!-- Password -->
      <div class="form-control mt-1">
        <label class="label" for="password-confirmation">
          <span class="label-text">Confirm Password</span>
        </label>
        <input type="password" placeholder="password" class="input input-bordered" name="password-confirmation" required />
      </div>
      <div class="form-control mt-6">
        <button class="btn btn-primary">Register</button>
      </div>
    </form>
  </div>
</div>
