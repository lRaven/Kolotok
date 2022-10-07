<template>
	<p class="order-status" :style="`background-color: ${statusColor}`">
		{{ statusText }}
	</p>
</template>

<script>
	export default {
		name: "OrderStatus",
		props: {
			//TODO: unify the order status format
			status: Number,
		},
		computed: {
			statusColor() {
				if (this.status === 1) return "#007BFF";
				if (this.status === 2) return "#EFBA1C";
				else return "#BEBEBE";
			},
			statusText() {
				if (this.status === 1) return "Выдан";
				if (this.status === 2) return "Готов к выдаче";
				else return "Отменён";
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.order-status {
		font-weight: 600;
		color: $white;
		padding: 0.6rem 1rem;
		border-radius: 1rem;
		width: max-content;
		line-height: normal;
	}
</style>
