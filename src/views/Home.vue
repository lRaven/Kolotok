<template>
	<div class="home theme-container">
		<the-header />
		<main class="main">
			<the-banner />
			<the-catalog />
			<the-services />
		</main>
	</div>
</template>

<script>
	import TheHeader from "../components/TheHeader.vue";

	import TheBanner from "../components/TheBanner.vue";
	import TheCatalog from "../components/TheCatalog.vue";
	import TheServices from "../components/TheCatalog.vue";

	export default {
		name: "Home",
		components: {
			TheHeader,
			TheBanner,
			TheCatalog,
			TheServices,
		},
	};
</script>

<style lang="scss" scoped></style>
