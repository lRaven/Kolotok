<template>
	<ul class="r-breadcrumbs animate__animated animate__fadeInDownBig wow">
		<li class="r-breadcrumbs__item" v-for="link in links" :key="link.id">
			<div class="r-breadcrumbs__col" v-if="link.current === false">
				<router-link :to="link.route" class="r-breadcrumbs__link">
					{{ link.description }}
				</router-link>
				<img
					src="img/icon/arrow.svg"
					class="r-breadcrumb__arrow"
					alt=""
				/>
			</div>
			<div class="r-breadcrumbs__col r-breadcrumbs__current" v-else>
				<p class="r-breadcrumbs__current-description">
					{{ link.description }}
				</p>
			</div>
		</li>
	</ul>
</template>

<script>
	export default {
		name: "rBreadcrumbs",
		props: {
			links: Array,
		},
	};
</script>

<style lang="scss" scoped>
	.r-breadcrumbs {
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
