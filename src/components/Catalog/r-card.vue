<template>
	<div
		class="r-card animate__animated animate__fadeInUp wow"
		@click="moveToProductPage"
	>
		<div class="r-card__main shadow">
			<r-discount
				class="r-card__discount"
				v-if="discount_percent"
				:discount="discount_percent"
			></r-discount>
			<r-favorite class="r-card__favorite"></r-favorite>
			<img :src="img" alt="photo" class="r-card__img" v-if="img" />
			<img
				src="img/catalog/catalog__photo-default.svg"
				alt="no photo"
				v-else
			/>
		</div>
		<div class="r-card__footer">
			<div class="r-card__row">
				<p class="r-card__price">{{ price }}₽.</p>
				<p class="r-card__price-old" v-if="price_old">
					{{ price_old }}₽.
				</p>
			</div>
			<div class="r-card__row">
				<p class="r-card__name">{{ name }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import rDiscount from "./r-discount";
	import rFavorite from "./r-favorite";

	export default {
		name: "rCard",
		props: {
			id: Number,
			discount_percent: Number,
			img: String,
			price: String,
			price_old: String,
			name: String,
		},
		components: {
			rDiscount,
			rFavorite,
		},
		data() {
			return {
				isFavorite: false,
			};
		},
		computed: {},
		methods: {
			addFavorite() {
				this.isFavorite = true;
			},
			removeFavorite() {
				this.isFavorite = false;
			},

			moveToProductPage(e) {
				if (!e.target.classList.contains("r-favorite__path")) {
					this.$router.push({
						name: "product",
						query: { product: this.id },
					});
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.r-card {
		cursor: pointer;
		color: var(--dark-blue);
		max-width: 21rem;
		&__main {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 1.8rem;
			border-radius: 3rem;
			width: 21rem;
			height: 28rem;
			margin-bottom: 1rem;
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
			background-color: var(--yellow);
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
		}

		&__footer {
		}
		&__row {
			display: flex;
			align-items: center;
			gap: 1.3rem;
			+ .r-card__row {
				margin-top: 0.5rem;
			}
		}
		&__price {
			font-weight: 600;
			&-old {
				text-decoration: line-through;
				color: var(--gray);
				font-size: 1.2rem;
			}
		}
		&__name {
			font-weight: 300;
			line-height: 1.3;
		}
	}
</style>
