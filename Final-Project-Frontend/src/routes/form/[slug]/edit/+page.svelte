<script>
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
	import { goto } from '$app/navigation';
	import { uploadMedia } from '../../../../utils/s3-uploader.js';
	import { getTokenFromLocalStorage } from '../../../../utils/func';
  export let data

	let formErrors = {};

	async function uploadImage(evt) {
		evt.preventDefault();
		const [fileName, fileUrl] = await uploadMedia(evt.target['image'].files[0]);

		const accessToken = getTokenFromLocalStorage();

		const userData = {
			pet_type: evt.target['name'].value,
			pet_breed: evt.target['breed'].value,
			pet_colour: evt.target['color'].value,
			pet_gender: evt.target['gender'].value,
      pet_age: 4,
      pet_description: evt.target['description'].value,
      pet_location: evt.target['location'].value,
      pet_status: evt.target['status'].value
		};

		console.log(userData);

		const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/pet', {
			method: 'PUT',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`
			},
			body: JSON.stringify(userData)
		});

		const res = await resp.json();
		console.log(res);

		if (resp.status === 200) {
			goto(`/form/${data.form.id}`);
		} else if (resp.status === 400) {
			console.log(res);
			formErrors = res.data;
		} else {
		}
		console.log(resp.status);
		return formErrors;
	}
</script>

<svelte:head>
  <script src="/aws-sdk-s3.min.js"></script>
</svelte:head>

<div
	class="hero min-h-screen bg-base-200"
	style="background-image: url('/BG6.png'); background-position: bottom;"
>
	<div class="hero-content flex-col lg:flex-row-reverse mt-28">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold ml-10">Update Your Pet's Story</h1>
			<p class="py-6 ml-10">
				Update the story of your beloved pet with us. Whether there are new developments or details
				you want to share, we're here to support you and ensure that our community remains informed,
				standing together in our efforts to reunite you with your furry friend.
			</p>
		</div>
		<div class="card w-full max-w-2xl shadow-2xl bg-base-100">
			<form class="card-body" on:submit={uploadImage}>
				<div class="form-control">
					<!-- Pet Type Section -->
					<label class="label">
						<span class="label-text font-medium text-base mt-3">Pet Type</span>
					</label>
					<select class="select select-bordered w-full required" name="type" value="{data.pet_type}">
						<option disabled selected>Select one</option>
						<option>Cat</option>
						<option>Dog</option>
					</select>


					<!-- Pet Breed Section -->
					<label class="label">
						<span class="label-text font-medium text-base mt-3">Pet Breed</span>
					</label>
					<input
						type="text"
						placeholder="example: tabby if it's a cat, corgi if it's a dog"
						class="input input-bordered"
            name="breed"
            value="{data.pet_breed}"
					/>
					<span class="label-text-secondary text-sm text-purple-400 mt-2 mb-2"
						>Leave blank if unknown</span
					>

					<!-- Pet Colour Section -->
					<label class="label">
						<span class="label-text font-medium text-base mt-3">Pet Colour</span>
					</label>
					<input name="color" value="{data.pet_colour}" type="text" placeholder="example: Corgi" class="input input-bordered" required />

					<!-- Pet Gender Section -->
					<label class="label">
						<span class="label-text font-medium text-base mt-3">Pet Gender</span>
					</label>
					<select class="select select-bordered w-full required" name="gender" value="{data.pet_gender}">
						<option disabled selected>Select one</option>
						<option>Female</option>
						<option>Male</option>
						<option>I'm not sure...</option>
					</select>

					<!-- Pet Age Section -->
					<label class="label">
						<span class="label-text font-medium text-base mt-3">Pet Age</span>
					</label>
					<input name="age" value="{data.pet_age}" type="text" placeholder="example: 1 years old" class="input input-bordered" />
					<span class="label-text-secondary text-sm text-purple-400 mt-2 mb-2"
						>Leave blank if unknown</span
					>

					<!-- Pet Description Section -->
					<label class="label">
						<span class="label-text font-medium text-base mt-3">Pet Description</span>
					</label>
					<textarea
          name="description"
						class="textarea textarea-primary"
            value="{data.pet_description}"
						placeholder="example: Pet name, their behaviour, any unique physical traits like a white spot under their chin, etc..."
						required
					></textarea>

					<!-- Pet Location Section -->
					<label class="label">
						<span class="label-text font-medium text-base mt-3">Last Seen Location</span>
					</label>
					<input
						type="text"
            name="location"
            value="{data.pet_location}"
						placeholder="example: Subang, Kota Damansara, Puchong, etc..."
						class="input input-bordered"
						required
					/>

          <!-- Pet Image Section -->
					<label class="label">
						<span class="label-text font-medium text-base mt-3">Pet Image</span>
					</label>
					<input
						type="file"
						class="file:btn file:btn-primary"
            name="image"
					/>
					<span class="label-text-secondary text-sm text-purple-400 mt-2 mb-2"
						>Leave blank if none</span
					>

					<!-- Pet Status Section -->
          <label class="label">
						<span class="label-text font-medium text-base mt-3">Pet Status</span>
					</label>
					<select class="select select-bordered w-full required" name="status" value="{data.pet_status}">
						<option disabled selected>Select one</option>
						<option>Lost</option>
						<option>Found</option>
            <option>Reunited</option>
					</select>

					<div class="form-control mt-6">
						<button class="btn btn-primary">Submit</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>