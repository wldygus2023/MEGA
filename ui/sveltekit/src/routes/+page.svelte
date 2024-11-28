<script>
	let name = "Todo App";
	const API_URL = "http://43.201.21.240:5038/api/sample_mflix";
	let notes = [];
	let newNotes = "";

	function refreshList() {
		fetch(API_URL + "api/sample_mflix/GetNotes")
			.then(response => response.json())
			.then(data => {
				notes = data;
			});
	}

	import { onMount } from 'svelte';
	onMount(async () => {
		refreshList();
	});

	function addNotes() {
		const data = new FormData();
		data.append("newNotes", newNotes);

		fetch(API_URL + "api/sample_mflix/AddNotes", {
			method: "POST",
			body: data
		})
			.then(response => response.json())
			.then(data => {
				alert(data.message || "Note added successfully!");
				refreshList();
			});
	}

	function deleteNotes(id) {
		fetch(API_URL + "api/sample_mflix/DeleteNotes?id=" + id, {
			method: "DELETE",
		})
			.then(response => response.json())
			.then(data => {
				alert(data.message || "Note deleted successfully!");
				refreshList();
			});
	}
</script>

<main>
	<h2>{name}</h2>

	<input bind:value={newNotes} placeholder="Enter a new note"/>
	<button on:click={addNotes}>Add Notes</button>
	
	{#each notes as note}
		<p>
			<b>
				* {note.description}
			</b>
			<button on:click={() => deleteNotes(note.id)}>Delete Notes</button>
		</p>		
	{/each}
</main>
