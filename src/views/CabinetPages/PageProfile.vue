<template>
	<section class="page-profile">
		<h3 class="page-profile__title" v-once>Мой профиль</h3>

		<div class="page-profile__header">
			<div class="page-profile__me">
				<div class="page-profile__avatar-wrapper">
					<img
						:src="userData.avatar"
						alt="avatar"
						class="page-profile__avatar"
					/>
					<label class="page-profile__image-pick shadow">
						<input
							type="file"
							name=""
							class="page-profile__image-pick-input"
							accept="image/*"
							@change="change_avatar($event.target)"
						/>
						<div class="page-profile__image-pick-btn">
							Изменить фото
						</div>
					</label>
				</div>

				<p class="page-profile__full-name">
					{{ userData.last_name }} {{ userData.first_name }}
				</p>
			</div>
			<form class="page-profile__logout" @submit.prevent="logging_out">
				<r-button text="Выйти" type="submit" color="gray"></r-button>
			</form>
		</div>

		<div class="page-profile__main">
			<div
				class="page-profile__item shadow"
				:class="{ active: !isNameFormDisabled }"
			>
				<div class="page-profile__item-header">
					<h2 class="page-profile__item-title" v-once>ФИО</h2>
				</div>
				<form class="page-profile__item-body">
					<div class="page-profile__item-row">
						<p class="page-profile__item-key" v-once>Фамилия:</p>

						<r-input
							type="text"
							:placeholder="
								!userData.last_name && isNameFormDisabled
									? 'Не указано'
									: ''
							"
							:is-disabled="isNameFormDisabled"
							v-model="userData.last_name"
							:is-transparent="isNameFormDisabled"
						></r-input>
					</div>
					<div class="page-profile__item-row">
						<p class="page-profile__item-key" v-once>Имя:</p>

						<r-input
							type="text"
							:placeholder="
								!userData.first_name && isNameFormDisabled
									? 'Не указано'
									: ''
							"
							:is-disabled="isNameFormDisabled"
							v-model="userData.first_name"
							:is-transparent="isNameFormDisabled"
						></r-input>

						<button
							type="button"
							class="page-profile__item-change"
							@click="
								isNameFormDisabled
									? (isNameFormDisabled = false)
									: send_name()
							"
						>
							{{ isNameFormDisabled ? "Изменить" : "Применить" }}
						</button>
					</div>
				</form>
			</div>

			<div
				class="page-profile__item shadow"
				:class="{ active: !isPhoneFormDisabled }"
			>
				<form class="page-profile__item-body">
					<div class="page-profile__item-row">
						<p class="page-profile__item-key" v-once>
							Номер телефона:
						</p>

						<r-input
							type="tel"
							:placeholder="
								!userData.phone_number && isPhoneFormDisabled
									? 'Не указано'
									: ''
							"
							:is-disabled="isPhoneFormDisabled"
							v-model="userData.phone_number"
							:is-transparent="isPhoneFormDisabled"
						></r-input>

						<button
							type="button"
							class="page-profile__item-change"
							@click="
								isPhoneFormDisabled
									? (isPhoneFormDisabled = false)
									: send_phone_number()
							"
						>
							{{ isPhoneFormDisabled ? "Изменить" : "Применить" }}
						</button>
					</div>
				</form>
			</div>

			<div
				class="page-profile__item shadow"
				:class="{ active: !isEmailFormDisabled }"
			>
				<form class="page-profile__item-body">
					<div class="page-profile__item-row">
						<p class="page-profile__item-key" v-once>Email:</p>

						<r-input
							type="email"
							:placeholder="
								!userData.email && isEmailFormDisabled
									? 'Не указано'
									: ''
							"
							:is-disabled="isEmailFormDisabled"
							v-model="userData.email"
							:is-transparent="isEmailFormDisabled"
						></r-input>

						<button
							type="button"
							class="page-profile__item-change"
							@click="
								isEmailFormDisabled
									? (isEmailFormDisabled = false)
									: send_email()
							"
						>
							{{ isEmailFormDisabled ? "Изменить" : "Применить" }}
						</button>
					</div>
				</form>
			</div>

			<div
				class="page-profile__item shadow"
				:class="{ active: !isPasswordFormDisabled }"
			>
				<form
					class="page-profile__item-body"
					@submit.prevent="send_new_password"
				>
					<div class="page-profile__item-row">
						<p class="page-profile__item-key" v-once>Пароль:</p>
						<p
							class="page-profile__item-value page-profile__password"
							v-if="isPasswordFormDisabled"
						>
							********
						</p>
						<r-input
							type="password"
							:is-disabled="isPasswordFormDisabled"
							v-model="userData.password"
							:is-transparent="isPasswordFormDisabled"
							v-else
						></r-input>

						<button
							type="button"
							class="page-profile__item-change"
							@click="isPasswordFormDisabled = false"
							v-if="isPasswordFormDisabled"
						>
							Изменить
						</button>
					</div>

					<div
						class="page-profile__item-row"
						v-if="!isPasswordFormDisabled"
					>
						<p class="page-profile__item-key" v-once>
							Новый пароль:
						</p>
						<r-input
							type="password"
							:isDisabled="isPasswordFormDisabled"
							v-model="userData.password_new"
							:is-transparent="isPasswordFormDisabled"
						></r-input>
					</div>

					<div
						class="page-profile__item-row"
						v-if="!isPasswordFormDisabled"
					>
						<p class="page-profile__item-key" v-once>
							Подтверждение пароля:
						</p>
						<r-input
							type="password"
							:isDisabled="isPasswordFormDisabled"
							v-model="userData.password_repeat"
							:is-transparent="isPasswordFormDisabled"
						></r-input>

						<button
							v-if="isPasswordFormDisabled"
							type="button"
							class="page-profile__item-change"
							@click="isPasswordFormDisabled = false"
						>
							Изменить
						</button>

						<button
							v-else
							type="submit"
							:isDisabled="!isPasswordFormValid"
							class="page-profile__item-change"
						>
							Применить
						</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
	import { mapState, mapMutations, mapActions } from "vuex";
	import {
		logout,
		changeUserData,
		changePassword,
		uploadAvatar,
	} from "@/api/user";
	import { returnErrorMessages } from "@/js/returnErrorMessages";

	import { useToast } from "vue-toastification";

	export default {
		name: "PageProfile",
		watch: {
			user: {
				handler() {
					this.userData = {
						password: "",
						password_new: "",
						password_repeat: "",
						...this.user,
					};
				},
				deep: true,
			},
			new_avatar() {
				if (this.new_avatar) {
					this.send_avatar();
				}
			},
		},
		computed: {
			...mapState({
				baseURL: (state) => state.baseURL,
				user: (state) => state.Cabinet.user,
			}),

			isPasswordsSame() {
				if (
					this.userData.password_new === this.userData.password_repeat
				)
					return true;
				else return false;
			},
			isPasswordsNotEmpty() {
				if (this.userData.password_new.length >= 8) return true;
				else return false;
			},
			isPasswordFormValid() {
				if (
					this.userData.password.length >= 8 &&
					this.isPasswordsSame &&
					this.isPasswordsNotEmpty
				)
					return true;
				else return false;
			},
		},
		data: () => ({
			isNameFormDisabled: true,
			isPhoneFormDisabled: true,
			isEmailFormDisabled: true,
			isPasswordFormDisabled: true,

			userData: {},
			new_avatar: "",
		}),
		methods: {
			...mapMutations(["setUserAuth"]),
			...mapActions([
				"getUserData",
				"clearCabinetState",
				"clearAcademState",
				"clearCRMState",
			]),

			//* выход с аккаунта
			async logging_out() {
				try {
					const response = await logout();

					if (response.status === 204) {
						//* стереть из vuex,cookies данные юзера
						this.$cookies.remove("auth_token");

						this.clearCabinetState();
						this.setUserAuth(false);
						console.log("Logout successfully");
					}
				} catch (err) {
					throw new Error(err);
				}
			},

			//* обновление пользовательских данных юзера
			async send_new_personal_data(
				newUserData,
				successMessage = "Success"
			) {
				try {
					const response = await changeUserData(newUserData);

					if (response.status === 200) {
						this.toast.success(successMessage);
						console.log("personal data changed");

						this.isNameFormDisabled = true;

						this.getUserData();
					}
					if (response.status === 400) {
						const error_list = returnErrorMessages(response.data);
						error_list.forEach((el) => {
							this.toast.error(el);
						});
					}

					return response;
				} catch (err) {
					throw new Error(err);
				}
			},

			async send_new_password() {
				try {
					const response = await changePassword(
						this.userData.password_new,
						this.userData.password
					);

					if (response.status === 204) {
						this.toast.success("Пароль изменён");
						console.log("password changed");
						this.resetPasswordForm();
						this.isPasswordFormDisabled = true;
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

			async send_name() {
				try {
					const response = await this.send_new_personal_data(
						{
							first_name: this.userData.first_name,
							last_name: this.userData.last_name,
						},
						"ФИО обновлена"
					);

					if (response.status === 200) {
						this.isNameFormDisabled = true;
					}
				} catch (err) {
					throw new Error(err);
				}
			},

			async send_phone_number() {
				try {
					const response = await this.send_new_personal_data(
						{
							phone_number: this.userData.phone_number,
						},
						"Номер телефона обновлён"
					);

					if (response.status === 200) {
						this.isPhoneFormDisabled = true;
					}
				} catch (err) {
					throw new Error(err);
				}
			},

			async send_email() {
				try {
					const response = await this.send_new_personal_data(
						{
							email: this.userData.email,
						},
						"E-mail обновлён"
					);

					if (response.status === 200) {
						this.isEmailFormDisabled = true;
					}
				} catch (err) {
					throw new Error(err);
				}
			},

			async send_avatar() {
				try {
					const response = await uploadAvatar(
						this.userData.id,
						this.new_avatar
					);

					if (response.status === 200) {
						console.log("Avatar changed");
						this.toast.success("Изображение профиля изменено");

						try {
							const response = await this.getUserData();
							if (response.status === 200) {
								this.new_avatar = "";
							}
						} catch (err) {
							throw new Error(err);
						}
					}
					if (response.status === 400) {
						const error_list = returnErrorMessages(response.data);
						error_list.forEach((el) => {
							this.toast.error(el);
						});
					}
				} catch (err) {
					this.toast.error(
						"Данное изображение не доступно, пожалуйста загрузите '.jpg', '.png', '.svg'.\nМаксимальный размер: 4096px"
					);
					throw new Error(err);
				}
			},
			change_avatar(target) {
				//* запись в переменную для отправки на сервер
				this.new_avatar = target.files[0];

				//* функционал предпросмотра загруженной аватарки
				const fileReader = new FileReader();
				fileReader.addEventListener("load", () => {
					this.userData.avatar = fileReader.result;
				});

				fileReader.readAsDataURL(target.files[0]);
			},

			resetPasswordForm() {
				this.userData.password = "";
				this.userData.password_new = "";
				this.userData.password_repeat = "";
			},
		},
		created() {
			this.$emit("change-tab", "profile");

			this.userData = {
				password: "",
				password_new: "",
				password_repeat: "",
				...this.user,
			};
		},
		setup() {
			const toast = useToast();
			return { toast };
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-profile {
		color: $dark;

		&__title {
			margin-bottom: 1rem;
			padding-left: 2rem;
			font-weight: 600;
			@media (max-width: 767px) {
				padding-left: 0;
			}
		}

		&__header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 5rem 0 2rem;
			margin-bottom: 3rem;
			@media (max-width: 767px) {
				padding: 0;
			}
		}

		&__me {
			display: flex;
			align-items: center;
			gap: 2.6rem;
		}

		&__avatar {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			overflow: hidden;
			object-fit: cover;
			grid-area: 1/1;
			pointer-events: all;

			&-wrapper {
				width: 7rem;
				height: 7rem;
				display: grid;

				&:hover {
					.page-profile__image-pick {
						opacity: 1;
					}
				}
			}
		}

		&__image-pick {
			cursor: pointer;
			grid-area: 1/1;
			background-color: rgba($white, 0.7);
			backdrop-filter: blur(0.2rem);
			border-radius: 50%;
			border: 2px dashed $gray;
			display: flex;
			align-items: center;
			justify-content: center;
			opacity: 0;
			transition: all 0.3s ease;
			&-input {
				display: none;
			}
			&-btn {
				font-weight: 700;
				text-align: center;
			}
		}

		&__full-name {
			font-size: 2rem;
			font-weight: 600;
			word-break: break-word;
		}

		&__logout {
			.r-button {
				box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
				border-radius: 1rem;
				@media (max-width: 540px) {
					padding: 1rem;
				}
			}
		}

		&__main {
			display: flex;
			flex-direction: column;
			gap: 2.3rem;
		}

		&__item {
			border-radius: 3rem;
			outline: 0.1rem solid transparent;
			transition: all 0.2s ease;
			&.active {
				outline-color: $blue;
			}
			&-header {
				padding: 3rem 7rem;
				border-bottom: 0.1rem solid #c4c4c4;
				@media (max-width: 767px) {
					padding: 2rem 1.5rem;
				}
			}

			&-title {
				color: $blue;
				font-size: 2rem;
				font-weight: 600;
				@media (max-width: 540px) {
					font-size: 1.8rem;
				}
			}

			&-body {
				padding: 6rem 7rem;
				display: flex;
				justify-content: center;
				flex-direction: column;
				gap: 2rem;
				@media (max-width: 767px) {
					padding: 3rem 1.5rem;
				}
			}

			&-row {
				display: grid;
				grid-template-columns: 1fr 2fr 1fr;
				align-items: center;
				grid-gap: 2rem;
				font-size: 1.8rem;
				font-weight: 500;
				min-height: 2.2rem;
				@media (max-width: 540px) {
					grid-template-columns: 1fr;
				}
			}

			&-key {
				color: #979797;
				@media (max-width: 540px) {
					font-size: 1.4rem;
				}
			}

			&-value {
				font-size: 2.2rem;
				@media (max-width: 540px) {
					font-size: 1.4rem;
				}
			}

			&-change {
				cursor: pointer;
				position: relative;
				justify-self: flex-end;
				color: $blue;
				width: max-content;
				font-weight: 600;
				background-color: transparent;
				font-size: inherit;
				@media (max-width: 540px) {
					font-size: 1.4rem;
					justify-self: flex-start;
				}

				&::after {
					content: "";
					position: absolute;
					bottom: -0.2rem;
					left: 0;
					height: 0.2rem;
					width: 0;
					background-color: $blue;
					transition: all 0.2s ease;
				}

				&:hover {
					&::after {
						width: 100%;
						transition: all 0.3s ease;
					}
				}
			}
		}

		&__password {
			@media (max-width: 540px) {
				padding: 0;
			}
		}
	}
</style>

<style lang="scss">
	.page-profile {
		&__item {
			&-row {
				.r-input {
					&__input.transparent {
						padding-left: 0;
						padding-right: 0;
					}
				}
			}
		}
	}
</style>
