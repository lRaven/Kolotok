<template>
	<div class="r-input">
		<input
			class="r-input__input"
			:class="{
				transparent: isTransparent,
				password: type === 'password',
			}"
			:name="name"
			:disabled="isDisabled"
			:type="input_type"
			:placeholder="placeholder"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>

		<label
			class="r-input__eye"
			:class="{ disabled: isDisabled }"
			v-if="type === 'password'"
		>
			<input
				type="checkbox"
				class="r-input__eye-checkbox"
				v-model="isPasswordVisible"
			/>
			<img
				class="r-input__eye-icon"
				:src="`/img/icons/cabinet/eye-${
					isPasswordVisible ? 'open' : 'closed'
				}.svg`"
				:alt="`eye-${isPasswordVisible ? 'open' : 'closed'}`"
			/>
		</label>

		<button type="button" class="r-input__search" v-if="type === 'search'">
			<img
				src="/img/icons/magnifier.svg"
				alt="icon"
				class="r-input__search-icon"
			/>
		</button>
	</div>
</template>

<script>
	export default {
		name: "vInput",
		props: {
			isTransparent: {
				value: Boolean,
				default: false,
			},
			isDisabled: {
				value: Boolean,
				default: false,
			},

			modelValue: String,
			type: String,
			name: String,
			placeholder: String,
		},
		watch: {
			isPasswordVisible() {
				this.isPasswordVisible
					? (this.input_type = "text")
					: (this.input_type = "password");
			},
		},
		data() {
			return {
				input_type: this.type,
				isPasswordVisible: false,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.r-input {
		position: relative;
		&__input {
			border: 0.1rem solid $middle-gray;
			border-radius: 1rem;
			padding: 2rem;
			font-size: 1.8rem;
			transition: all 0.2s ease;
			width: 100%;
			@media (max-width: 767px) {
				padding: 1rem;
			}
			@media (max-width: 540px) {
				font-size: 1.4rem;
			}

			&.transparent {
				border-color: transparent;
				background-color: transparent;
				padding: 0 2rem;
				&:hover {
					border-color: transparent;
				}
			}
			&.password {
				padding-right: 5rem;
			}
			&:invalid {
				border-color: $red;
				&:hover,
				&:focus {
					border-color: $red;
				}
			}
			&:hover {
				border-color: $dark;
				transition: all 0.3s ease;
			}
			&:focus {
				border-color: $dark;
				transition: all 0.3s ease;
			}
		}

		&__eye {
			cursor: pointer;
			position: absolute;
			right: 2rem;
			top: 50%;
			transform: translateY(-50%);
			display: flex;
			align-items: center;
			justify-content: center;
			height: 2.5rem;
			width: 2.5rem;
			&.disabled {
				cursor: default;
				pointer-events: none;
			}
			&-checkbox {
				display: none;
			}
			&-icon {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}

		&__search {
			position: absolute;
			right: 2rem;
			top: 50%;
			transform: translateY(-50%);
			background-color: transparent;
			&-icon {
				width: 2rem;
				height: 2rem;
				object-fit: contain;
			}
		}
	}
</style>
