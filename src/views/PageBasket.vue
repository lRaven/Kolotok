<template>
	<div class="page-product theme-container">
		<the-header />
		<main class="main"></main>
		<the-footer />
	</div>
</template>

<script>
	import TheHeader from "../components/TheHeader";

	import TheFooter from "../components/TheFooter";

	import { mapGetters } from "vuex";

	export default {
		name: "PageShoppingCart",
		components: {
			TheHeader,
			TheFooter,
		},
		computed: {
			...mapGetters({ shopping_list: "SHOPPING_LIST" }),
		},
	};
</script>

<style lang="scss" scoped>
	.page-shopping-cart {
	}
</style>
