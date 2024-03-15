<script>

  </script>
  


  <div class="hero min-h-screen bg-base-200" style="background-image: url('/BG5.png'); background-position: bottom;">
    <div class="hero-content flex-col lg:flex-row-reverse mt-28">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold ml-10">Tell Us About Your Pet</h1>
        <p class="py-6 ml-10">Share the heartwarming tale of your furry companion with us. We're here to offer our support and spread the word within our community, uniting our efforts to bring you and your beloved pet back together.</p>
      </div>
      <div class="card w-full max-w-2xl shadow-2xl bg-base-100">
        <form class="card-body">
          <div class="form-control">
  
            <!-- Pet Type Section -->
            <label class="label">
              <span class="label-text font-medium text-base mt-3">Pet Type</span>
            </label>
            <select class="select select-bordered w-full required">
              <option disabled selected>Select one</option>
              <option>Cat</option>
              <option>Dog</option>
            </select>
  
            <!-- Pet Breed Section -->
            <label class="label">
              <span class="label-text font-medium text-base mt-3">Pet Breed</span>
            </label>
            <input type="text" placeholder="example: tabby if it's a cat, corgi if it's a dog" class="input input-bordered" />
            <span class="label-text-secondary text-sm text-purple-400 mt-2 mb-2">Leave blank if unknown</span>  
            
            <!-- Pet Colour Section -->
            <label class="label">
              <span class="label-text font-medium text-base mt-3">Pet Colour</span>
            </label>
            <input type="text" placeholder="example: Corgi" class="input input-bordered" required />

            <!-- Pet Gender Section -->
            <label class="label">
              <span class="label-text font-medium text-base mt-3">Pet Gender</span>
            </label>
            <select class="select select-bordered w-full required">
              <option disabled selected>Select one</option>
              <option>Female</option>
              <option>Male</option>
              <option>I'm not sure...</option>
            </select>

            <!-- Pet Age Section -->
            <label class="label">
              <span class="label-text font-medium text-base mt-3">Pet Age</span>
            </label>
            <input type="text" placeholder="example: 1 years old" class="input input-bordered" />
            <span class="label-text-secondary text-sm text-purple-400 mt-2 mb-2">Leave blank if unknown</span>

            <!-- Pet Description Section -->
            <label class="label">
              <span class="label-text font-medium text-base mt-3">Pet Description</span>
            </label>
            <textarea class="textarea textarea-primary" placeholder="example: Pet name, their behaviour, any unique physical traits like a white spot under their chin, etc..." required></textarea>
            
            <!-- Pet Location Section -->
            <label class="label">
              <span class="label-text font-medium text-base mt-3">Last Seen Location</span>
            </label>
            <input type="text" placeholder="example: Subang, Kota Damansara, Puchong, etc..." class="input input-bordered" required />

            <!-- Pet Status Section -->
            <div class="form-control mt-5">
              <label class="label cursor-pointer">
                <span class="label-text font-medium text-base">Pet Status: LOST</span> 
                <input type="checkbox" checked="checked" class="checkbox checkbox-primary" required />
              </label>
            </div>

  
          <div class="form-control mt-6">
            <button class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  

  
