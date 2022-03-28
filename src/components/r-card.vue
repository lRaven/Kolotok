<template>
	<div class="r-card">
		<div class="r-card__main shadow">
			<div class="r-card__discount" v-if="discount_percent">
				-{{ discount_percent }}%
			</div>
			<div class="r-card__favorite">
				<svg
					width="29"
					height="27"
					viewBox="0 0 29 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="r-card__favorite-icon"
					v-if="isFavorite === false"
					@click="addFavorite"
				>
					<path
						d="M14.5 27L12.3975 25.0578C4.93 18.1864 0 13.6545 0 8.09267C0 3.56076 3.50901 0 7.975 0C10.498 0 12.9195 1.19183 14.5 3.07521C16.0805 1.19183 18.502 0 21.0249 0C25.4911 0 29 3.56076 29 8.09267C29 13.6545 24.0699 18.1864 16.6025 25.0725L14.5 27Z"
						fill="#B8B8B8"
						fill-opacity="0.3"
					/>
				</svg>

				<svg
					width="29"
					height="27"
					viewBox="0 0 29 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="r-card__favorite-icon"
					v-if="isFavorite === true"
					@click="removeFavorite"
				>
					<path
						d="M14.5 27L12.3975 25.0578C4.93 18.1864 0 13.6545 0 8.09267C0 3.56076 3.50901 0 7.975 0C10.498 0 12.9195 1.19183 14.5 3.07521C16.0805 1.19183 18.502 0 21.0249 0C25.4911 0 29 3.56076 29 8.09267C29 13.6545 24.0699 18.1864 16.6025 25.0725L14.5 27Z"
						fill="var(--red)"
					/>
				</svg>
			</div>
			<img :src="img" alt="" class="r-card__img" />
		</div>
		<div class="r-card__footer">
			<div class="r-card__row">
				<p class="r-card__price">{{ price }}р.</p>
				<p class="r-card__price-old" v-if="price_old">
					{{ price_old }}р.
				</p>
			</div>
			<div class="r-card__row">
				<p class="r-card__name">{{ name }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "rCard",
		props: {
			discount_percent: Number,
			img: String,
			price: String,
			price_old: String,
			name: String,
		},
		data() {
			return {
				isFavorite: false,
			};
		},
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
	.r-card {
		color: var(--dark-blue);
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
		}
		&__favorite {
			cursor: pointer;
			align-self: flex-end;
			justify-content: flex-start;
			position: absolute;
			right: 1.5rem;
			top: 1.5rem;

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
		}
	}
</style>
