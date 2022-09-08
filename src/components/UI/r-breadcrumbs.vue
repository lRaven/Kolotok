<template>
	<ol
		data-aos="fade-down"
		itemscope
		itemtype="http://schema.org/BreadcrumbList"
		class="r-breadcrumbs"
	>
		<li
			itemprop="itemListElement"
			itemtype="http://schema.org/ListItem"
			class="r-breadcrumbs__item"
			v-for="link in links"
			:key="link.id"
		>
			<router-link
				itemprop="item"
				:to="link.route"
				class="r-breadcrumbs__link"
				v-if="link.current === false"
			>
				{{ link.description }}
			</router-link>

			<a
				itemprop="item"
				itemscope
				class="r-breadcrumbs__current-description"
				v-else
			>
				{{ link.description }}
			</a>
		</li>
	</ol>
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
	@import "@/assets/scss/variables.scss";

	.r-breadcrumbs {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 6rem;
		&__item {
			list-style: none;
			font-size: 1.4rem;
			padding-right: 2.5rem;
		}

		&__link {
			display: block;
			text-decoration: none;
			color: $blue;
			width: 100%;
			height: 100%;
			position: relative;

			&::after {
				pointer-events: none;
				content: "";
				background: url("/public/img/icon/arrow.svg") center / contain
					no-repeat;
				position: absolute;
				right: -2.5rem;
				height: 1rem;
				width: 1rem;
				top: 50%;
				transform: translateY(-50%);
			}
		}

		&__current {
			&-description {
				color: $cool-gray;
				font-size: 1.4rem;
			}
		}
	}

	@media (max-width: 768px) {
		.r-breadcrumbs {
		}
	}
</style>
