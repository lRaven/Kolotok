<template>
	<div class="page-login theme-container">
		<the-header :isCabinetVersion="true"></the-header>

		<main class="page-login__main main">
			<div class="page-login__container">
				<div data-aos="fade-up" class="page-login__links shadow" v-once>
					<router-link
						:to="{ name: 'Login' }"
						class="page-login__link"
					>
						Войти
					</router-link>
					<router-link
						:to="{ name: 'Registration' }"
						class="page-login__link"
					>
						Зарегистрироваться
					</router-link>
				</div>

				<form
					data-aos="fade-up"
					class="page-login__form shadow"
					@submit.prevent="attemptToEnter = true"
				>
					<div class="page-login__form-header" v-once>
						<h3 class="page-login__title">Вход в личный кабинет</h3>
					</div>
					<div class="page-login__form-body">
						<r-input
							name="username"
							placeholder="Логин"
							v-model="authData.username"
						></r-input>
						<r-input
							name="password"
							placeholder="Пароль"
							type="password"
							v-model="authData.password"
						></r-input>
						<r-button
							:disabled="!isFormValid"
							text="Войти"
							color="yellow"
							type="submit"
						></r-button>

						<p class="page-login__form-confirmation" v-once>
							Нажимая кнопку «Зарегистрироваться», вы
							подтверждаете своё согласие на
							<a class="page-login__form-confirmation-link">
								обработку персональных данных
							</a>
						</p>
					</div>
				</form>
			</div>
		</main>

		<the-footer :isCabinetVersion="true"></the-footer>
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader";

	import { login } from "@/api/user";
	import { useToast } from "vue-toastification";
	import { returnErrorMessages } from "@/js/returnErrorMessages";

	import TheFooter from "@/components/TheFooter";

	export default {
		name: "PageLogin",
		components: {
			TheHeader,

			TheFooter,
		},
		watch: {
			attemptToEnter() {
				if (this.attemptToEnter) {
					this.auth();

					setTimeout(() => {
						this.attemptToEnter = false;
					}, 5000);
				}
			},
		},
		data: () => ({
			attemptToEnter: false,

			authData: {
				username: "",
				password: "",
			},
		}),
		computed: {
			isFormValid() {
				if (
					this.authData.username.length > 0 &&
					this.authData.password.length >= 8
				)
					return true;
				else return false;
			},
		},
		methods: {
			async auth() {
				try {
					const response = await login(this.authData);

					if (response.status === 200) {
						this.$cookies.set(
							"auth_token",
							response.data.auth_token
						);
						this.toast.success("Вход выполнен успешно");

						this.$router.push({ name: "Cabinet" });
					}
					if (response.status === 400) {
						const error_list = returnErrorMessages(response.data);
						error_list.forEach((el) => {
							this.toast.error(el);
						});
					}
				} catch (err) {
					throw new Error(err);
				}
			},
		},
		setup() {
			const toast = useToast();
			return { toast };
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-login {
		&__main {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 18.5rem 0 10rem 0;
			background: linear-gradient(
				0deg,
				hsla(0, 0%, 100%, 0),
				#edf5fd 10%
			);
		}

		&__links {
			margin-bottom: 3rem;
			display: flex;
			align-items: center;
			gap: 4rem;
			background-color: $white;
			width: 100%;
			border-radius: 3rem;
			padding: 3rem 10rem;
		}
		&__link {
			font-size: 2.4rem;
			color: $dark;
			font-weight: 600;
			transition: all 0.2s ease;
			&:hover {
				color: $blue;
			}
			&.router-link-active {
				cursor: default;
				pointer-events: none;
				color: $blue;
			}
		}

		&__form {
			border-radius: 3rem;
			color: $dark;
			background: $white;
			width: 100%;
			&-header {
				padding: 3rem 10rem;
				border-bottom: 0.1rem solid $gray;
			}

			&-body {
				display: flex;
				flex-direction: column;
				gap: 3rem;
				padding: 5rem 10rem 10rem 10rem;

				.r-button {
					width: 100%;
					justify-content: center;
					border-radius: 1rem;
					padding: 2rem;
					font-size: 1.8rem;
				}
			}

			&-confirmation {
				max-width: 40rem;
				font-size: 1.2rem;
				font-weight: 500;
				line-height: 1.2;
				&-link {
					color: $blue;
				}
			}
		}
		&__title {
			font-weight: 600;
			text-align: center;
		}
	}
</style>
