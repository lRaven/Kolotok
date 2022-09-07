<template>
	<div
		class="r-service shadow"
		:style="`background: url(${img}) center / cover no-repeat`"
	>
		<div class="r-service__content">
			<h3 data-aos="fade-up" class="r-service__title">
				{{ title }}
			</h3>
			<p data-aos="fade-up" class="r-service__description">
				{{ description }}
			</p>
			<r-button
				data-aos="fade-up"
				:text="button_text"
				color="yellow"
			></r-button>
		</div>
	</div>
</template>

<script>
	import rButton from "@/components/r-button";

	export default {
		name: "rService",
		props: {
			img: String,
			title: String,
			description: String,
			button_text: String,
		},
		components: {
			rButton,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.r-service {
		display: flex;
		align-items: flex-end;
		padding: 16rem 10rem 0 10rem;
		width: 100%;
		border-radius: 3rem;
		overflow: hidden;
		&__content {
			background-color: rgba($white, 0.8);
			backdrop-filter: blur(5rem);
			padding: 6.5rem 14rem 7.5rem 6rem;
			border-radius: 3rem 3rem 0 0;
			color: $dark-blue;
			max-width: 45rem;
		}
		&__title {
			margin-bottom: 1.5rem;
		}
		&__description {
			margin-bottom: 3.5rem;
		}
	}
</style>
