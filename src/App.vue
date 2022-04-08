<template>
	<router-view v-slot="{ Component }">
		<transition name="scale" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
	<r-blur />
</template>

<script>
	import rBlur from "@/components/r-blur";

	export default {
		watch: {
			$route(to, from) {
				document.title = to.meta.title || "Default Title";

				const toDepth = to.path.split("/").length;
				const fromDepth = from.path.split("/").length;
				this.transitionName =
					toDepth < fromDepth ? "slide-right" : "slide-left";
			},

			"$route.path"() {
				//* срабатывает при переходе по router-link
				document.querySelector("body").classList.remove("locked");
				document.querySelector(".r-blur").classList.remove("open");
			},
		},
		components: {
			rBlur,
		},
	};
</script>

//* default styles
<style lang="scss">
	@import "@/assets/css/variables.css";
	@import "@/assets/scss/center.scss";
	@import "@/assets/scss/shadow.scss";

	@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;800&display=swap");

	* {
		font-family: "Montserrat";

		//*chrome/safari
		&::-webkit-scrollbar {
			width: var(--scrollbarWidth); /* ширина scrollbar */
		}
		&::-webkit-scrollbar-track {
			background: var(--scrollbarBg); /* цвет дорожки */
		}
		&::-webkit-scrollbar-thumb {
			background-color: var(--scrollbarThumb); /* цвет плашки */
			border-radius: var(
				--scrollbarBorderRadius
			); /* закругления плашки */
			border: var(--scrollbarBorder); /* padding вокруг плашки */
		}
		//*firefox
		scrollbar-width: thin; /* "auto" или "thin"  */
		scrollbar-color: var(--scrollbarThumb) var(--scrollbarBg);
	}

	body {
		&.locked {
			position: fixed;
		}
		overflow-x: hidden;
		overflow-y: auto;
	}

	#app,
	.theme-container {
		display: flex;
		flex-direction: column;
		height: 100%;
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
	}
	h2 {
		font-size: 4.5rem;
		font-weight: 500;
	}
	h3 {
		font-size: 3rem;
		font-weight: 500;
	}
	h4 {
		font-size: 2.5rem;
		font-weight: 400;
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
	}

	.header,
	.footer {
	}
	section {
		padding: 4rem 2.5rem;
	}

	.footer {
		flex: 0 0 auto;
	}

	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.3s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}

	.scale-enter-active,
	.scale-leave-active {
		transition: all 0.35s ease;
	}

	.scale-enter-from,
	.scale-leave-to {
		opacity: 0;
		transform: scale(0.9);
	}
</style>

//*carousel styles
<style lang="scss">
	.swiper {
		width: 100%;
		padding: 1rem !important;
		&-button {
			&-prev,
			&-next {
				background-color: #d8d8d7;
				border-radius: 50%;
				width: 5rem !important;
				height: 5rem !important;
				&::after {
					font-size: 2.4rem !important;
				}
			}
			&-prev {
				left: 1.5rem !important;
			}
			&-next {
				right: 1.5rem !important;
			}
		}
		&-slide {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
