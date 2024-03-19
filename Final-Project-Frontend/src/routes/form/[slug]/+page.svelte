<script>
	import SvelteMarkdown from 'svelte-markdown';
	import { getUserId, getTokenFromLocalStorage } from '../../../utils/func.js';
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
	import { goto } from '$app/navigation';
	export let data;

	const id = getUserId();
	const getToken = getTokenFromLocalStorage();

	export async function destroyJob(evt) {
		evt.preventDefault();
		let spin = true;

		const jobData = {
			user: id
		};

		const resp = await fetch(
			PUBLIC_BACKEND_BASE_URL + `/pet/${data.pet.id}`,
			{
				method: 'DELETE',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					Authorization: getToken
				},
				body: JSON.stringify(jobData)
			}
		);

		console.log(resp.status);
		console.log(resp.headers.get('Content-Type'));

		if (resp.status === 204) {
			goto('/');
			//   warningAlert.set(false)
		} else {
			spin = false;
			alerts.setAlert('Darn, something went wrong, please try again', 'warning');
			setTimeout(() => {
				alerts.clearAlert();
			}, 3000);
		}
		goto('/');
	}
</script>

<p>{data.pet.id}</p>
<p>{data.pet.id}</p>
<p>{data.pet.id}</p>
<p>{data.pet.id}</p>
<p>{data.pet.id}</p>
<p>{data.pet.id}</p>
<p>{data.pet.id}</p>
<p>{data.pet.id}</p>
<p>{data.pet.id}</p>
<p>{data.pet.id}</p>
<p>{data.pet.id}</p>
<p>{data.pet.id}</p>
<p>{data.pet.id}</p>
<p>{data.pet.id}</p>
<p>{data.pet.id}</p>
<p>something</p>
<a href="/form/edit/{data.pet.id}">Edit</a>
