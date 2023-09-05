<script lang="ts">
	export let title: string;
	export let href: string;
	let x = 5
</script>

<a {href}>
    <button class="btn border-none w-40 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white normal-case text-lg">{title}</button>
</a>
