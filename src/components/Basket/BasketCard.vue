<template>
	<div class="basket-card">
		<img src="" alt="" v-if="img" />
		<img src="img/catalog/catalog__photo-default.svg" alt="" v-else />
	</div>
</template>

<script>
	export default {
		name: "BasketCard",
		props: {
			img: String,
		},
	};
</script>

<style lang="scss" scoped></style>
