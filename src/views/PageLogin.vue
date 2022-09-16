<template>
	<div class="page-login theme-container">
		<the-header :isCabinetVersion="true"></the-header>

		<main class="page-login__main main">
			<form
				class="page-login__form shadow"
				@submit.prevent="attemptToEnter = true"
			>
				<div class="page-login__form-header">
					<h3 class="page-login__title">Вход в личный кабинет</h3>
				</div>
				<div class="page-login__form-body">
					<r-input
						placeholder="Логин"
						v-model="authData.username"
					></r-input>
					<r-input
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
				</div>
			</form>
		</main>

		<the-footer :isCabinetVersion="true"></the-footer>
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader";

	import { login } from "@/api/user";

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

						this.$router.push({ name: "Cabinet" });
					}
				} catch (err) {
					throw new Error(err);
				}
			},
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

		&__form {
			border-radius: 3rem;
			color: $dark;
			background: $white;
			&-header {
				padding: 5rem 10rem;
			}
			&-header {
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
		}
		&__title {
			font-weight: 600;
		}
	}
</style>
