<template>
	<div class="r-card-maximize shadow">
		<div class="r-card-maximize__main">
			<r-discount
				class="r-card-maximize__discount"
				v-show="card.discount_percent"
				:discount="card.discount_percent"
			></r-discount>
			<r-favorite class="r-card-maximize__favorite"></r-favorite>
			<router-link
				:to="`/catalog/${category.slug}/${subcategory.slug}/${card.id}`"
				v-once
			>
				<img
					:src="
						card.img
							? card.img
							: '/img/catalog/catalog__photo-default.svg'
					"
					alt="photo"
					class="r-card-maximize__img"
				/>
			</router-link>
		</div>
		<div class="r-card-maximize__footer">
			<div class="r-card-maximize__row" v-once>
				<p class="r-card-maximize__name">{{ card.name }}</p>
			</div>
			<div class="r-card-maximize__row" v-once>
				<p class="r-card-maximize__price">{{ card.price }}₽.</p>
				<p class="r-card-maximize__price-old" v-show="card.price_old">
					{{ card.price_old }}₽.
				</p>
			</div>
			<div class="r-card-maximize__row r-card-maximize__control">
				<r-counter :get-value="1" :get-min="1" :get-max="5"></r-counter>
				<r-button color="yellow" text="В корзину"></r-button>
			</div>
		</div>
	</div>
</template>

<script>
	import rDiscount from "@/components/Catalog/r-discount";
	import rFavorite from "@/components/Catalog/r-favorite";
	import rCounter from "@/components/Catalog/r-counter";

	export default {
		name: "r-card-maximize",
		props: {
			card: Object,
			category: Object,
			subcategory: Object,
		},
		components: {
			rDiscount,
			rFavorite,
			rCounter,
		},
		data: () => ({ isFavorite: false }),
		methods: {
			addFavorite() {
				this.isFavorite = true;
			},
			removeFavorite() {
				this.isFavorite = false;
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.r-card-maximize {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		color: $dark-blue;
		max-width: 23.4rem;
		width: 23.4rem;
		z-index: 2;
		background-color: $white;
		border-radius: 3rem;
		padding: 0 1rem;
		@media (max-width: 1160px) {
			max-width: 100%;
			width: 100%;
			padding: 0;
		}
		@media (max-width: 767px) {
			border-radius: 2rem;
		}

		&__main {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 1.8rem;
			border-radius: 3rem;
			height: 22rem;
			margin-bottom: 1rem;
			@media (max-width: 540px) and (min-width: 376px) {
				height: 14rem;
			}
		}
		&__discount {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			left: 1.5rem;
			top: 1.5rem;
			width: 5rem;
			height: 5rem;
			border-radius: 50%;
			background-color: $yellow;
			font-size: 1.6rem;
			font-weight: 600;
			animation-delay: 0.2s;
		}
		&__favorite {
			cursor: pointer;
			align-self: flex-end;
			justify-content: flex-start;
			position: absolute;
			right: 1.5rem;
			top: 1.5rem;
			animation-delay: 0.2s;

			&-icon {
				pointer-events: all;
			}
		}
		&__img {
			max-width: 100%;
			max-height: 20rem;
			object-fit: contain;
			@media (max-width: 540px) and (min-width: 376px) {
				max-height: 12rem;
			}
		}

		&__footer {
			@media (max-width: 1160px) {
				padding: 0 1rem;
			}
		}
		&__row {
			display: flex;
			align-items: center;
			gap: 1rem;
			.r-button {
				padding: 1.2rem 1.5rem;
				font-size: 1.2rem;
			}
			+ .r-card-maximize__row {
				margin-top: 0.5rem;
			}
		}
		&__price {
			font-weight: 600;
			&-old {
				text-decoration: line-through;
				color: $gray;
				font-size: 1.2rem;
			}
		}
		&__name {
			font-weight: 300;
			line-height: 1.3;
		}

		&__control {
			padding-bottom: 1.3rem;
			@media (max-width: 540px) {
				flex-direction: column;
				align-items: flex-start;
			}
			.r-button {
				@media (max-width: 540px) {
					width: 100%;
					justify-content: center;
				}
			}
		}
	}
</style>
