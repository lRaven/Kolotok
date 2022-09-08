<template>
	<ol class="r-pagination">
		<li class="r-pagination__btn-wrapper" v-if="currentPage > 1">
			<button
				class="r-pagination__btn"
				@click="selectPage(currentPage - 1)"
			>
				<img
					src="img/icon/catalog/arrow.svg"
					alt=""
					class="r-pagination__btn-arrow-prev"
				/>
			</button>
		</li>
		<li
			class="r-pagination__item"
			:class="page.class"
			v-for="page in viewedPages"
			:key="page.id"
			@click="selectPage(page.page)"
		>
			{{ page.page }}
		</li>
		<li class="r-pagination__btn-wrapper" v-if="viewedPages.length > 4">
			<button
				class="r-pagination__btn"
				@click="selectPage(currentPage + 1)"
			>
				<img
					src="img/icon/catalog/arrow.svg"
					alt=""
					class="r-pagination__btn-arrow-next"
				/>
			</button>
		</li>
	</ol>
</template>

<script>
	export default {
		name: "rPagination",
		props: {
			pages: Array,
			currentPage: Number,
		},
		watch: {
			currentPage() {
				this.selectPage(this.currentPage);
			},
		},
		computed: {
			viewedPages() {
				let pages = [];

				this.pages.forEach((page) => {
					if (page.page === this.currentPage) {
						page.class = "current";
					} else {
						page.class = null;
					}
					if (
						page.page >= this.currentPage &&
						page.page < this.currentPage + 5
					) {
						pages.push(page);
					}
				});

				return pages;
			},
		},
		methods: {
			selectPage(number) {
				console.log(number);

				this.$emit("selectPage", number);
			},
		},
		mounted() {
			this.selectPage(this.currentPage);
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.r-pagination {
		display: flex;
		gap: 2rem;
		align-items: center;
		&__item {
			cursor: pointer;
			list-style: none;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 1.6rem;
			color: #7e7e7e;
			font-weight: 500;
			width: 4rem;
			height: 4rem;
			border: 0.1rem solid #d4d4d4;
			outline: 0.1rem solid transparent;
			border-radius: 50%;
			transition: all 0.2s ease;
			&:hover {
				outline-color: $yellow;
				border-color: $yellow;
				color: $dark-blue;
			}
			&.current {
				outline-color: $yellow;
				border-color: $yellow;
				color: $dark-blue;
			}
		}
		&__btn {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
			background-color: #f4f4f4;
			&-arrow-next {
				transform: rotate(-90deg);
			}
			&-arrow-prev {
				transform: rotate(90deg);
			}
			&-wrapper {
				cursor: pointer;
				list-style: none;
			}
		}
	}
</style>
