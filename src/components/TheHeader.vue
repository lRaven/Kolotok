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
						to="/cart"
						class="animate__animated animate__fadeInDown the-header__cart-container"
					>
						<img
							src="img/icon/cart.svg"
							alt=""
							class="the-header__cart"
						/>
						<span
							class="the-header__cart-counter"
							v-if="cart_list_length !== 0"
						>
							{{ cart_list_length }}
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
						class="the-header__catalog-button animate__animated animate__fadeInDown"
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
							<ul class="the-header__catalog-list">
								<li
									class="the-header__catalog-item"
									v-for="category in categories"
									:key="category.id"
									@click="
										this.category = category.id;
										this.sub_category = null;
										openCatalogList();
									"
								>
									<p
										class="the-header__catalog-item-description"
									>
										{{ category.name }}
									</p>
									<svg
										width="8"
										height="14"
										viewBox="0 0 8 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="the-header__catalog-item-arrow"
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
								class="the-header__catalog-list"
								v-if="category !== null"
							>
								<li
									class="the-header__catalog-item"
									v-for="sub_category in current_sub_categories"
									:key="sub_category.id"
									@click="
										this.sub_category = sub_category.id;
										openCatalogList();
									"
								>
									<p
										class="the-header__catalog-item-description"
									>
										{{ sub_category.name }}
									</p>
									<svg
										width="8"
										height="14"
										viewBox="0 0 8 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="the-header__catalog-item-arrow"
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
								class="the-header__catalog-list"
								v-if="sub_category !== null"
							>
								<router-link
									v-for="product in current_products"
									:key="product.id"
									:to="`/catalog/product/${product.id}`"
								>
									<li
										class="the-header__catalog-item"
										@click="toggleCatalog()"
									>
										<p
											class="the-header__catalog-item-description"
										>
											{{ product.name }}
										</p>
										<svg
											width="8"
											height="14"
											viewBox="0 0 8 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											class="the-header__catalog-item-arrow"
										>
											<path
												d="M1.53125 13L6.92621 7L1.53125 1"
												stroke="#AEB3BF"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg></li
								></router-link>
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
	import { mapState, mapGetters, mapActions } from "vuex";

	import rSearch from "@/components/r-search";

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
		data: () => ({
			isCatalogOpen: false,
			category: null,
			sub_category: null,
			catalog_columns: 1,
		}),
		computed: {
			...mapState({
				categories: (state) => state.Catalog.categories,
				cart_list: (state) => state.Cart.cart_list,
			}),

			...mapGetters({
				sub_categories: "SUB_CATEGORIES",
				products: "PRODUCTS",
			}),

			cart_list_length() {
				let length = 0;

				if (this.cart_list !== null) {
					length = this.cart_list.length;
				}

				return length;
			},

			current_sub_categories() {
				let sub_categories = [];
				this.sub_categories.forEach((sub_category) => {
					if (sub_category.category === this.category) {
						sub_categories.push(sub_category);
					}
				});
				return sub_categories;
			},

			current_products() {
				let products = [];
				this.products.forEach((product) => {
					if (product.sub_category[0] === this.sub_category) {
						products.push(product);
					}
				});
				return products;
			},
		},
		methods: {
			...mapActions(["getCategories", "getSubcategories", "getProducts"]),

			//*открытие и закрытие каталога
			toggleCatalog() {
				this.category = null;
				const body = document.querySelector("body");

				const header = document.querySelector(".the-header");
				const rSearch = header.querySelector(".r-search");
				const catalog = header.querySelector(".the-header__catalog");
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
					catalog.removeAttribute("style");
				} else {
					burger.classList.add("open");
					this.isCatalogOpen = true;
					body.classList.add("locked");
					blur.classList.add("open");
					rSearch.classList.add("open");
				}
			},

			openCatalogList() {
				const header = document.querySelector(".the-header");
				const catalog = header.querySelector(".the-header__catalog");
				if (this.category !== null) {
					catalog.setAttribute(
						"style",
						"grid-template-columns: repeat(2, 1fr)"
					);
					if (this.sub_category !== null) {
						catalog.setAttribute(
							"style",
							"grid-template-columns: repeat(3, 1fr)"
						);
					}
				}
			},
		},
		created() {
			this.getCategories();
			this.getSubcategories();
			this.getProducts();
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
		&__cart {
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
			display: grid;
			position: absolute;
			top: 100%;
			height: fit-content;
			width: fit-content;
			background-color: #fff;
			overflow: hidden;

			&-list {
				padding: 0.5rem 1rem;
				max-width: 35rem;
				overflow-y: auto;
				height: 100%;
				max-height: calc(100vh - 21rem);
				width: 100%;
			}
			&-item {
				margin-top: auto;
				user-select: none;
				cursor: pointer;
				display: grid;
				grid-template-columns: 1fr 2rem;
				align-items: center;
				gap: 1.5rem;
				padding: 0 3rem;
				transition: all 0.2s ease;
				height: 6.6rem;
				color: var(--dark);
				&:nth-child(n + 2) {
					border-top: 0.1rem solid var(--middle-gray);
				}
				&:last-child {
					border-bottom: 0.1rem solid var(--middle-gray);
				}

				&-arrow {
					display: block;
					height: 1.5rem;
					width: 1.5rem;
					path {
						transition: all 0.2s ease;
					}
				}
				&:hover {
					color: var(--blue);
					.the-header__catalog-item-arrow {
						path {
							stroke: var(--blue);
						}
					}
				}
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

		&__search {
			display: flex;
			justify-content: flex-end;
			width: 100%;
		}
	}
</style>
