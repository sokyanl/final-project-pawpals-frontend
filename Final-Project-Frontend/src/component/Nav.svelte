<script>

</script>

<!-- Navbar -->
<nav class="navbar bg-purple-800 fixed top-0 w-full z-50">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/></svg>
      </div>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <!-- Layout control -->
        <li><a>Search lost pet</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <!-- button content -->
    <a href="/">
      <img src="/Logo.png" alt="Paw Pals Logo" class="logo-image w-auto h-14">
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a class="text-white">Search lost pet</a></li>
      <li>
        <details>
          <summary class="text-white">Find out more</summary>
          <ul class="p-2">
            <li><a>Learn our process</a></li>
            <li><a>Create an account</a></li>
          </ul>
        </details>
      </li>
      <li><a class="text-white">Success Stories</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a href="/users/login" class="btn btn-outline btn-secondary">Login</a>
  </div>
</nav>
