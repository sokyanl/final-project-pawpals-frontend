<script>
import { loggedIn, logOut } from '../utils/func'



</script>


<div class="navbar bg-base-100 fixed top-0 w-full bg-purple-800 z-50">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <img src="/BurgerM.png" alt="Icon" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16">
      </div>
<!-- Small/Mobile Broswer -->
      <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/ourMission">Our Mission</a></li>
        <li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a>Find out more</a>
          <ul class="p-2">
            <li><a href="/lostGallery">Search lost pet</a></li>
            <li><a href="/foundGallery">Browse found pets</a></li>
            <li><a href="/reunitedGallery">Success stories</a></li>
          </ul>
        </li>
        <li><a href="/form/upload" class="">Create Post</a></li>
      </ul>
    </div>
    <a href="/">
      <img src="/Logo.png" alt="Paw Pals Logo" class="logo-image w-auto h-14">
    </a>
  </div>
<!-- Wide/Desktop Broswer -->
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a class="text-white" href="/ourMission">Our Mission</a></li>
      <li>
        <details>
          <summary class="text-white">Find out more</summary>
          <ul class="p-2">
            <li><a href="/lostGallery">Search lost pet</a></li>
            <li><a href="/foundGallery">Browse found pets</a></li>
            <li><a href="/reunitedGallery">Success stories</a></li>
          </ul>
        </details>
      </li>
      {#if $loggedIn}
      <li><a href="/form/upload" class="text-white">Create Post</a></li>
      {:else}
      <li><a href="/users/login" class="text-white">Create Post</a></li>
      {/if}
    </ul>
  </div>
  <div class="navbar-end">
    {#if $loggedIn}
      <!-- Display user profile and log out buttons when user is logged in -->
      <a href="/profile" class="btn btn-outline btn-accent mr-3">User Profile</a>
      <button on:click={logOut} href = "/" class="btn btn-outline btn-accent mr-3">Log Out</button>
    {:else}
      <!-- Display create account and login buttons when user is not logged in -->
      <a href="/users/create" class="btn btn-outline btn-accent mr-3">Create Account</a>
      <a href="/users/login" class="btn btn-outline btn-accent mr-3">Login</a>
    {/if}
</div>
</div>

