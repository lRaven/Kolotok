<template>
	<router-view v-slot="{ Component }">
		<transition name="fade-left" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
	<r-blur />
</template>

<script>
	import rBlur from "@/components/r-blur";
	import Aos from "aos";
	import "aos/dist/aos.css";

	import { mapActions } from "vuex";

	export default {
		watch: {
			$route(to) {
				document.title = to.meta.title || "Default Title";
			},

			"$route.path"() {
				//* срабатывает при переходе по router-link
				document.querySelector("body").classList.remove("locked");
				document.querySelector(".r-blur").classList.remove("open");
			},
		},
		components: { rBlur },
		methods: {
			...mapActions([
				"getCategories",
				"getSubcategories",
				"getProducts",
				"getDocumentWidth",
			]),
		},
		created() {
			this.getCategories();
			this.getSubcategories();
			this.getProducts();

			this.getDocumentWidth();
		},
		mounted() {
			Aos.init();

			setInterval(() => {
				Aos.refresh();
			}, 5000);
		},
	};
</script>

<style lang="scss">
	@import "@/assets/scss/variables.scss";
	@import "@/assets/scss/center.scss";
	@import "@/assets/scss/shadow.scss";
	@import "@/assets/scss/swiper.scss";
	@import "@/assets/scss/animations.scss";

	* {
		font-family: "Montserrat";

		//*chrome/safari
		&::-webkit-scrollbar {
			width: $scrollbarWidth; /* ширина scrollbar */
		}
		&::-webkit-scrollbar-track {
			background: $scrollbarBg; /* цвет дорожки */
		}
		&::-webkit-scrollbar-thumb {
			background-color: $scrollbarThumb; /* цвет плашки */
			border-radius: $scrollbarBorderRadius; /* закругления плашки */
			border: $scrollbarBorder; /* padding вокруг плашки */
		}
		//*firefox
		scrollbar-width: thin; /* "auto" или "thin"  */
		scrollbar-color: $scrollbarThumb $scrollbarBg;
	}

	body {
		&.locked {
			overflow: hidden;
		}
		overflow-x: hidden;
		overflow-y: auto;
	}

	#app,
	.theme-container {
		display: flex;
		flex-direction: column;
		height: max-content;
		min-height: 100vh;
	}

	input {
		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			/* display: none; <- Crashes Chrome on hover */
			-webkit-appearance: none;
			margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
		}
		-moz-appearance: textfield;
		&:hover {
			-moz-appearance: number-input;
		}
		&[type="text"] {
			::-ms-clear {
				display: none;
				width: 0;
				height: 0;
			}
			::-ms-reveal {
				display: none;
				width: 0;
				height: 0;
			}
		}
		&[type="search"] {
			&::-webkit-search-decoration,
			&::-webkit-search-cancel-button,
			&::-webkit-search-results-button,
			&::-webkit-search-results-decoration {
				display: none;
			}
		}
	}

	h1 {
		font-size: 5rem;
		font-weight: 500;
		@media (max-width: 1023px) {
			font-size: 3.6rem;
		}
		@media (max-width: 540px) {
			font-size: 2rem;
		}
	}
	h2 {
		font-size: 4.5rem;
		font-weight: 500;
		@media (max-width: 1023px) {
			font-size: 3.2rem;
		}
		@media (max-width: 540px) {
			font-size: 2.4rem;
		}
	}
	h3 {
		font-size: 3rem;
		font-weight: 500;
		@media (max-width: 1023px) {
			font-size: 2rem;
		}
		@media (max-width: 540px) {
			font-size: 1.8rem;
		}
	}
	h4 {
		font-size: 2.5rem;
		font-weight: 400;
		@media (max-width: 1023px) {
			font-size: 2rem;
		}
	}
	h5 {
		font-size: 2rem;
		font-weight: 300;
	}
	h6 {
		font-size: 1.8rem;
		font-weight: 600;
	}
	p {
		font-size: 1.6rem;
		@media (max-width: 1023px) {
			font-size: 1.4rem;
		}
	}

	img,
	svg {
		user-select: none;
		pointer-events: none;
	}

	.main {
		display: flex;
		flex-direction: column;
		flex: 1 0 auto;
		padding-top: 21rem;
		@media (max-width: 1023px) {
			padding-top: 14rem;
		}
		@media (max-width: 540px) {
			padding-top: 10rem;
		}
	}

	section {
		padding: 2.5rem;
		@media (max-width: 1023px) {
			padding: 2rem;
		}
		@media (max-width: 540px) {
			padding: 1.5rem;
		}
	}

	.footer {
		flex: 0 0 auto;
	}
</style>
