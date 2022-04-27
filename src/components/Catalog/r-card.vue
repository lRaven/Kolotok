<template>
	<div class="r-card-wrapper" @mouseleave="removeMaximizeCard">
		<div
			class="r-card animate__animated animate__fadeInUp wow"
			@mouseenter="maximizeCard"
		>
			<div class="r-card__main">
				<r-discount
					class="r-card__discount"
					v-if="discount_percent"
					:discount="discount_percent"
				></r-discount>
				<r-favorite class="r-card__favorite"></r-favorite>
				<router-link :to="`/catalog/product/${id}`">
					<img
						:src="img"
						alt="photo"
						class="r-card__img"
						v-if="img"
					/>
					<img
						src="img/catalog/catalog__photo-default.svg"
						alt="no photo"
						v-else
					/>
				</router-link>
			</div>
			<div class="r-card__footer">
				<div class="r-card__row">
					<p class="r-card__name">{{ name }}</p>
				</div>
				<div class="r-card__row">
					<p class="r-card__price">{{ price }}₽.</p>
					<p class="r-card__price-old" v-if="price_old">
						{{ price_old }}₽.
					</p>
				</div>
			</div>
		</div>
		<transition name="fade" mode="out-in">
			<r-card-maximize
				:id="id"
				:discount_percent="discount_percent"
				:img="img"
				:price="price"
				:price_old="price_old"
				:name="name"
				v-if="isMaximize"
				@removeMaximizeCard="removeMaximizeCard"
			></r-card-maximize>
		</transition>
	</div>
</template>

<script>
	import rDiscount from "@/components/Catalog/r-discount";
	import rFavorite from "@/components/Catalog/r-favorite";
	import rCardMaximize from "@/components/Catalog/r-card-maximize";

	export default {
		name: "r-card",
		props: {
			id: Number,
			discount_percent: Number,
			img: String,
			price: Number,
			price_old: Number,
			name: String,
		},
		components: {
			rDiscount,
			rFavorite,
			rCardMaximize,
		},
		data() {
			return {
				isFavorite: false,
				isMaximize: false,
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

			maximizeCard() {
				this.isMaximize = true;
			},
			removeMaximizeCard() {
				this.isMaximize = false;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.r-card-maximize {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		max-width: 24rem;
		width: 24rem;
	}
	.r-card {
		position: relative;
		color: var(--dark-blue);
		transition: all 0.2s ease;
		&-wrapper {
			position: relative;
			max-width: 22rem;
			width: 100%;
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
			box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.1);
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
