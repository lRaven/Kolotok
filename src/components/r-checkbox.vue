<template>
	<label class="r-checkbox">
		<input
			type="checkbox"
			class="r-checkbox__real"
			name=""
			@change="$emit('update:modelValue', $event.target.checked)"
		/>
		<span class="r-checkbox__fake">
			<svg
				version="1.0"
				xmlns="http://www.w3.org/2000/svg"
				width="512pt"
				height="512pt"
				viewBox="0 0 512 512"
				preserveAspectRatio="xMidYMid meet"
				class="r-checkbox__icon"
			>
				<g
					transform="translate(0,512) scale(0.1,-0.1)"
					fill="#000"
					stroke="none"
				>
					<path
						d="M4605 4386 c-105 -33 -109 -36 -1445 -1372 l-1315 -1314 -595 595
c-553 551 -600 596 -662 625 -159 74 -328 51 -454 -63 -100 -90 -149 -234
-125 -364 25 -134 9 -117 839 -944 726 -724 771 -767 832 -794 78 -34 185 -44
257 -25 122 33 70 -16 1629 1543 1614 1616 1522 1517 1547 1660 34 199 -91
392 -292 453 -56 17 -162 17 -216 0z"
					/>
				</g>
			</svg>
		</span>
		<p class="r-checkbox__description" v-if="description">
			{{ description }}
		</p>
	</label>
</template>

<script>
	export default {
		name: "rCheckbox",
		props: {
			description: String,
		},
	};
</script>

<style lang="scss" scoped>
	.r-checkbox {
		user-select: none;
		display: flex;
		align-items: center;
		gap: 1.7rem;
		cursor: pointer;
		&__real {
			display: none;
			&:checked {
				+ .r-checkbox__fake {
					.r-checkbox__icon {
						opacity: 1;
					}
				}
			}
		}
		&__fake {
			display: block;
			border-radius: 0.3rem;
			width: 1.4rem;
			height: 1.4rem;
			border: 0.1rem solid #949494;
			padding: 0.1rem;
		}
		&__icon {
			width: 100%;
			height: 100%;
			object-fit: contain;
			opacity: 0;
			transition: all 0.2s ease;
			path {
				fill: var(--dark);
			}
		}
		&__description {
			font-size: 1.4rem;
		}
	}
</style>
