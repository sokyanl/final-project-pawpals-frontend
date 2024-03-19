<script>

</script>


<div class="navbar bg-base-100 fixed top-0 w-full bg-purple-800 z-50">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
<!-- Small/Mobile Broswer -->
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/ourMission">Our Mission</a></li>
        <li>
          <a>Find out more</a>
          <ul class="p-2">
            <li><a href="/lostGallery">Search lost pet</a></li>
            <li><a href="/foundGallery">Browse found pets</a></li>
            <li><a href="/reunitedGallery">Success stories</a></li>
          </ul>
        </li>
        <li><a href="/form/upload" class="text-white">Create Post</a></li>
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
      <li><a href="/form/upload" class="text-white">Create Post</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a href="text-primary" class="btn btn-outline btn-accent mr-3">Create Account</a>
    <a href="text-primary" class="btn btn-outline btn-accent mr-3">Login</a>
  </div>
</div>




<!-- Login Logout Button -->
<!-- 
<div class="navbar-end">
  {#if userLoggedIn} -->
    <!-- Display user profile and log out buttons when user is logged in -->
    <!-- <a href="/user-profile" class="btn btn-outline btn-accent mr-3">User Profile</a>
    <button class="btn btn-outline btn-accent mr-3" onclick="logOut()">Log Out</button>
  {:else} -->
    <!-- Display create account and login buttons when user is not logged in -->
    <!-- <a href="/create-account" class="btn btn-outline btn-accent mr-3">Create Account</a>
    <a href="/login" class="btn btn-outline btn-accent mr-3">Login</a>
  {/if}
</div> -->

