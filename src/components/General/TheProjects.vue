<template>
	<section class="the-projects center">
		<h2 data-aos="fade-right" class="the-projects__title">
			Проекты клиентов
		</h2>
		<div class="the-projects__list" v-show="documentWidth > 540">
			<img
				data-aos="fade-up"
				:src="project.img"
				alt="project"
				v-for="project in projects"
				:key="project.id"
				:class="`the-projects__list-item the-projects__list-item${project.id}`"
			/>
		</div>

		<r-swiper
			v-show="documentWidth <= 540"
			:slides="projects"
			id="projects"
		></r-swiper>

		<r-button
			text="Смотреть всё"
			:arrow="true"
			color="yellow"
			@click="this.$router.push({ name: 'Projects' })"
		></r-button>
	</section>
</template>

<script>
	import rSwiper from "@/components/UI/r-swiper.vue";

	import { mapState } from "vuex";

	export default {
		name: "TheProjects",
		components: {
			rSwiper,
		},
		computed: {
			...mapState(["documentWidth"]),
		},
		data: () => ({
			projects: [
				{ id: 1, img: "/img/projects/project1.png" },
				{ id: 2, img: "/img/projects/project2.png" },
				{ id: 3, img: "/img/projects/project3.png" },
				{ id: 4, img: "/img/projects/project4.png" },
				{ id: 5, img: "/img/projects/project5.png" },
			],
		}),
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.the-projects {
		&__title {
			color: $dark-blue;
			margin-bottom: 3.5rem;
			@media (max-width: 540px) {
				margin-bottom: 3rem;
			}
		}
		&__list {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			grid-gap: 2.4rem;
			margin-bottom: 4rem;
			@media (max-width: 767px) {
				grid-gap: 1.2rem;
			}

			&-item {
				width: 100%;
				&1 {
					grid-column: 1/4;
				}
				&2 {
					grid-column: 4/7;
				}
				&3 {
					grid-column: 1/3;
				}
				&4 {
					grid-column: 3/5;
				}
				&5 {
					grid-column: 5/7;
				}
			}
		}
		.r-button {
			margin: auto;
		}
	}
</style>
