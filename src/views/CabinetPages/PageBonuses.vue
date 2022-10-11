<template>
	<section class="page-bonuses" v-once>
		<h2 class="page-bonuses__title">Бонусная программа</h2>

		<div class="page-bonuses__stats">
			<div class="page-bonuses__stats-row">
				<p class="page-bonuses__stats-key">
					Дата старта бонусной программы:
				</p>
				<p class="page-bonuses__stats-value">22.02.2022 12.00</p>
			</div>
			<div class="page-bonuses__stats-row">
				<p class="page-bonuses__stats-key">
					Дата окончания бонусной программы:
				</p>
				<p class="page-bonuses__stats-value">32.08.2022 22.00</p>
			</div>
			<div class="page-bonuses__stats-row">
				<p class="page-bonuses__stats-key">Ваш промокод: -</p>
				<p class="page-bonuses__stats-value">
					Активирован /
					<span class="page-bonuses__stats-value_bold">
						Не активирован
					</span>
				</p>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "PageBonuses",
		created() {
			this.$emit("change-tab", "bonuses");
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-bonuses {
		color: $dark-blue;
		&__title {
			color: $dark-blue;
			margin-bottom: 5rem;
		}

		&__stats {
			&-row {
				display: flex;
				align-items: center;
				gap: 5rem;

				+ .page-bonuses__stats-row {
					margin-top: 2.4rem;
				}
			}

			&-key,
			&-value {
				font-size: 2.4rem;
				&_bold {
					font-weight: 600;
				}
			}
		}
	}
</style>
