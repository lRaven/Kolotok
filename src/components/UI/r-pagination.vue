<template>
	<div class="r-pagination">
		<button
			type="button"
			class="r-pagination__btn r-pagination__btn-prev"
			v-show="prevPage"
			@click="changePage(currentPage - 1)"
		>
			<img
				src="/img/icons/catalog/arrow.svg"
				alt="arrow"
				class="r-pagination__btn-arrow"
			/>
		</button>

		<ol class="r-pagination__items" v-if="totalPages <= 5">
			<li
				class="r-pagination__item"
				v-for="pagination_item in totalPages"
				:key="pagination_item"
			>
				<button
					@click="changePage(pagination_item)"
					class="r-pagination__item-btn"
					:class="{
						current: currentPage === pagination_item,
					}"
				>
					{{ pagination_item }}
				</button>
			</li>
		</ol>

		<ol
			class="r-pagination__items"
			v-else-if="totalPages > 5 && currentPage < totalPages - 3"
		>
			<li
				class="r-pagination__item"
				v-for="pagination_item in range"
				:key="pagination_item"
			>
				<button
					@click="changePage(pagination_item)"
					class="r-pagination__item-btn"
					:class="{
						current: currentPage === pagination_item,
						wide: pagination_item > 99,
					}"
				>
					{{ pagination_item }}
				</button>
			</li>

			<div class="r-pagination__separator">...</div>

			<li class="r-pagination__item">
				<button
					@click="changePage(totalPages)"
					class="r-pagination__item-btn"
					:class="{
						current: currentPage === totalPages,
						wide: totalPages > 99,
					}"
				>
					{{ totalPages }}
				</button>
			</li>
		</ol>

		<ol class="r-pagination__items" v-else>
			<li
				class="r-pagination__item"
				v-for="pagination_item in remaining_range"
				:key="pagination_item"
			>
				<button
					@click="changePage(pagination_item)"
					class="r-pagination__item-btn"
					:class="{
						current: currentPage === pagination_item,
						wide: pagination_item > 99,
					}"
				>
					{{ pagination_item }}
				</button>
			</li>
		</ol>

		<button
			type="button"
			class="r-pagination__btn r-pagination__btn-next"
			v-show="nextPage"
			@click="changePage(currentPage + 1)"
		>
			<img
				src="/img/icons/catalog/arrow.svg"
				alt=""
				class="r-pagination__btn-arrow"
			/>
		</button>
	</div>
</template>

<script>
	import { mapState } from "vuex";

	export default {
		name: "rPagination",
		props: {
			startPage: {
				value: Number,
				default: 1,
			},
			count: {
				value: Number,
				default: 70,
			},
			itemsOnPage: {
				value: Number,
				default: 10,
			},

			nextPage: {
				value: String,
				required: true,
			},
			prevPage: {
				value: String,
				required: true,
			},
		},
		watch: {
			startPage() {
				this.currentPage = this.startPage;
			},
		},
		computed: {
			...mapState(["documentWidth"]),

			totalPages() {
				return Math.ceil(this.count / this.itemsOnPage);
			},

			//* range before separator
			range() {
				let range = [];
				for (
					let index = this.currentPage;
					index < this.currentPage + 3;
					index++
				) {
					range.push(index);
				}
				return range;
			},

			//* remaining range
			remaining_range() {
				let range = [];
				for (
					let index = this.totalPages - 3;
					index <= this.totalPages;
					index++
				) {
					range.push(index);
				}
				return range;
			},
		},
		data() {
			return { currentPage: this.startPage };
		},
		methods: {
			changePage(pageNumber) {
				this.currentPage = pageNumber;
				this.$emit("page-changed", pageNumber);
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.r-pagination {
		user-select: none;
		display: flex;
		align-items: center;
		gap: 1rem;
		// @media (max-width: 425px) {
		// 	gap: 1.5rem;
		// }

		&__btn {
			background-color: #f4f4f4;
			height: 4rem;
			width: 4rem;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.8rem;
			transition: all 0.2s ease;
			@media (max-width: 425px) {
				height: 3rem;
				width: 3rem;
			}
			&.disabled {
				pointer-events: none;
				cursor: default;
				opacity: 0.5;
			}
			&-prev {
				.r-pagination__btn-arrow {
					transform: rotate(90deg);
				}
			}
			&-next {
				.r-pagination__btn-arrow {
					transform: rotate(-90deg);
				}
			}
		}

		&__items {
			display: flex;
			align-items: center;
			gap: 0.9rem;
			@media (max-width: 425px) {
				justify-content: center;
				flex-wrap: wrap;
			}
		}
		&__item {
			list-style: none;
			&-btn {
				cursor: pointer;
				background-color: transparent;
				font-size: 1.6rem;
				color: rgba(#000, 0.5);
				width: 4rem;
				height: 4rem;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: all 0.2s ease;
				border: 0.2rem solid #d4d4d4;
				@media (max-width: 425px) {
					height: 3rem;
					width: 3rem;
					font-size: 1.4rem;
				}
				&.current {
					cursor: default;
					font-weight: 700;
					color: rgba(#000, 0.7);
					border-color: $yellow;
				}
				&.wide {
					width: max-content;
					border-radius: 2.4rem;
					padding: 0 1rem;
				}
			}
		}
		&__separator {
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: default;
			font-size: 1.6rem;
			width: 4rem;
			height: 4rem;
		}
	}
</style>
