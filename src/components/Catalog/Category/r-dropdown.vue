<template>
	<div class="r-dropdown">
		<div class="r-dropdown__header" @click="toggleDropdown">
			<p class="r-dropdown__selected">
				{{ getDefaultValue.text }}
			</p>
			<img
				src="/img/icon/catalog/arrow.svg"
				alt=""
				class="r-dropdown__arrow"
				ref="arrow"
			/>
		</div>
		<transition>
			<ul class="r-dropdown__list" v-if="isDropdownOpened">
				<li
					class="r-dropdown__item"
					v-for="item in values"
					:key="item.id"
					@click="
						closeDropdown();
						selectValue(item.value);
					"
				>
					{{ item.text }}
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "rDropdown",
		props: {
			values: Array,
		},
		data: () => ({
			isDropdownOpened: false,
			defaultValue: 0,
		}),
		computed: {
			getDefaultValue() {
				return this.values[this.defaultValue];
			},
		},
		methods: {
			toggleDropdown() {
				if (this.isDropdownOpened === false) {
					this.isDropdownOpened = true;
					this.$refs.arrow.style.transform = "rotate(180deg)";
				} else {
					this.isDropdownOpened = false;
					this.$refs.arrow.style.transform = null;
				}
			},
			closeDropdown() {
				this.isDropdownOpened = false;
				this.$refs.arrow.style.transform = null;
			},
			selectValue(value) {
				this.defaultValue = value - 1;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.r-dropdown {
		position: relative;
		max-width: 30rem;
		user-select: none;
		&__header {
			cursor: pointer;
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 2rem;
			border: 0.1rem solid #dfdfdf;
			border-radius: 0.4rem;
			padding: 1.3rem 1rem;
			background-color: #fff;
		}

		&__selected {
			&-value {
			}
		}
		&__arrow {
			transition: all 0.2s ease;
		}

		&__list {
			position: absolute;
			top: calc(100% + 0.5rem);
			left: 0;
			right: 0;
			border: 0.1rem solid #dfdfdf;
			border-radius: 0.4rem;
			z-index: 3;
		}
		&__item {
			cursor: pointer;
			font-size: 1.6rem;
			padding: 1.3rem 1rem;
			background-color: #fff;
			transition: all 0.2s ease;
			&:hover {
				background-color: #dfdfdf;
			}
		}
	}
</style>
