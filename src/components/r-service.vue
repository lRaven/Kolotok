<template>
	<div
		class="r-service"
		style="
			backgroung: url(img/services/services-img.png) center / cover
				no-repeat;
		"
	>
		<div class="r-service__content">
			<h3 class="r-service__title">Услуги</h3>
			<p class="r-service__description">
				Проектирование, ремонт и обустройство квартиры
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "rService",
	};
</script>

<style lang="scss" scoped>
	.r-service {
		display: flex;
		align-items: flex-end;
		&__content {
		}
		&__title {
		}
		&__description {
		}
	}
</style>
