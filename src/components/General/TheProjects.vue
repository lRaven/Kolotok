<template>
	<section class="the-projects center">
		<h2 data-aos="fade-right" class="the-projects__title">
			Проекты клиентов
		</h2>
		<div class="the-projects__list">
			<img
				data-aos="fade-up"
				src="img/projects/project1.png"
				class="the-projects__list-item the-projects__list-item1"
				alt=""
			/>
			<img
				data-aos="fade-up"
				src="img/projects/project2.png"
				class="the-projects__list-item the-projects__list-item2"
				alt=""
			/>
			<img
				data-aos="fade-up"
				src="img/projects/project3.png"
				class="the-projects__list-item the-projects__list-item3"
				alt=""
			/>
			<img
				data-aos="fade-up"
				src="img/projects/project4.png"
				class="the-projects__list-item the-projects__list-item4"
				alt=""
			/>
			<img
				data-aos="fade-up"
				src="img/projects/project5.png"
				class="the-projects__list-item the-projects__list-item5"
				alt=""
			/>
		</div>
		<r-button
			text="Смотреть всё"
			:arrow="true"
			color="yellow"
			@click="this.$router.push('/projects')"
		></r-button>
	</section>
</template>

<script>
	export default {
		name: "TheProjects",
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables.scss";

	.the-projects {
		&__title {
			color: $dark-blue;
			margin-bottom: 3.5rem;
		}
		&__list {
			display: grid;
			grid-template-areas:
				"one one one two two two"
				"three three four four five five";
			grid-gap: 2.4rem;
			margin-bottom: 4rem;
			&-item {
				width: 100%;
				&1 {
					grid-area: one;
				}
				&2 {
					grid-area: two;
				}
				&3 {
					grid-area: three;
				}
				&4 {
					grid-area: four;
				}
				&5 {
					grid-area: five;
				}
			}
		}
		.r-button {
			margin: auto;
		}
	}
</style>
