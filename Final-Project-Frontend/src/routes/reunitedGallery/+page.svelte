<!-- Top Banner -->
<div class="min-h-96" style="background-image: url('/Banner1.png'); background-size: cover; background-position: bottom;">
  <div class="hero-content text-center text-neutral-content">
  </div>
</div>


<!-- Left Side Info-->
<div class="flex flex-row items-start">
  <label class="form-control w-full max-w-52 mr-5 ml-5 mt-5">
      <div class="label">
        <!-- Pet Filter -->
          <span class="label-text text-purple-700 font-bold">Filter by type of pet</span>
      </div>
      <select class="select select-primary">
          <option disabled selected>Pick one</option>
          <option>Cat</option>
          <option>Dog</option>
      </select>
      <!-- Button to browse other gallery-->
      <div class="label mt-10">
          <span class="label-text text-purple-700 font-bold">Browse Gallery</span>
      </div>
      <a href="/lostGallery" class="btn btn-accent mb-3">Lost Pets Gallery</a>
      <a href="/foundGallery" class="btn btn-accent mb-3">Found Pets Gallery</a>
  </label>



  <!-- Cards -->
  <div class="overflow-x-auto w-full mr-5 basis-3/4" style="padding: 50px;">
    <div class="flex flex-wrap justify-center">
      <div class="flex justify-center">
        <div class="card w-80 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <div class="card-actions justify-start">
              <div class="badge badge-accent">Pet Breed</div>
              <div class="badge badge-accent">Pet Type</div>
              <div class="badge badge-accent">Pet Colour</div>
              <div class="badge badge-accent">Pet Gender</div>
            </div>
            <p class="mt-5">Pet Description</p>
            <div class="card-actions justify-center mt-5">
              <button class="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
