<template>
	<div class="theme-container">
		<the-header />
		<main class="main">
			<router-view />
		</main>
		<the-footer />
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader";

	import TheFooter from "@/components/TheFooter";

	export default {
		name: "r-layout",
		components: {
			TheHeader,
			TheFooter,
		},
	};
</script>
