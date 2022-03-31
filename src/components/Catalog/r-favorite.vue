<template>
	<div class="r-favorite">
		<svg
			width="29"
			height="27"
			viewBox="0 0 29 27"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="r-favorite__icon"
		>
			<path
				d="M14.5 27L12.3975 25.0578C4.93 18.1864 0 13.6545 0 8.09267C0 3.56076 3.50901 0 7.975 0C10.498 0 12.9195 1.19183 14.5 3.07521C16.0805 1.19183 18.502 0 21.0249 0C25.4911 0 29 3.56076 29 8.09267C29 13.6545 24.0699 18.1864 16.6025 25.0725L14.5 27Z"
				fill="#B8B8B8"
				fill-opacity="0.3"
				v-if="favorited === false"
				@click="addToFavorites"
				class="r-favorite__path"
			/>
			<path
				d="M14.5 27L12.3975 25.0578C4.93 18.1864 0 13.6545 0 8.09267C0 3.56076 3.50901 0 7.975 0C10.498 0 12.9195 1.19183 14.5 3.07521C16.0805 1.19183 18.502 0 21.0249 0C25.4911 0 29 3.56076 29 8.09267C29 13.6545 24.0699 18.1864 16.6025 25.0725L14.5 27Z"
				fill="var(--red)"
				v-else
				@click="removeFromFavorites"
				class="r-favorite__path"
			/>
		</svg>
	</div>
</template>

<script>
	export default {
		name: "rFavorite",
		props: {
			favorite: Boolean,
		},
		computed: {
			color() {
				let result = "#eaeaea";
				if (this.favorited === true) result = "var(--red)";
				return result;
			},
		},
		data: () => ({
			favorited: false,
		}),
		methods: {
			addToFavorites() {
				this.favorited = true;
				this.$emit("addToFavorites", true);
			},
			removeFromFavorites() {
				this.favorited = false;
				this.$emit("addToFavorites", false);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.r-favorite {
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		width: fit-content;
		&__icon {
		}
		&__path {
			pointer-events: all;
		}
	}
</style>
