<template>
	<div class="cart-card shadow">
		<img
			:src="product.img || '/img/catalog/catalog__photo-default.svg'"
			alt="photo"
			class="cart-card__image"
		/>

		<p class="cart-card__name">{{ product.name }}</p>

		<p class="cart-card__price">{{ product.price }} руб.</p>

		<r-counter
			:getValue="amount"
			:getMin="1"
			:getMax="5"
			v-model="counter"
			class="cart-card__col"
		></r-counter>

		<p class="cart-card__full-price">{{ full_price }} руб.</p>

		<div class="cart-card__article">
			<p class="cart-card__article-name">Артикул:</p>
			<p class="cart-card__article-value">{{ product.article }}</p>
		</div>

		<button type="button" class="cart-card__remove">
			<svg
				width="19"
				height="19"
				viewBox="0 0 19 19"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="cart-card__remove-icon"
			>
				<path
					d="M1 17.9997L17.9706 1.02916"
					stroke="#AEB3BF"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M1 1.00006L17.9706 17.9706"
					stroke="#AEB3BF"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	</div>
</template>

<script>
	import rCounter from "@/components/Catalog/r-counter";

	import { mapMutations } from "vuex";

	export default {
		name: "CartCard",
		props: { product: Object, amount: Number },
		components: { rCounter },
		watch: {
			counter() {
				this.SET_CART_ITEM_COUNT({
					name: this.product.name,
					count: this.counter,
				});
			},
		},
		data() {
			return { counter: this.amount };
		},
		computed: {
			full_price() {
				return this.product.price * this.counter;
			},
		},
		methods: {
			...mapMutations(["SET_CART_ITEM_COUNT"]),
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.cart-card {
		position: relative;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: 1fr max-content;
		align-items: center;
		grid-gap: 0.5rem 2.5rem;
		border-radius: 3rem;
		padding: 1rem;
		color: $dark;

		&__image {
			width: 100%;
			height: 100%;
			object-fit: cover;
			grid-row: 1/3;
		}

		&__name {
			font-size: 1.8rem;
			font-weight: 700;
			line-height: 1.3;
		}

		&__price {
			font-size: 1.8rem;
			font-weight: 600;
		}

		&__full-price {
			font-size: 2.4rem;
			font-weight: 700;
		}

		&__article {
			display: flex;
			align-items: center;
			gap: 1rem;
			grid-column: 2/6;

			&-name {
				font-size: 1.2rem;
				color: $middle-gray;
			}
			&-value {
				font-size: 1.2rem;
				color: $cool-gray;
			}
		}

		&__remove {
			position: absolute;
			right: 2rem;
			top: 2rem;
			background-color: transparent;
		}
	}
</style>