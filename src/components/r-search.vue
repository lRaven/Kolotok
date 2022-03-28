<template>
	<div class="animate__animated animate__fadeInUp r-search">
		<input
			type="search"
			class="r-search__input"
			:placeholder="placeholder"
		/>
		<button type="submit" class="r-search__search-button">
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="r-search__search"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M14.6176 16.032C13.0779 17.2636 11.125 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 11.1251 17.2635 13.0781 16.0318 14.6178L19.707 18.2929C20.0975 18.6834 20.0975 19.3166 19.707 19.7071C19.3164 20.0977 18.6833 20.0977 18.2928 19.7071L14.6176 16.032ZM2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 10.8858 15.2543 12.5974 14.0417 13.8561C14.0073 13.8825 13.9742 13.9114 13.9428 13.9429C13.9113 13.9744 13.8823 14.0074 13.8559 14.0418C12.5973 15.2544 10.8857 16 9 16C5.13401 16 2 12.866 2 9Z"
					fill="white"
				/>
			</svg>
		</button>
	</div>
</template>

<script>
	export default {
		name: "rSearch",
		props: {
			placeholder: String,
		},
		data() {
			return {};
		},
		methods: {},
	};
</script>

<style lang="scss" scoped>
	.r-search {
		position: relative;
		display: flex;
		border: 0.2rem solid var(--white);
		border-radius: 3rem;
		width: 100%;
		max-width: 68rem;
		overflow: hidden;

		&__input {
			background-color: transparent;
			padding: 1.5rem 6rem 1.5rem 2.1rem;
			width: 100%;
			caret-color: var(--white);
			color: var(--white);
			font-size: 1.4rem;
			font-weight: 500;
			&::placeholder {
				color: var(--white);
				font-weight: 500;
			}
		}
		&__clear {
		}
		&__search {
			height: 2rem;
			width: 2rem;
			&-button {
				position: absolute;
				top: 0;
				right: 0;
				background-color: transparent;
				width: 6rem;
				height: 100%;
			}
		}
	}
</style>
