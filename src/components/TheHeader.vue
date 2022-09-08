<template>
	<div class="the-header animate__animated animate__fadeInDown">
		<div class="the-header__container center">
			<div class="the-header__row">
				<button
					v-show="document_width <= 540"
					type="button"
					class="the-header__catalog-burger"
					:class="{ open: isCatalogOpen }"
					@click="
						isCatalogOpen
							? (isCatalogOpen = false)
							: (isCatalogOpen = true)
					"
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
				</button>

				<router-link class="the-header__col" :to="{ name: 'Home' }">
					<img
						src="img/icon/logo.svg"
						alt="logo"
						class="animate__animated animate__fadeInDown the-header__logo"
					/>
				</router-link>

				<div class="the-header__col the-header__col-right">
					<router-link
						:to="{ name: 'Cart' }"
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
						:to="{ name: 'Home' }"
						class="animate__animated animate__fadeInDown"
						v-show="document_width > 540"
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
					v-show="document_width > 540"
					class="the-header__col the-header__col-left the-header__catalog-wrapper"
				>
					<div
						class="the-header__catalog-button animate__animated animate__fadeInDown"
					>
						<button
							type="button"
							class="the-header__catalog-burger"
							:class="{ open: isCatalogOpen }"
							@click="
								isCatalogOpen
									? (isCatalogOpen = false)
									: (isCatalogOpen = true)
							"
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
						</button>
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
									<li class="the-header__catalog-item">
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

				<form class="the-header__search">
					<r-search
						:class="{ open: isCatalogOpen }"
						placeholder="Поиск..."
					></r-search>
				</form>
			</div>
		</div>
	</div>
	<transition mode="out-in">
		<div class="blur" v-show="isCatalogOpen"></div>
	</transition>
</template>

<script>
	import { mapState } from "vuex";

	import rSearch from "@/components/r-search";

	export default {
		name: "TheHeader",
		components: { rSearch },
		watch: {
			"$route.path"() {
				//* срабатывает при переходе по router-link
				this.isCatalogOpen = false;
			},
			isCatalogOpen() {
				if (this.isCatalogOpen) {
					document.body.classList.add("locked");
				} else {
					document.body.classList.remove("locked");
					this.category = null;
					this.sub_category = null;
					this.catalog_columns = 1;
				}
			},
			document_width() {
				if (this.document_width <= 540 && this.isCatalogOpen) {
					this.isCatalogOpen = false;
				}
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
				sub_categories: (state) => state.Catalog.sub_categories,
				document_width: (state) => state.document_width,
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
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.the-header {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: $dark-blue;
		padding: 3rem 2.5rem;
		z-index: 4;
		@media (max-width: 1023px) {
			padding: 2rem;
		}
		@media (max-width: 540px) {
			padding: 1rem 1.5rem;
		}

		&::before,
		&::after {
			content: "";
			bottom: -10rem;
			position: absolute;
			height: 10rem;
			width: 5rem;
			background-color: transparent;
			z-index: -1;
		}
		&::before {
			border-top-left-radius: 3rem;
			box-shadow: 0 -5rem 0 0 $dark-blue;
			left: 0;
		}
		&::after {
			border-top-right-radius: 3rem;
			box-shadow: 0 -5rem 0 0 $dark-blue;
			right: 0;
		}
		&__container {
		}
		&__row {
			display: flex;
			align-items: center;
			justify-content: space-between;
			&:first-child {
				.the-header__col {
					width: max-content;
					&-right {
					}
				}
			}
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
				// justify-content: flex-end;
			}
		}
		&__logo {
			height: 8.5rem;
			@media (max-width: 1023px) {
				height: 4rem;
			}
			@media (max-width: 540px) {
				height: 2rem;
			}
		}
		&__cart {
			@media (max-width: 540px) {
				width: 2.4rem;
			}
			&-container {
				position: relative;
				width: 5rem;
				@media (max-width: 540px) {
					width: 3.3rem;
				}
			}
			&-counter {
				position: absolute;
				right: 0.3rem;
				top: -0.8rem;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: $yellow;
				color: $dark-blue;
				border-radius: 50%;
				width: 2.3rem;
				height: 2.3rem;
				font-size: 1.6rem;
				font-weight: 600;
				@media (max-width: 540px) {
					width: 1.5rem;
					height: 1.5rem;
					font-size: 1rem;
					top: -0.5rem;
				}
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
			background-color: $white;
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
				color: $dark;
				&:nth-child(n + 2) {
					border-top: 0.1rem solid $middle-gray;
				}
				&:last-child {
					border-bottom: 0.1rem solid $middle-gray;
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
					color: $blue;
					.the-header__catalog-item-arrow {
						path {
							stroke: $blue;
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
				width: 5rem;
				height: 5rem;
				border: 0.2rem solid $white;
				background-color: transparent;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				gap: 0.8rem;
				border-radius: 50%;
				overflow: hidden;
				transition: all 0.2s ease;
				@media (max-width: 540px) {
					width: 2.8rem;
					height: 2.8rem;
					gap: 0.2rem;
				}
				&.open {
					border-radius: 0.3rem;
					background-color: $white;
					.the-header__catalog-line {
						path {
							stroke: $dark-blue;
						}
						&:first-child {
							transform: translateY(0.5rem) rotate(45deg);
							@media (max-width: 540px) {
								transform: translateY(0.2rem) rotate(45deg)
									scale(0.5, 0.75);
							}
						}
						&:last-child {
							transform: translateY(-0.5rem) rotate(-45deg);
							@media (max-width: 540px) {
								transform: translateY(-0.2rem) rotate(-45deg)
									scale(0.5, 0.75);
							}
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

				@media (max-width: 540px) {
					transform: scale(0.5, 0.75);
				}
			}
			&-title {
				user-select: none;
				color: $white;
				font-weight: 500;
			}
		}

		&__search {
			display: flex;
			justify-content: flex-end;
			width: 100%;
		}
	}

	.blur {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba($color: #000000, $alpha: 0.5);
		z-index: 3;
	}
</style>
