<template>
	<div
		class="r-card-wrapper"
		@mouseenter="isMaximize = true"
		@mouseleave="isMaximize = false"
	>
		<div class="r-card">
			<div class="r-card__main">
				<r-discount
					class="r-card__discount"
					v-show="card.discount_percent"
					:discount="card.discount_percent"
				></r-discount>
				<r-favorite
					@addFavorite="addFavorite"
					@removeFavorite="removeFavorite"
					class="r-card__favorite"
					:isFavorite="isFavorite"
					v-model="isFavorite"
				></r-favorite>
				<router-link
					:to="`/catalog/${category.slug}/${subcategory.slug}/${card.id}`"
				>
					<img
						:src="
							card.img
								? card.img
								: '/img/catalog/catalog__photo-default.svg'
						"
						alt="photo"
						class="r-card__img"
					/>
				</router-link>
			</div>
			<div class="r-card__footer">
				<div class="r-card__row">
					<p class="r-card__name">{{ card.name }}</p>
				</div>
				<div class="r-card__row">
					<p class="r-card__price">{{ card.price }}₽.</p>
					<p class="r-card__price-old" v-if="card.price_old">
						{{ card.price_old }}₽.
					</p>
				</div>
			</div>
		</div>
		<transition name="fade" mode="out-in">
			<r-card-maximize
				:card="card"
				:category="category"
				:subcategory="subcategory"
				v-show="isMaximize"
				@removeMaximizeCard="removeMaximizeCard"
			></r-card-maximize>
		</transition>
	</div>
</template>

<script>
	import rDiscount from "@/components/Catalog/r-discount";
	import rFavorite from "@/components/Catalog/r-favorite";

	import { defineAsyncComponent } from "vue";
	import { mapState } from "vuex";

	const rCardMaximize = defineAsyncComponent(() =>
		import("@/components/Catalog/r-card-maximize.vue")
	);

	export default {
		name: "r-card",
		components: {
			rDiscount,
			rFavorite,
			rCardMaximize,
		},
		props: {
			card: Object,
			category: {
				value: Object,
				required: true,
			},
		},
		computed: {
			...mapState({
				subcategories: (state) => state.Catalog.subcategories,
			}),

			subcategory() {
				return this.subcategories.find(
					(subcategory) => subcategory.id === this.card.sub_category
				);
			},
		},
		data: () => ({ isFavorite: false, isMaximize: false }),
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
	@import "@/assets/scss/variables.scss";

	.r-card {
		position: relative;
		color: $dark-blue;
		transition: all 0.2s ease;
		&-wrapper {
			position: relative;
			min-width: 21rem;
			width: 100%;
			@media (max-width: 1160px) {
				min-width: 23.4rem;
			}
			@media (max-width: 540px) {
				min-width: 14rem;
			}
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
			@media (max-width: 767px) {
				border-radius: 2rem;
			}
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
				color: $gray;
				font-size: 1.2rem;
			}
		}
		&__name {
			font-weight: 300;
			line-height: 1.3;
		}

		&-maximize {
		}
	}
</style>
