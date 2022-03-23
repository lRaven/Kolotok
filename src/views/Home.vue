<template>
	<div class="home theme-container">
		<the-header />
		<main class="main"></main>
	</div>
</template>

<script>
	import TheHeader from "../components/TheHeader.vue";

	export default {
		name: "Home",
		components: { TheHeader },
	};
</script>

<style lang="scss" scoped>
	.main {
		height: 300vh;
	}
</style>
