<template>
	<div class="the-header">
		<div class="the-header__container center">
			<div class="the-header__row">
				<div class="the-header__col the-header__col-left">
					<img
						src="img/icon/logo.svg"
						alt="logo"
						class="the-header__logo"
					/>
				</div>
				<div class="the-header__col the-header__col-right">
					<router-link to="/" class="the-header__basket-container">
						<img
							src="img/icon/basket.svg"
							alt=""
							class="the-header__basket"
						/>
						<span
							class="the-header__basket-counter"
							v-if="basket !== 0"
						>
							{{ basket }}
						</span>
					</router-link>
					<router-link to="/">
						<img
							src="img/icon/avatar.svg"
							class="the-header__avatar"
							alt=""
						/>
					</router-link>
				</div>
			</div>

			<div class="the-header__row">
				<div
					class="the-header__col the-header__col-left the-header__catalog"
				>
					<div class="the-header__catalog-button">
						<div
							class="the-header__catalog-burger"
							@click="toggleCatalog"
						>
							<svg
								width="26"
								height="2"
								viewBox="0 0 26 2"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="the-header__catalog-line"
							>
								<path
									d="M1 1H25"
									stroke="#FEFEFE"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<svg
								width="26"
								height="2"
								viewBox="0 0 26 2"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="the-header__catalog-line"
							>
								<path
									d="M1 1H25"
									stroke="#FEFEFE"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<svg
								width="26"
								height="2"
								viewBox="0 0 26 2"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="the-header__catalog-line"
							>
								<path
									d="M1 1H25"
									stroke="#FEFEFE"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
						<h5 class="the-header__catalog-title">Каталог</h5>
					</div>
				</div>
				<div class="the-header__col the-header__col-right">
					<form class="the-header__search">
						<r-search placeholder="Поиск..."></r-search>
					</form>
				</div>
			</div>
		</div>
		<img
			src="img/icon/header-decoration.svg"
			class="the-header__decoration the-header__decoration-left"
			alt=""
		/>
		<img
			src="img/icon/header-decoration.svg"
			class="the-header__decoration the-header__decoration-right"
			alt=""
		/>
	</div>
</template>

<script>
	import rSearch from "./r-search.vue";

	export default {
		name: "TheHeader",
		components: {
			rSearch,
		},
		data() {
			return {
				basket: 0,
			};
		},
		methods: {
			toggleCatalog() {
				const header = document.querySelector(".the-header");
				const burger = header.querySelector(
					".the-header__catalog-burger"
				);

				if (burger.classList.contains("open"))
					burger.classList.remove("open");
				else burger.classList.add("open");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.the-header {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--dark-blue);
		padding: 3rem 1.5rem;
		z-index: 2;
		&__container {
		}
		&__row {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 1.5rem;
			+ .the-header__row {
				margin-top: 1.2rem;
			}
		}

		&__col {
			display: flex;
			align-items: center;
			gap: 3rem;
			width: 100%;
			&-left {
			}
			&-right {
				justify-content: flex-end;
			}
		}
		&__logo {
		}
		&__basket {
			&-container {
				position: relative;
				width: 5rem;
			}
			&-counter {
				position: absolute;
				right: 0.3rem;
				top: -0.8rem;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: var(--yellow);
				color: var(--dark-blue);
				border-radius: 50%;
				width: 2.3rem;
				height: 2.3rem;
				font-size: 1.6rem;
				font-weight: 600;
			}
		}
		&__avatar {
		}
		&__decoration {
			position: absolute;
			bottom: -2.6rem;
			height: 2.6rem;
			&-left {
				left: 0;
			}
			&-right {
				right: 0;
				transform: scale(-1, 1);
			}
		}

		&__catalog {
			&-button {
				display: flex;
				align-items: center;
				gap: 3rem;
			}
			&-burger {
				cursor: pointer;
				width: 5rem;
				height: 5rem;
				border: 0.2rem solid var(--white);
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				gap: 0.8rem;
				border-radius: 50%;
				overflow: hidden;
				transition: all 0.2s ease;
				&.open {
					border-radius: 0.3rem;
					background-color: var(--white);
					.the-header__catalog-line {
						path {
							stroke: var(--dark-blue);
						}
						&:first-child {
							transform: translateY(0.5rem) rotate(45deg);
						}
						&:last-child {
							transform: translateY(-0.5rem) rotate(-45deg);
						}
						&:nth-child(2) {
							display: none;
						}
					}
				}
			}
			&-line {
				display: block;
				transition: all 0.2s ease;
			}
			&-title {
				user-select: none;
				color: var(--white);
				font-weight: 500;
			}
		}

		&__search {
			display: flex;
			justify-content: flex-end;
			width: 100%;
		}
	}
</style>
