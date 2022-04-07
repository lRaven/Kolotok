<template>
	<ul class="r-bread-crumb animate__animated animate__fadeInDownBig wow">
		<li class="r-bread-crumb__item" v-for="link in links" :key="link.id">
			<div class="r-bread-crumb__col" v-if="link.current === false">
				<router-link :to="link.route" class="r-bread-crumb__link">
					{{ link.description }}
				</router-link>
				<img
					src="img/icon/arrow.svg"
					class="r-bread-crumb__arrow"
					alt=""
				/>
			</div>
			<div class="r-bread-crumb__col r-bread-crumb__current" v-else>
				<p class="r-bread-crumb__current-description">
					{{ link.description }}
				</p>
			</div>
		</li>
	</ul>
</template>

<script>
	export default {
		name: "rBreadCrumb",
		props: {
			links: Array,
		},
	};
</script>

<style lang="scss" scoped>
	.r-bread-crumb {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 3rem;
		&__item {
			list-style: none;
			font-size: 1.4rem;
		}

		&__col {
			display: flex;
			align-items: center;
			gap: 1.5rem;
		}

		&__link {
			display: block;
			text-decoration: none;
			color: var(--blue);
			width: 100%;
			height: 100%;
		}

		&__arrow {
			height: 1rem;
		}

		&__current {
			&-description {
				color: var(--cool-gray);
				font-size: 1.4rem;
			}
		}
	}

	@media (max-width: 768px) {
		.r-bread-crumb {
		}
	}
</style>
