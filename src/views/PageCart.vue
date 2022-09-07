<template>
	<div class="page-cart theme-container">
		<the-header />
		<main class="main">
			<section class="cart center">
				<r-breadcrumbs :links="links"></r-breadcrumbs>

				<div class="cart__col">
					<h2 class="cart__title">Корзина</h2>
					<div class="cart__control">
						<r-checkbox
							description="Выбрать всё"
							v-model="isAllSelected"
							@click="
								isAllSelected
									? UNSELECT_ALL_CART_ITEMS()
									: SELECT_ALL_CART_ITEMS()
							"
						></r-checkbox>

						<div class="cart__delete">
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="cart__delete-icon"
							>
								<path
									d="M11 5L5 11"
									stroke="#efba1c"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M11 11L5 5"
									stroke="#efba1c"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11.2798 1H4.71946C2.4333 1 1 2.6187 1 4.90941V11.0906C1 13.3813 2.42649 15 4.71946 15H11.279C13.5728 15 15 13.3813 15 11.0906V4.90941C15 2.6187 13.5728 1 11.2798 1Z"
									stroke="#efba1c"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>

							<p class="cart__delete-description">
								Удалить выбранное
							</p>
						</div>

						<div class="cart__clear" @click="SET_CART_LIST([])">
							<svg
								width="17"
								height="19"
								viewBox="0 0 17 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="cart__clear-icon"
							>
								<path
									d="M15.2147 6.80322C15.2147 6.80322 14.7102 13.061 14.4175 15.6969C14.2781 16.9559 13.5004 17.6937 12.2266 17.7169C9.80247 17.7606 7.37556 17.7633 4.95237 17.7122C3.72683 17.6872 2.96215 16.9401 2.82557 15.7034C2.53103 13.0442 2.0293 6.80322 2.0293 6.80322"
									stroke="#007bfc"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M16.5005 3.80319H0.744141"
									stroke="#007bfc"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M13.4647 3.80329C12.7353 3.80329 12.1072 3.28762 11.9641 2.57311L11.7383 1.44328C11.599 0.922029 11.127 0.561523 10.589 0.561523H6.65596C6.11799 0.561523 5.64598 0.922029 5.50661 1.44328L5.28083 2.57311C5.13774 3.28762 4.50965 3.80329 3.78027 3.80329"
									stroke="#007bfc"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>

							<p class="cart__clear-description">
								Очистить корзину
							</p>
						</div>
					</div>
					<div class="cart__list">
						<div class="cart__captions">
							<p class="cart__caption">Наименование</p>
							<p class="cart__caption">Цена за шт.</p>
							<p class="cart__caption">Кол-во</p>
							<p class="cart__caption">Стоимость</p>
						</div>
						<cart-card
							v-for="product in cart_list"
							:key="product.id"
							:product="product"
						></cart-card>
					</div>
				</div>

				<div class="cart__col cart__buy">
					<cart-calculation
						:products="cart_list"
						:discount="10"
					></cart-calculation>
				</div>
			</section>
		</main>
		<the-footer />
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader";

	import rBreadcrumbs from "@/components/r-breadcrumbs";
	import rCheckbox from "@/components/r-checkbox";
	import CartCard from "@/components/Cart/CartCard";
	import CartCalculation from "@/components/Cart/CartCalculation";

	import TheFooter from "@/components/TheFooter";

	import { mapState, mapMutations } from "vuex";

	export default {
		name: "PageCart",
		components: {
			TheHeader,

			rBreadcrumbs,
			rCheckbox,
			CartCard,
			CartCalculation,

			TheFooter,
		},
		data: () => ({
			links: [
				{
					id: 1,
					description: "Главная",
					route: "/",
					current: false,
				},
				{
					id: 2,
					description: "Корзина",
					current: true,
				},
			],

			isAllSelected: false,
		}),
		computed: {
			...mapState({
				cart_list: (state) => state.Cart.cart_list,
			}),
		},
		methods: {
			...mapMutations([
				"SET_CART_LIST",
				"SELECT_ALL_CART_ITEMS",
				"UNSELECT_ALL_CART_ITEMS",
			]),
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.cart {
		display: grid;
		grid-template-columns: 1fr 39rem;
		grid-gap: 3rem 5rem;
		.r-breadcrumbs {
			grid-column: 1/3;
		}

		&__col {
		}

		&__title {
			color: $dark-blue;
			margin-bottom: 3rem;
		}

		&__control {
			display: grid;
			grid-template-columns: max-content 1fr max-content;
			grid-gap: 4rem;
			align-items: center;
			margin-bottom: 4rem;
			padding: 0 2rem;
			&-icon {
			}
			&-description {
				font-size: 1.4rem;
			}
		}
		&__delete {
			user-select: none;
			cursor: pointer;
			display: flex;
			align-items: center;
			gap: 1.7rem;
			width: max-content;
			&-icon {
			}
			&-description {
				font-size: 1.4rem;
				color: $yellow;
			}
		}

		&__clear {
			cursor: pointer;
			user-select: none;
			display: flex;
			align-items: center;
			gap: 1.7rem;
			&-description {
				font-size: 1.4rem;
				color: $blue;
			}
		}

		&__captions {
			display: grid;
			grid-template-columns: 2rem 10rem 1fr repeat(3, 14rem) 2rem;
			margin-bottom: 2rem;
			padding: 0 2rem;
			grid-gap: 2.5rem;

			.cart__caption {
				text-align: center;
				&:first-child {
					grid-column: 1/3;
				}
				&:nth-child(2) {
					grid-column: 4/5;
				}
			}
		}
		&__caption {
			font-size: 1.8rem;
			color: $middle-gray;
			font-weight: 500;
		}

		&__list {
			display: flex;
			flex-direction: column;
		}

		&__buy {
		}
	}
</style>
