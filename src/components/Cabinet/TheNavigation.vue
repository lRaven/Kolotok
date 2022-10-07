<template>
	<div class="the-navigation" :class="{ minimized: isNavMinimized }">
		<button
			v-show="(documentWidth <= 1050) & (documentWidth > 767)"
			type="button"
			class="the-navigation__close shadow"
			:class="{ minimized: isNavMinimized }"
			@click="
				isNavMinimized === true
					? this.$emit('maximizeNav')
					: this.$emit('minimizeNav')
			"
		>
			<svg
				width="18"
				height="11"
				viewBox="0 0 18 11"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="the-navigation__close-icon"
			>
				<path
					d="M5.10938 0L0.0703125 5.03906L5.10938 10.0782L6.16406 8.99996L2.95312 5.78906H18V4.28906H2.95312L6.16406 1.07812L5.10938 0Z"
					fill="#AEB3BF"
				/>
			</svg>
		</button>

		<h1 class="the-navigation__title" v-show="!isNavMinimized">
			Личный кабинет
		</h1>
		<ul class="the-navigation__list" v-if="currentTabs === 'admin'">
			<li
				v-for="tab in tabs_admin"
				:key="tab.id"
				class="the-navigation__item"
				:title="tab.description"
				@click="navActions(tab.link)"
			>
				<div
					class="the-navigation__icon-wrapper"
					:class="{ minimized: isNavMinimized }"
				>
					<img
						:src="
							selectedTab === tab.tab
								? tab.icon_selected
								: tab.icon
						"
						class="the-navigation__icon"
						alt=""
					/>
				</div>
				<p
					v-if="!isNavMinimized"
					:class="`the-navigation__description${
						selectedTab === tab.tab ? '-bold' : ''
					}`"
				>
					{{ tab.description }}
				</p>
			</li>
		</ul>
		<ul class="the-navigation__list" v-else>
			<li
				v-for="tab in tabs_user"
				:key="tab.id"
				class="the-navigation__item"
				:title="tab.description"
				@click="navActions(tab.link)"
			>
				<div
					class="the-navigation__icon-wrapper"
					:class="{ minimized: isNavMinimized }"
				>
					<img
						:src="
							selectedTab === tab.tab
								? tab.icon_selected
								: tab.icon
						"
						class="the-navigation__icon"
						alt=""
					/>
				</div>
				<p
					v-show="!isNavMinimized"
					:class="`the-navigation__description${
						selectedTab === tab.tab ? '-bold' : ''
					}`"
				>
					{{ tab.description }}
				</p>
			</li>
		</ul>
		<button
			v-show="documentWidth > 1050"
			type="button"
			class="the-navigation__close-full"
			:class="{ minimized: isNavMinimized }"
			@click="
				isNavMinimized === true
					? this.$emit('maximizeNav')
					: this.$emit('minimizeNav')
			"
		>
			<svg
				width="18"
				height="11"
				viewBox="0 0 18 11"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="the-navigation__close-full-icon"
				:class="{ minimized: isNavMinimized }"
			>
				<path
					d="M5.10938 0L0.0703125 5.03906L5.10938 10.0782L6.16406 8.99996L2.95312 5.78906H18V4.28906H2.95312L6.16406 1.07812L5.10938 0Z"
					fill="#AEB3BF"
				/>
			</svg>

			<p
				class="the-navigation__close-full-description"
				v-if="!isNavMinimized"
			>
				Свернуть
			</p>
		</button>

		<r-button
			v-show="documentWidth <= 1050 && !isNavMinimized"
			text="Напишите нам"
			type="button"
			color="white"
			@click="this.$emit('openPopup')"
		></r-button>
	</div>
</template>

<script>
	import { mapState } from "vuex";

	export default {
		name: "TheNavigation",
		props: {
			selectedTab: String,
			isNavMinimized: {
				value: Boolean,
				required: true,
			},
		},
		watch: {
			documentWidth() {
				if (this.documentWidth <= 1050) {
					this.$emit("minimizeNav");
				}
			},
		},
		computed: {
			currentTabs() {
				if (this.role === "AdminCRM" || this.is_superuser === true) {
					return "admin";
				} else return "user";
			},

			...mapState({
				tabs_user: (state) => state.Cabinet.tabs_user,
				tabs_admin: (state) => state.Cabinet.tabs_admin,

				role: (state) => state.Cabinet.user.role,
				is_superuser: (state) => state.Cabinet.user.is_superuser,

				documentWidth: (state) => state.documentWidth,
			}),
		},
		methods: {
			navActions(link) {
				link ? this.$router.push(link) : this.$emit("openPopupKolotok");

				if (this.documentWidth <= 767) {
					this.$emit("minimizeNav");
				}
			},
		},
		mounted() {
			if (this.documentWidth <= 1050) {
				this.$emit("minimizeNav");
			}
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-navigation {
		display: flex;
		flex-direction: column;
		background-color: #eee;
		padding: 8.5rem 3rem 6rem 3rem;
		border-radius: 0 0 3rem 0;
		width: 34rem;
		color: $cool-gray;
		transition: all 0.3s ease;
		@media (max-width: 1050px) {
			position: fixed;
			left: 0;
			top: 0;
			padding-top: 10rem;
		}
		@media (max-width: 767px) {
			width: 100vw;
			height: 100vh;
			border-radius: 0;
		}
		&.minimized {
			width: 7rem;
			padding: 8.5rem 0 5rem 0;
			@media (max-width: 1050px) {
				padding-top: 10rem;
			}
			@media (max-width: 767px) {
				width: 100vw;
				transform: translateX(-100vw);
			}

			.the-navigation__close {
				transform: translateX(1.2rem);
			}
		}

		&__close {
			width: 2.4rem;
			height: 2.4rem;
			background-color: $white;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			align-self: flex-end;
			transform: translateX(4.2rem);
			transition: all 0.2s ease;
			margin-bottom: 1rem;
			&.minimized {
				.the-navigation__close-icon {
					transform: rotate(180deg);
				}
			}
			&-icon {
				transform: none;
				transition: all 0.2s ease;
			}

			&-full {
				padding: 1rem;
				cursor: pointer;
				display: flex;
				align-self: flex-end;
				align-items: center;
				font-size: 1.8rem;
				font-weight: 500;
				gap: 1.6rem;
				margin-top: 3rem;
				background-color: transparent;
				color: $cool-gray;
				&.minimized {
					align-self: center;
				}

				&-icon {
					transition: all 0.3s ease;
					&.minimized {
						transform: rotate(-180deg);
					}
				}

				&-description {
					transition: all 0.3s ease;
					color: $middle-gray;
					font-weight: 600;
				}
			}
		}

		&__title {
			font-size: 3rem;
			font-weight: 700;
			margin-bottom: 4rem;
			transition: all 0.3s ease;
			transition-delay: 0.3s;
		}

		&__list {
			display: flex;
			flex-direction: column;
			transition: all 1s ease;
			transition-delay: 0.3s;
		}

		&__item {
			cursor: pointer;
			display: flex;
			align-items: center;
			gap: 2rem;
			padding: 1.7rem 0;
			height: 5.5rem;
			transition: all 0.3s ease;
			transition-delay: 0.3s;
		}

		&__icon {
			height: 100%;
			animation-duration: 0.8s;
			&-wrapper {
				display: flex;
				justify-content: center;
				min-width: 2.5rem;
				width: 2.5rem;
				height: 2.1rem;
				&.minimized {
					width: 100%;
				}
			}
		}

		&__description {
			font-size: 1.8rem;
			font-weight: 500;

			&-bold {
				font-size: 1.8rem;
				font-weight: 700;
			}
		}
	}
</style>
