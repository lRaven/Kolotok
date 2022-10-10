<template>
	<section class="page-orders">
		<h2 class="page-orders__title" v-once>История заказов</h2>

		<r-input
			type="search"
			placeholder="Поиск по заказам…"
			class="page-orders__search"
			v-model="searchParam"
		></r-input>

		<div class="page-orders__list">
			<order-card
				v-for="order in orders"
				:key="order.id"
				:order="order"
			></order-card>
		</div>
	</section>
</template>

<script>
	import OrderCard from "@/components/Cabinet/Orders/OrderCard.vue";

	import { mapState } from "vuex";
	import { getOrders } from "@/api/user";

	export default {
		name: "PageOrders",
		components: { OrderCard },
		watch: {
			user: {
				async handler() {
					if (this.user.id) {
						this.getMyOrders();
					}
				},
				deep: true,
			},
		},
		data: () => ({
			searchParam: null,
			orders: [],
		}),
		computed: {
			...mapState({ user: (state) => state.Cabinet.user }),
		},
		methods: {
			async getMyOrders() {
				try {
					const response = await getOrders();

					if (response.status === 200) {
						this.orders = response.data.filter(
							(el) => el.user === this.user.id
						);
					}
				} catch (err) {
					throw new Error(err);
				}
			},
		},
		created() {
			this.$emit("changeTab", "orders");
		},
		mounted() {
			this.getMyOrders();
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-orders {
		&__title {
			margin-bottom: 4rem;
			color: $dark-blue;
		}
		&__search {
			margin-bottom: 4rem;
			max-width: 69rem;
		}
	}
</style>

<style lang="scss">
	@import "@/assets/scss/variables";

	.page-orders {
		.r-input {
			&__input {
				border-radius: 5rem;
				font-size: 1.4rem;
				padding: 1.5rem 2rem;
				&::placeholder {
					color: $dark-blue;
					opacity: 0.5;
				}
			}
		}
	}
</style>
