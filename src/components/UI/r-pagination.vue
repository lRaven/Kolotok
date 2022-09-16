<template>
	<div class="r-pagination">
		<button
			type="button"
			class="r-pagination__btn r-pagination__btn-prev"
			v-show="prev_page"
			@click="changePage(current_page - 1)"
		>
			<img
				src="/img/icon/catalog/arrow.svg"
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
						current: current_page === pagination_item,
					}"
				>
					{{ pagination_item }}
				</button>
			</li>
		</ol>

		<ol
			class="r-pagination__items"
			v-else-if="totalPages > 5 && current_page < totalPages - 3"
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
						current: current_page === pagination_item,
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
						current: current_page === totalPages,
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
						current: current_page === pagination_item,
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
			v-show="next_page"
			@click="changePage(current_page + 1)"
		>
			<img
				src="/img/icon/catalog/arrow.svg"
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
			start_page: {
				value: Number,
				default: 1,
			},
			count: {
				value: Number,
				default: 70,
			},
			items_on_page: {
				value: Number,
				default: 10,
			},

			next_page: {
				value: String,
				required: true,
			},
			prev_page: {
				value: String,
				required: true,
			},
		},
		watch: {
			start_page() {
				this.current_page = this.start_page;
			},
		},
		computed: {
			...mapState(["documentWidth"]),

			totalPages() {
				return Math.ceil(this.count / this.items_on_page);
			},

			//* range before separator
			range() {
				let range = [];
				for (
					let index = this.current_page;
					index < this.current_page + 3;
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
			return { current_page: this.start_page };
		},
		methods: {
			changePage(page_number) {
				this.current_page = page_number;
				this.$emit("page_changed", page_number);
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
