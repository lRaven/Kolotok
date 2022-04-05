<template>
	<div class="the-header animate__animated animate__fadeInDown">
		<div class="the-header__container center">
			<div class="the-header__row">
				<div class="the-header__col the-header__col-left">
					<router-link to="/">
						<img
							src="img/icon/logo.svg"
							alt="logo"
							class="animate__animated animate__fadeInDown the-header__logo"
						/>
					</router-link>
				</div>
				<div class="the-header__col the-header__col-right">
					<router-link
						to="/"
						class="animate__animated animate__fadeInDown the-header__basket-container"
					>
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
					<router-link
						to="/"
						class="animate__animated animate__fadeInDown"
					>
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
					class="the-header__col the-header__col-left the-header__catalog-wrapper"
				>
					<div
						class="animate__animated animate__fadeInDown the-header__catalog-button"
					>
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
					<transition>
						<div class="the-header__catalog" v-show="isCatalogOpen">
							<ul class="the-header__categories">
								<li
									class="the-header__categories-item the-header__category"
									v-for="category in categories"
									:key="category.id"
									@click="this.category = category.id"
								>
									<p class="the-header__category-description">
										{{ category.name }}
									</p>
									<svg
										width="8"
										height="14"
										viewBox="0 0 8 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="the-header__categories-arrow"
									>
										<path
											d="M1.53125 13L6.92621 7L1.53125 1"
											stroke="#AEB3BF"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</li>
							</ul>
							<ul
								class="the-header__sub-categories"
								v-if="category !== null"
							>
								<li
									class="the-header__categories-item the-header__sub-category"
									v-for="sub_category in current_sub_categories"
									:key="sub_category.id"
								>
									<p
										class="the-header__sub-category-description"
									>
										{{ sub_category.name }}
									</p>
									<svg
										width="8"
										height="14"
										viewBox="0 0 8 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="the-header__categories-arrow"
									>
										<path
											d="M1.53125 13L6.92621 7L1.53125 1"
											stroke="#AEB3BF"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</li>
							</ul>
						</div>
					</transition>
				</div>
				<div class="the-header__col the-header__col-right">
					<form class="the-header__search">
						<r-search placeholder="Поиск..."></r-search>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapGetters } from "vuex";

	import rSearch from "./r-search.vue";

	export default {
		name: "TheHeader",
		components: {
			rSearch,
		},
		watch: {
			"$route.path"() {
				//* срабатывает при переходе по router-link
				this.isCatalogOpen = false;
			},
		},
		data() {
			return {
				basket: 0,
				isCatalogOpen: false,
				category: null,
			};
		},
		computed: {
			...mapState({
				categories: (state) => state.Catalog.categories,
			}),
			...mapGetters({
				sub_categories: "SUB_CATEGORIES",
			}),

			current_sub_categories() {
				let sub_categories = [];
				this.sub_categories.forEach((sub_category) => {
					if (sub_category.category === this.category) {
						sub_categories.push(sub_category);
					}
				});
				return sub_categories;
			},
		},
		methods: {
			//*открытие и закрытие каталога
			toggleCatalog() {
				this.category = null;
				const body = document.querySelector("body");

				const header = document.querySelector(".the-header");
				const rSearch = header.querySelector(".r-search");
				const burger = header.querySelector(
					".the-header__catalog-burger"
				);

				const blur = document.querySelector(".r-blur");

				if (burger.classList.contains("open")) {
					burger.classList.remove("open");
					this.isCatalogOpen = false;
					body.classList.remove("locked");
					blur.classList.remove("open");
					rSearch.classList.remove("open");
				} else {
					burger.classList.add("open");
					this.isCatalogOpen = true;
					body.classList.add("locked");
					blur.classList.add("open");
					rSearch.classList.add("open");
				}
			},

			adaptiveCatalogHeight() {
				const body = document.querySelector("body");

				const header = document.querySelector(".the-header");
				const catalog = header.querySelector(".the-header__catalog");

				const footer = document.querySelector(".the-footer");

				document.addEventListener("scroll", () => {
					if (
						body.scrollHeight -
							window.scrollY -
							footer.scrollHeight <=
						body.clientHeight
					) {
						catalog.classList.add("short");
					} else catalog.classList.remove("short");
				});
			},
		},
		mounted() {
			this.adaptiveCatalogHeight();
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
		padding: 3rem 0;
		z-index: 3;
		&::before {
			content: "";
			position: absolute;
			left: 0;
			bottom: -2.7rem;
			width: 2.8rem;
			height: 2.8rem;
			background: url("/public/img/icon/decoration.svg") center / contain
				no-repeat;
		}
		&::after {
			content: "";
			position: absolute;
			right: -0.1rem;
			bottom: -2.7rem;
			width: 2.8rem;
			height: 2.8rem;
			background: url("/public/img/icon/decoration.svg") center / contain
				no-repeat;
			transform: rotate(90deg);
		}
		&__container {
		}
		&__row {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 2.5rem;
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

		&__catalog {
			display: flex;
			position: absolute;
			top: 100%;
			max-height: calc(100vh - 21rem);
			width: max-content;
			max-width: 140rem;
			background-color: #fff;
			overflow: hidden;
			&.short {
				max-height: calc(100vh - 34.5rem);
			}

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

		&__categories {
			padding: 0.5rem 1rem;
			overflow-y: auto;
			max-width: 35rem;
			&-arrow {
				path {
					transition: all 0.2s ease;
				}
			}
			&-item {
				user-select: none;
				cursor: pointer;
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 5rem;
				padding: 2.3rem 3rem;
				transition: all 0.2s ease;
				height: 6.6rem;
				&:nth-child(n + 2) {
					border-top: 0.1rem solid var(--middle-gray);
				}
				&:last-child {
					border-bottom: 0.1rem solid var(--middle-gray);
				}
				&:hover {
					color: var(--blue);
					.the-header__categories-arrow {
						path {
							stroke: var(--blue);
						}
					}
				}
			}
		}
		&__category {
			&-description {
				line-height: 1.3;
			}
		}
		&__sub-categories {
			max-width: 35rem;
			padding: 0.5rem 1rem;
			overflow-y: auto;
		}
		&__sub-category {
			&-description {
				line-height: 1.3;
			}
		}

		&__search {
			display: flex;
			justify-content: flex-end;
			width: 100%;
		}
	}
</style>
