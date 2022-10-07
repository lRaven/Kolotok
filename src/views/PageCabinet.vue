<template>
	<div class="page-cabinet theme-container">
		<the-header :isCabinetVersion="true"></the-header>

		<main class="page-cabinet__main main">
			<div class="page-cabinet__left-panel">
				<the-navigation
					@openPopup="openPopup"
					@maximizeNav="maximizeNav"
					@minimizeNav="minimizeNav"
					:selectedTab="tab"
					:isNavMinimized="isNavMinimized"
				></the-navigation>
				<div class="page-cabinet__hint" v-show="!isNavMinimized">
					<p v-once>
						Есть вопросы <br />
						или предложения?
					</p>
					<r-button
						text="Напишите нам"
						type="button"
						color="gray"
						@click="isPopupOpen = true"
					></r-button>
				</div>
			</div>

			<div
				class="page-cabinet__content"
				:class="{ maximized: isNavMinimized }"
			>
				<router-view v-slot="{ Component }">
					<transition mode="out-in">
						<component
							:is="Component"
							@openPopup="openPopup"
							@changeTab="changeTab"
						/>
					</transition>
				</router-view>
			</div>
		</main>

		<the-footer :isCabinetVersion="true"></the-footer>
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader";

	import TheNavigation from "@/components/Cabinet/TheNavigation";
	import { mapState } from "vuex";

	import TheFooter from "@/components/TheFooter";

	export default {
		name: "PageCabinet",
		components: {
			TheHeader,

			TheNavigation,

			TheFooter,
		},
		watch: {
			userAuth() {
				if (!this.userAuth) this.$router.push({ name: "Login" });
			},
		},
		data: () => ({
			isNavMinimized: false,
			tab: "profile",
		}),
		computed: {
			...mapState({
				documentWidth: (state) => state.documentWidth,
				userAuth: (state) => state.Cabinet.userAuth,
			}),
		},
		methods: {
			openPopup() {
				this.isPopupOpen = true;
			},
			closePopup() {
				this.isPopupOpen = false;
				document.body.classList.remove("locked");
			},

			minimizeNav() {
				this.isNavMinimized = true;
				document.body.classList.remove("locked");
			},
			maximizeNav() {
				this.isNavMinimized = false;

				if (this.documentWidth <= 767) {
					document.body.classList.add("locked");
				}
			},

			changeTab(newTab) {
				this.tab = newTab;
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-cabinet {
		height: 100%;
		min-height: 100vh;
		background-color: $white;
		&__main {
			display: grid;
			grid-template-rows: 1fr max-content;
			padding-top: 6rem;
			padding-bottom: 6rem;
		}

		&__left-panel {
			position: sticky;
			left: 0;
			top: 6rem;
			height: max-content;
			width: 34rem;
			z-index: 2;
			transition: all 0.3s ease;
			-ms-overflow-style: none;
			scrollbar-width: none;
			grid-area: 1/1;
			@media (max-width: 1050px) {
				width: max-content;
			}

			&::-webkit-scrollbar {
				display: none;
			}

			&.minimized {
				width: calc(7rem);
				transition: all 0.3s ease;
			}
		}

		&__hint {
			position: relative;
			margin-top: 5rem;
			padding: 0 0 0rem 2.5rem;
			transition: all 0.3s ease;
			@media (max-width: 1050px) {
				display: none;
			}

			p {
				font-size: 1.6rem;
				font-weight: 500;
				margin-bottom: 2rem;
			}
		}

		&__content {
			padding: 8rem 2rem 2rem 36rem;
			width: 100%;
			grid-area: 1/1;
			transition: all 0.3s ease;
			@media (max-width: 1050px) {
				padding-left: 9rem;
			}
			@media (max-width: 767px) {
				padding: 2rem 1.5rem;
			}

			&.maximized {
				padding-left: 9rem;
				@media (max-width: 767px) {
					padding: 2rem 1.5rem;
				}
			}

			section {
				padding: 0;
			}
		}
	}
</style>
