<script lang="ts">
    import { Gaming } from "$lib";
	import Button from "./button.svelte";
</script>
<div class="flex-1 flex items-center justify-center">
    <div class="flex-1 flex flex-col gap-5">
        <p class="text-3xl font-semibold">Unlock Infinite Possibilities in Gameverse: Create, Conquer, Connect!</p>
        <Button title="Join now!" href="/signup"/>
    </div>
    <div class="flex-1">
        <img src={Gaming} alt="gaming">
    </div>
</div>