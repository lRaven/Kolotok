<template>
	<div class="order-card">
		<div class="order-card__header" :class="{ active: isCardOpen }">
			<div class="order-card__header-col">
				<h5 class="order-card__order-number">Заказ {{ order.id }}</h5>
				<h5 class="order-card__order-date">
					от {{ order.date || "1.1.1970" }}
				</h5>

				<order-status :status="2"></order-status>
			</div>

			<p class="order-card__products-amount">
				{{ productsAmount }} товаров
			</p>

			<p class="order-card__sum">{{ order.total_price }} руб.</p>
		</div>

		<div
			class="order-card__list"
			:style="`height: ${bodyHeight}px`"
			:class="{ open: isCardOpen }"
			ref="body"
		></div>
	</div>
</template>

<script>
	import OrderStatus from "@/components/Cabinet/Orders/OrderStatus.vue";

	export default {
		name: "OrderCard",
		components: {
			OrderStatus,
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
		},
		data: () => ({
			isCardOpen: false,
			bodyHeight: 0,
		}),
		computed: {
			productsAmount() {
				return this.order.products.reduce((acc, cur) => {
					acc += cur.amount;
					return acc;
				}, 0);
			},
		},
		methods: {
			calculateBodyHeight() {
				if (this.isCardOpen) {
					this.bodyHeight = this.$refs.body.scrollHeight + 40;
					setTimeout(() => {
						this.$refs.body.style = "height: auto";
					}, 200);
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
		+ .order-card {
			margin-top: 2rem;
		}

		&__header {
			padding: 3rem 1rem;
			display: grid;
			grid-template-columns: 3fr repeat(2, 1fr) 2.5rem;
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

		&__order {
			&-number {
				font-weight: 700;
			}
			&-date {
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
