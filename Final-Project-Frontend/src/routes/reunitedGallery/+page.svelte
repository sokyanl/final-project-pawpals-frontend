<script>
  import { createEventDispatcher } from 'svelte';
  export let data;

  // Create an event dispatcher to emit filter change events
  const dispatch = createEventDispatcher();
  
  // Define a reactive variable to store the selected pet type
  let selectedType = 'all';

  // Function to handle filter change
  function handleFilterChange(event) {
    selectedType = event.target.value;
    dispatch('filterChange', selectedType);
  }

</script>

<div class="min-h-96" style="background-image: url('/Banner1.png'); background-size: cover; background-position: bottom;">
  <div class="hero-content text-center text-neutral-content">
  </div>
</div>

<div class="flex">
  <!-- Left Side Info -->
  <div class="flex flex-col items-start ml-5 mt-5">
    <label class="form-control w-full max-w-52 mb-5">
      <!-- Pet Filter -->
      <span class="label-text text-purple-700 font-bold">Filter by type of pet</span>
      <select class="select select-primary mt-1" bind:value={selectedType} on:change={handleFilterChange}>
        <option value="all">All Pets</option>
        <option value="cat">Cats Only</option>
        <option value="dog">Dogs Only</option>
      </select>
    </label>
    <!-- Button to browse other gallery -->
    <div class="label mb-5">
      <span class="label-text text-purple-700 font-bold">Browse Gallery</span>
    </div>
    <a href="/lostGallery" class="btn btn-accent mb-3" style="width: 200px">Lost Pets Gallery</a>
    <a href="/foundGallery" class="btn btn-accent mb-3" style="width: 200px">Found Pets Gallery</a>
  </div>

  <!-- Cards -->
  <div class="overflow-x-auto w-full mr-5 basis-3/4" style="padding: 50px">
    <div class="flex flex-wrap justify-center gap-10">
      {#each data.pet.filter(pet => (selectedType === 'all' || pet.pet_type.toLowerCase() === selectedType.toLowerCase()) && pet.pet_status === 'reunited') as pet}
      <div class="flex justify-center">
        <div class="card w-80 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <div class="card-actions justify-start">
              <div class="badge badge-accent">{pet.pet_breed}</div>
              <div class="badge badge-accent">{pet.pet_type}</div>
              <div class="badge badge-accent">{pet.pet_color}</div>
              <div class="badge badge-accent">{pet.pet_gender}</div>
            </div>
            <p class="mt-5">{pet.pet_description}</p>
            <div class="card-actions justify-center mt-5">
              <button class="btn btn-primary" href="/pet/{pet.id}">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      {/each}
    </div>
  </div>
</div>

