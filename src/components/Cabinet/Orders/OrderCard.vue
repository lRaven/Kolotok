<template>
	<div class="order-card">
		<div
			class="order-card__header"
			:class="{ active: isCardOpen }"
			@click="isCardOpen ? (isCardOpen = false) : (isCardOpen = true)"
		>
			<div class="order-card__header-col">
				<h5 class="order-card__order-number">Заказ {{ order.id }}</h5>
				<h5 class="order-card__order-date">от {{ orderDate }}</h5>

				<order-status :status="2"></order-status>
			</div>

			<p class="order-card__products-amount">
				{{ productsAmount }}
				{{
					declensionWord(productsAmount, [
						"товар",
						"товара",
						"товаров",
					])
				}}
			</p>

			<p class="order-card__sum">{{ order.total_price }} руб.</p>

			<button class="order-card__toggle" :class="{ open: isCardOpen }">
				<span class="order-card__toggle-line"></span>
				<span class="order-card__toggle-line"></span>
			</button>
		</div>

		<div
			class="order-card__list"
			:style="`height: ${bodyHeight}px`"
			:class="{ open: isCardOpen }"
			ref="body"
		>
			<order-product
				v-for="(product, index) in order.products"
				:key="index + order.id"
				:product="product"
			></order-product>
		</div>
	</div>
</template>

<script>
	import OrderStatus from "@/components/Cabinet/Orders/OrderStatus.vue";
	import OrderProduct from "@/components/Cabinet/Orders/OrderProduct.vue";

	import { declensionWord } from "@/js/declensionWord";
	import { dateFormat } from "@/js/dateFormat";
	import { mapState } from "vuex";

	export default {
		name: "OrderCard",
		components: {
			OrderStatus,
			OrderProduct,
		},
		props: {
			order: {
				value: Object,
				required: true,
			},
		},
		watch: {
			isCardOpen() {
				this.calculateBodyHeight();
			},
			documentWidth() {
				if (this.isCardOpen) {
					this.calculateBodyHeight(false);
				}
			},
		},
		data: () => ({
			isCardOpen: false,
			bodyHeight: 0,
		}),
		computed: {
			...mapState(["documentWidth"]),

			productsAmount() {
				return this.order.products.reduce((acc, cur) => {
					acc += cur.amount;
					return acc;
				}, 0);
			},

			orderDate() {
				//TODO: get order date
				return dateFormat(new Date());
			},
		},
		methods: {
			declensionWord,
			dateFormat,

			calculateBodyHeight(includePaddings = true) {
				if (this.isCardOpen) {
					this.bodyHeight = this.$refs.body.scrollHeight;
					if (includePaddings) {
						this.bodyHeight += 40;
					}
				} else {
					this.bodyHeight = 0;
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.order-card {
		border: 0.1rem solid rgba($dark, 0.2);
		padding: 0 1rem;
		border-radius: 0.5rem;
		+ .order-card {
			margin-top: 2rem;
		}

		&__header {
			cursor: pointer;
			user-select: none;
			padding: 3rem 1rem;
			display: grid;
			grid-template-columns: 3fr repeat(2, 1fr) 3.5rem;
			grid-gap: 2rem;
			align-items: center;
			border-bottom: 0.1rem solid transparent;
			transition: all 0.2s ease;
			&.active {
				border-color: rgba($dark, 0.2);
			}
			&-col {
				display: flex;
				align-items: center;
				gap: 1rem;
			}
		}

		&__sum {
			font-size: 2rem;
			font-weight: 700;
			text-align: center;
		}

		&__order {
			&-number {
				font-weight: 700;
			}
			&-date {
			}
		}

		&__toggle {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 3.5rem;
			height: 3.5rem;
			border: 0.1rem solid $blue;
			border-radius: 50%;
			background-color: transparent;
			&.open {
				.order-card__toggle-line {
					&:first-child {
						transform: translateX(0.15rem) rotate(-45deg);
					}
					&:last-child {
						transform: translateX(-0.15rem) rotate(45deg);
					}
				}
			}
			&-line {
				height: 0.2rem;
				width: 30%;
				background-color: $blue;
				transition: all 0.2s ease;
				&:first-child {
					transform: translateX(0.15rem) rotate(45deg);
				}
				&:last-child {
					transform: translateX(-0.15rem) rotate(-45deg);
				}
			}
		}

		&__list {
			padding: 0 1rem;
			transition: all 0.2s ease;
			height: 0;
			overflow: hidden;
			&.open {
				padding: 2rem 1rem;
			}
		}
	}
</style>
