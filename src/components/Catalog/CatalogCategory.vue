<template>
	<div data-aos="fade-up" class="catalog-category shadow">
		<div class="catalog-category__top">
			<img :src="category.icon" alt="" />
		</div>
		<div class="catalog-category__bottom">
			<r-link :way="way" :text="category.name"></r-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "catalogCategory",
		props: {
			// img: String,
			// text: String,
			category: {
				value: Object,
				required: true,
			},
			way: Object,
		},
	};
</script>

<style lang="scss" scoped>
	.catalog-category {
		border-radius: 3rem;
		overflow: hidden;
		@media (max-width: 767px) {
			display: flex;
			border-radius: 1rem;
			gap: 2rem;
		}

		&__top {
			height: 30rem;
			@media (max-width: 767px) {
				height: 10rem;
			}
			@media (max-width: 425px) {
				height: 6rem;
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
		&__bottom {
			border-top: 0.1rem solid #c4c4c4;
			display: flex;
			align-items: center;
			padding: 3rem;
			@media (max-width: 767px) {
				padding: 2rem 2.5rem;
				border-top: none;
			}
			@media (max-width: 425px) {
				padding: 1rem;
			}
		}
	}
</style>

<style lang="scss">
	.catalog-category {
		.r-link {
			&__arrow {
				@media (max-width: 767px) {
					display: none;
				}
			}
			&__text {
				font-size: 2rem !important;
				@media (max-width: 767px) {
					font-weight: 600;
				}
				@media (max-width: 540px) {
					font-size: 1.6rem !important;
				}
			}
		}
	}
</style>
