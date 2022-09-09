<template>
	<div class="page-projects theme-container">
		<the-header />
		<main class="main">
			<section class="page-projects__projects center">
				<r-breadcrumbs :links="links"></r-breadcrumbs>
				<h2 class="page-projects__title">Проекты клиентов</h2>
				<div class="page-projects__list">
					<project-card
						v-for="project in projects"
						:key="project.id"
						:img="project.img"
						:description="project.description"
						:count="project.count"
					></project-card>
				</div>
				<div class="page-projects__bottom">
					<r-button
						class="yellow"
						text="Показать ещё"
						:arrow="true"
					></r-button>
					<r-pagination
						:pages="paginationPages"
						:currentPage="page_number"
						@selectPage="selectPage"
					></r-pagination>
				</div>
			</section>
		</main>
		<the-footer />
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader";

	import ProjectCard from "@/components/Projects/ProjectCard";

	import TheFooter from "@/components/TheFooter";

	export default {
		name: "PageProjects",
		components: {
			TheHeader,

			ProjectCard,

			TheFooter,
		},
		data: () => ({
			links: [
				{
					id: 1,
					description: "Главная",
					route: "/",
					current: false,
				},
				{
					id: 2,
					description: "Проекты клиентов",
					current: true,
				},
			],

			projects: [
				{
					id: 1,
					img: "/img/projects/projects-page/project1.png",
					description: "Проект гостинной",
					count: 12,
				},
				{
					id: 2,
					img: "/img/projects/projects-page/project2.png",
					description: "Квартира-студия",
					count: 12,
				},
				{
					id: 3,
					img: "/img/projects/projects-page/project3.png",
					description: "Проект детской комнаты",
					count: 12,
				},
				{
					id: 4,
					img: "/img/projects/projects-page/project4.png",
					description: "2-х комнатная",
					count: 12,
				},
				{
					id: 5,
					img: "/img/projects/projects-page/project5.png",
					description: "Проект рабочего кабинета",
					count: 12,
				},
				{
					id: 6,
					img: "/img/projects/projects-page/project6.png",
					description: "Проект гостинной",
					count: 12,
				},
				{
					id: 7,
					img: "/img/projects/projects-page/project1.png",
					description: "Проект гостинной",
					count: 12,
				},
				{
					id: 8,
					img: "/img/projects/projects-page/project2.png",
					description: "Квартира-студия",
					count: 12,
				},
				{
					id: 9,
					img: "/img/projects/projects-page/project3.png",
					description: "Проект детской комнаты",
					count: 12,
				},
				{
					id: 10,
					img: "/img/projects/projects-page/project4.png",
					description: "2-х комнатная",
					count: 12,
				},
				{
					id: 11,
					img: "/img/projects/projects-page/project5.png",
					description: "Проект рабочего кабинета",
					count: 12,
				},
				{
					id: 12,
					img: "/img/projects/projects-page/project6.png",
					description: "Проект гостинной",
					count: 12,
				},
			],

			//*TODO: интегрировать пагинацию с бекендом и отредактировать этот массив
			paginationPages: [
				{ id: 1, page: 1, class: "current" },
				{ id: 2, page: 2, class: null },
				{ id: 3, page: 3, class: null },
				{ id: 4, page: 4, class: null },
				{ id: 5, page: 5, class: null },
				{ id: 6, page: 6, class: null },
				{ id: 7, page: 7, class: null },
				{ id: 8, page: 8, class: null },
				{ id: 9, page: 9, class: null },
				{ id: 10, page: 10, class: null },
			],
		}),
		computed: {
			page_number() {
				return Number(this.$route.query.page);
			},

			current_path() {
				return this.$router.currentRoute._value.path;
			},
		},
		methods: {
			selectPage(page) {
				this.$router.push({
					path: this.current_path,
					query: { page },
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-projects {
		&__projects {
			margin-bottom: 8rem;
		}
		&__title {
			color: $dark-blue;
			margin-bottom: 4rem;
		}
		&__list {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			justify-content: space-between;
			grid-gap: 6rem 4rem;
			margin-bottom: 6rem;
			@media (max-width: 1023px) {
				grid-template-columns: repeat(2, 1fr);
				grid-gap: 2rem;
			}
			@media (max-width: 630px) {
				grid-template-columns: 1fr;
			}
		}
		&__bottom {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			.r-button {
				grid-column: 2/3;
				margin: auto;
			}
			.r-pagination {
				margin-left: auto;
			}
		}
	}
</style>
