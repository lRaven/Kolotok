<template>
	<div class="page-login theme-container">
		<the-header :isCabinetVersion="true"></the-header>

		<main class="page-login__main main">
			<form class="page-login__form shadow">
				<div class="page-login__form-header">
					<h3 class="page-login__title">Вход в личный кабинет</h3>
				</div>
				<div class="page-login__form-body">
					<r-input placeholder="Логин"></r-input>
					<r-input placeholder="Пароль" type="password"></r-input>
					<r-button
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
		data: () => ({
			auth_data: {
				login: "",
				password: "",
			},
		}),
		methods: {
			async auth() {
				try {
					const response = await login({
						login: this.auth.data.login,
						password: this.auth_data.password,
					});

					if (response) {
						console.log(response);
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
