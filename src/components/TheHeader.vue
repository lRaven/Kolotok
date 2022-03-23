<template>
	<div class="the-header">
		<div class="the-header__container center">
			<div class="the-header-row">
				<div class="the-header-col">
					<img src="img/icon/logo.svg" alt="logo" />
				</div>
				<div class="the-header-col">
					<div class="the-header__basket">
						<img src="img/icon/basket.svg" alt="" />
					</div>
					<img
						src="img/icon/avatar.svg"
						class="the-header-avatar"
						alt=""
					/>
				</div>
			</div>
			<div class="the-header-row">
				<div class="the-header-col"></div>
				<div class="the-header-col"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TheHeader",
	};
</script>

<style lang="scss" scoped>
	.the-header {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--dark-blue);
	}
</style>
