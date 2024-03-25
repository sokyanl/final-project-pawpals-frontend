<script>
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
	import { goto } from '$app/navigation';
	import { uploadMedia } from '../../../utils/s3-uploader.js';
	import { getTokenFromLocalStorage } from '../../../utils/func';
	
	
	//function to handle upload pet image
	let formErrors = {};
	async function uploadImage(evt) {
		const [fileName, fileUrl] = await uploadMedia(evt.target['image'].files[0]);
	
	//retrive token for authentication purpose log in user can post image   
	const accessToken = getTokenFromLocalStorage();
		const petData = {
			pet_type: evt.target['type'].value,
			 pet_breed: evt.target['breed'].value,
			pet_colour: evt.target['color'].value,
			pet_gender: evt.target['gender'].value,
			pet_age: evt.target['age'].value,
			pet_description: evt.target['description'].value,
			pet_location: evt.target['location'].value,
			pet_image_url: fileUrl,
			pet_status: evt.target['status'].value
		};
		//console.log(petData);
		//create POST pet request to backend upload pet data endpoint
		const resp = await fetch (
			PUBLIC_BACKEND_BASE_URL + '/pet',
			{
				method: 'POST',
				mode:'cors',
				headers: {
					'Content-Type':'application/json',
					'Authorization': `Bearer ${accessToken}`
				},
				body: JSON.stringify(petData)
			}
		);
		const res = await resp.json();
		console.log('Response status:', resp.status);
		if (resp.status === 200) {
			// console.log('go slug page');
			 goto (`/form/${res.id}`); //link back to the created pet page
		} else if (resp.status === 400) {
		   console.log(res);
		   formErrors = res.error;
		} 
	};

	</script>
	
	<svelte:head>
	  <script src="/aws-sdk-s3.min.js"></script>
	</svelte:head>
	
	<div
		class="hero min-h-screen bg-base-200"
		style="background-image: url('/BG5.png'); background-position: bottom;"
	>
		<div class="hero-content flex-col lg:flex-row-reverse mt-28">
			<div class="text-center lg:text-left">
				<h1 class="text-5xl font-bold ml-10">Tell Us About Your Pet</h1>
				<p class="py-6 ml-10">
					Share the heartwarming tale of your furry companion with us. We're here to offer our support
					and spread the word within our community, uniting our efforts to bring you and your beloved
					pet back together.
				</p>
			</div>
			<div class="card w-full max-w-2xl shadow-2xl bg-base-100">
				<form class="card-body" on:submit={uploadImage}>
					<div class="form-control">
						<!-- Pet Type Section -->
						<label class="label" for="type">
							<span class="label-text font-medium text-base mt-3">Pet Type</span>
						</label>
						<select class="select select-bordered w-full required" name="type"  >
							<option disabled selected>Select one</option>
							<option>Cat</option>
							<option>Dog</option>
						</select>
						{#if 'pet_type' in formErrors}
				<label class="label" for="type">
					<span class="label-text-alt text-red-500">{formErrors.pet_type}</span>
				</label>
			{/if}
	
	
						<!-- Pet Breed Section -->
						<label class="label" for="breed">
							<span class="label-text font-medium text-base mt-3">Pet Breed</span>
						</label>
						<input
							type="text"
							placeholder="example: tabby if it's a cat, corgi if it's a dog"
							class="input input-bordered"
				name="breed"
				 
						/>
						{#if 'pet_breed' in formErrors}
				<label class="label" for="breed">
					<span class="label-text-alt text-red-500">{formErrors.pet_breed}</span>
				</label>
			{/if}
						
	
						<!-- Pet Colour Section -->
						<label class="label" for="">
							<span class="label-text font-medium text-base mt-3">Pet Colour</span>
						</label>
						<input name="color" type="text" placeholder="example: black, white, brown" class="input input-bordered"   />
						{#if 'pet_colour' in formErrors}
				<label class="label" for="color">
					<span class="label-text-alt text-red-500">{formErrors.pet_colour}</span>
				</label>
			{/if}
	
						<!-- Pet Gender Section -->
						<label class="label" for="">
							<span class="label-text font-medium text-base mt-3">Pet Gender</span>
						</label>
						<select class="select select-bordered w-full required" name="gender"  >
							<option disabled selected>Select one</option>
							<option>Female</option>
							<option>Male</option>
							<option>I'm not sure...</option>
						</select>
						{#if 'pet_gender' in formErrors}
				<label class="label" for="gender">
					<span class="label-text-alt text-red-500">{formErrors.pet_gender}</span>
				</label>
			{/if}
	
						<!-- Pet Age Section -->
						<label class="label" for="">
							<span class="label-text font-medium text-base mt-3">Pet Age</span>
						</label>
						<input name="age" type="text" placeholder="example: 1 years old" class="input input-bordered" />
						<span class="label-text-secondary text-sm text-purple-400 mt-2 mb-2"
							>Leave blank if unknown</span
						>
	
						<!-- Pet Description Section -->
						<label class="label" for="">
							<span class="label-text font-medium text-base mt-3">Pet Description</span>
						</label>
						<textarea
			  name="description"
							class="textarea input-bordered"
							placeholder="example: Pet name, their behaviour, any unique physical traits like a white spot under their chin, etc..."
							 
						></textarea>
						{#if 'pet_description' in formErrors}
				<label class="label" for="description">
					<span class="label-text-alt text-red-500">{formErrors.pet_description}</span>
				</label>
			{/if}
	
						<!-- Pet Location Section -->
						<label class="label" for="">
							<span class="label-text font-medium text-base mt-3">Last Seen Location</span>
						</label>
						<input
							type="text"
				name="location"
							placeholder="example: Subang, Kota Damansara, Puchong, etc..."
							class="input input-bordered"
							 
						/>
						{#if 'pet_location' in formErrors}
				<label class="label" for="location">
					<span class="label-text-alt text-red-500">{formErrors.pet_location}</span>
				</label>
			{/if}
	
			  <!-- Pet Image Section -->
						<label class="label" for="">
							<span class="label-text font-medium text-base mt-3">Pet Image</span>
						</label>
						<input
							type="file"
							class="file:btn file:btn-primary"
				name="image"
				 
						/>
	
						<!-- Pet Status Section -->
			  <label class="label" for="">
							<span class="label-text font-medium text-base mt-3">Pet Status</span>
						</label>
						<select class="select select-bordered w-full  " name="status"  >
							<option disabled selected>Select one</option>
							<option>Lost</option>
							<option>Found</option>
						</select>
						{#if 'pet_status' in formErrors}
				<label class="label" for="location">
					<span class="label-text-alt text-red-500">{formErrors.pet_status}</span>
				</label>
			{/if}
	
						<div class="form-control mt-6">
							<button class="btn btn-primary">Submit</button>
						</div>
=======
	//console.log(petData);
	//create POST pet request to backend upload pet data endpoint
	const resp = await fetch (
        PUBLIC_BACKEND_BASE_URL + '/pet',
        {
            method: 'POST',
            mode:'cors',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(petData)
        }
    );
    const res = await resp.json();
	console.log('Response status:', resp.status);
    if (resp.status === 200) {
		// console.log('go slug page');
		 goto (`/form/${res.id}`); //link back to the created pet page
	} else if (resp.status === 400) {
	   console.log(res);
	   formErrors = res.data;
	} 
};
</script>

<svelte:head>
  <script src="/aws-sdk-s3.min.js"></script>
</svelte:head>

<div
	class="hero min-h-screen bg-base-200"
	style="background-image: url('/BG5.png'); background-position: bottom;"
>
	<div class="hero-content flex-col lg:flex-row-reverse mt-28">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold ml-10">Tell Us About Your Pet</h1>
			<p class="py-6 ml-10">
				Share the heartwarming tale of your furry companion with us. We're here to offer our support
				and spread the word within our community, uniting our efforts to bring you and your beloved
				pet back together.
			</p>
		</div>
		<div class="card w-full max-w-2xl shadow-2xl bg-base-100">
			<form class="card-body" on:submit={uploadImage}>
				<div class="form-control">
					<!-- Pet Type Section -->
					<label class="label" for="type">
						<span class="label-text font-medium text-base mt-3">Pet Type</span>
					</label>
					<select class="select select-bordered w-full required" name="type"  >
						<option disabled selected>Select one</option>
						<option>Cat</option>
						<option>Dog</option>
					</select>


					<!-- Pet Breed Section -->
					<label class="label" for="breed">
						<span class="label-text font-medium text-base mt-3">Pet Breed</span>
					</label>
					<input
						type="text"
						placeholder="example: tabby if it's a cat, corgi if it's a dog"
						class="input input-bordered"
            name="breed"
             
					/>
					

					<!-- Pet Colour Section -->
					<label class="label" for="">
						<span class="label-text font-medium text-base mt-3">Pet Colour</span>
					</label>
					<input name="color" type="text" placeholder="example: black, white, brown" class="input input-bordered"   />

					<!-- Pet Gender Section -->
					<label class="label" for="">
						<span class="label-text font-medium text-base mt-3">Pet Gender</span>
					</label>
					<select class="select select-bordered w-full required" name="gender"  >
						<option disabled selected>Select one</option>
						<option>Female</option>
						<option>Male</option>
						<option>I'm not sure...</option>
					</select>

					<!-- Pet Age Section -->
					<label class="label" for="">
						<span class="label-text font-medium text-base mt-3">Pet Age</span>
					</label>
					<input name="age" type="text" placeholder="example: 1 years old" class="input input-bordered" />
					<span class="label-text-secondary text-sm text-purple-400 mt-2 mb-2"
						>Leave blank if unknown</span
					>

					<!-- Pet Description Section -->
					<label class="label" for="">
						<span class="label-text font-medium text-base mt-3">Pet Description</span>
					</label>
					<textarea
          name="description"
						class="textarea input-bordered"
						placeholder="example: Pet name, their behaviour, any unique physical traits like a white spot under their chin, etc..."
						 
					></textarea>

					<!-- Pet Location Section -->
					<label class="label" for="">
						<span class="label-text font-medium text-base mt-3">Last Seen Location</span>
					</label>
					<input
						type="text"
            name="location"
						placeholder="example: Subang, Kota Damansara, Puchong, etc..."
						class="input input-bordered"
						 
					/>

          <!-- Pet Image Section -->
					<label class="label" for="">
						<span class="label-text font-medium text-base mt-3">Pet Image</span>
					</label>
					<input
						type="file"
						class="file:btn file:btn-primary"
            name="image"
             
					/>

					<!-- Pet Status Section -->
          <label class="label" for="">
						<span class="label-text font-medium text-base mt-3">Pet Status</span>
					</label>
					<select class="select select-bordered w-full  " name="status"  >
						<option disabled selected>Select one</option>
						<option>Lost</option>
						<option>Found</option>
					</select>

					<div class="form-control mt-6">
						<button class="btn btn-primary">Submit</button>

					</div>
				</form>
			</div>
		</div>
	</div>
	