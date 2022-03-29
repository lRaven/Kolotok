<template>
	<router-view v-slot="{ Component }">
		<transition name="fade" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
	<r-blur />
</template>

<script>
	import rBlur from "./components/r-blur";

	export default {
		watch: {
			$route(to) {
				document.title = to.meta.title || "Default Title";
			},

			"$route.path"() {
				//* срабатывает при переходе по router-link
				document.querySelector("body").classList.remove("locked");
			},
		},
		components: {
			rBlur,
		},
	};
</script>

<style lang="scss">
	@import "./assets/scss/center.scss";
	@import "./assets/scss/shadow.scss";
	@import "./assets/css/variables.css";
	@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;800&display=swap");

	* {
		scroll-behavior: smooth;
		font-family: "Montserrat";
	}

	body {
		&.locked {
			overflow: hidden;
		}
		overflow-x: hidden;
	}

	#app,
	.theme-container {
		display: flex;
		flex-direction: column;
		height: 100%;
		min-height: 100vh;
	}

	input {
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
		padding: 4rem 2rem;
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

	.fade-enter-active,
	.fade-leave-active {
		transition: all 0.5s ease;
		transform: translateY(0rem);
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
		transform: translateY(3rem);
		transition: all 1s ease;
	}
</style>
