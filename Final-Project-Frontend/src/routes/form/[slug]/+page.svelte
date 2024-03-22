<script>
	import SvelteMarkdown from 'svelte-markdown';
	import { getUserId, getTokenFromLocalStorage } from '../../../utils/func';
	import { PUBLIC_BACKEND_BASE_URL, PUBLIC_MAPTILER_API_KEY } from '$env/static/public';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { readable } from 'svelte/store'; // Store to hold the API key
	import * as maptilersdk from '@maptiler/sdk';
	import '@maptiler/sdk/dist/maptiler-sdk.css';

	//this export let data is link to src/+page.js
	export let data;
	let clicked = false;
	// fucntion to show map based on pet location
	async function initializeMap() {
		maptilersdk.config.apiKey = PUBLIC_MAPTILER_API_KEY;
		const map = new maptilersdk.Map({
			container: 'map',
			style: maptilersdk.MapStyle.STREETS,
			center: [data.pet.longitude, data.pet.latitude],
			zoom: 15 // Initial zoom level
		});
		const marker = new maptilersdk.Marker()
			.setLngLat([data.pet.longitude, data.pet.latitude])
			.addTo(map);
	}

	onMount(async () => {
		const apiKey = await initializeMap();
		// console.log(apiKey)
	});

	// edit post brings to pet post page with specific user id edit page
	function editPost() {
		goto(`/form/${data.pet.id}/edit`);
	}
	//to check is data and getuserId tally or not
    console.log("data.pet.userId:",  data.pet.userId);
    console.log('getUserId():',  getUserId());
	function deletedPost() {
		goto('/');
	}

	async function deleteUserPetPost() {
		const getToken = getTokenFromLocalStorage();
		clicked = true;

		const resp = await fetch(PUBLIC_BACKEND_BASE_URL + `/pet/${data.pet.id}`, {
			method: 'DELETE',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${getToken}`
			}
		});

		if (resp.status == 200) {
			deletedPost();
		} else {
			const res = await resp.json();
			console.log(res);
			// formErrors = res.message;
			clicked = false;
		}
	}
</script>

<svelte:head>
	<script src="https://cdn.maptiler.com/maptiler-sdk-js/v1.2.0/maptiler-sdk.umd.js"></script>
	<link href="https://cdn.maptiler.com/maptiler-sdk-js/v1.2.0/maptiler-sdk.css" rel="stylesheet" />
</svelte:head>

<div class="hero min-h-screen bg-base-300">
    <div class="hero-content flex-col lg:flex-row mt-40">
        <img src={data.pet.pet_image_url } alt="Pet" class="w-3/5 rounded-lg shadow-2xl"/>
        <div class="flex justify-between">
			<div class="max-w w-full">
				<div class="grid grid-cols-3 gap-10">
					<div>
						<h1 class="text-2xl font mb-2">Pet Type</h1>
						<h2 class="text-1xl font mb-2">{data.pet.pet_type}</h2>
					</div>

					<div>
						<h1 class="text-2xl font mb-2">Pet Breed</h1>
						<h2 class="text-1xl font mb-2">{data.pet.pet_breed}</h2>
					</div>

					<div>
						<h1 class="text-2xl font mb-2">Pet Colour</h1>
						<h2 class="text-1xl font mb-2">{data.pet.pet_colour}</h2>
					</div>

					<div>
						<h1 class="text-2xl font mb-2">Pet Gender</h1>
						<h2 class="text-1xl font mb-2">{data.pet.pet_gender}</h2>
					</div>

					<div>
						<h1 class="text-2xl font mb-2">Pet Age</h1>
						<h2 class="text-1xl font mb-2">{data.pet.pet_age}</h2>
					</div>

					<div>
						<h1 class="text-2xl font mb-2">Location</h1>
						<h2 class="text-1xl font mb-2">{data.pet.pet_location}</h2>
					</div>

					<div>
						<h1 class="text-2xl font mb-5">Status</h1>
						<h2 class="text-1xl font mb-5">{data.pet.pet_status}</h2>
					</div>

					<div>
						<h2 class="text-2xl font mb-5">Pet Description</h2>
						<SvelteMarkdown source={data.pet.pet_description} />
					</div>

					<div>
						<h2 class="text-2xl font mb-5">Post Date</h2>
						<h2 class="text-1xl font mb-5">{data.pet.creation_date}</h2>
					</div>
				</div>

				<div id="map"></div>

				<!-- to make only user who create the post can see edit button -->
				<div class="flex justify-between">
					<div class="max-w w-full mt-4">
						{#if data.pet.userId == getUserId()}
							<button on:click={editPost} class="btn btn-outline rounded w-full">EDIT</button>
						{/if}
						<div class="flex flex-col mt-5">
							<!-- to make only user who create the post can see delete button -->
							{#if data.pet.userId == getUserId()}
								<button on:click={deleteUserPetPost} class="btn btn-outline rounded w-full"
									>DELETE</button
								>
							{/if}
						</div>

						<div class="flex flex-col justify-start mt-5">
							<h2 class="text-2xl font mb-3">Comments</h2>
							{#each data.pet.Comment as comment}
								<div class="chat chat-start">
									<div class="chat-header">
										{comment.user.name}
										<time class="text-xs opacity-50 pl-2">{comment.createdAt}</time>
									</div>
									<div class="chat-bubble">{comment.content}</div>
								</div>
							{/each}
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</div>


<style>
	body {
		margin: 0;
		padding: 0;
	}

	#map {
		position: relative;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 300px;
	}
</style>
