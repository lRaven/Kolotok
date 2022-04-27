<template>
	<ol class="r-pagination">
		<li class="r-pagination__item" v-for="page in pages" :key="page.id">
			{{ page.page }}
		</li>
	</ol>
</template>

<script>
	export default {
		name: "rPagination",
		props: {
			pages: Array,
		},
		computed: {
			current_page() {
				return this.pages[0];
			},
		},
	};
</script>

<style lang="scss" scoped>
	.r-pagination {
		&__item {
			list-style: none;
		}
	}
</style>
