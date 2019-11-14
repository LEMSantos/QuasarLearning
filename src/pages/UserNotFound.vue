<template>
	<q-page
		class="window-height window-width column justify-center items-center relative-position q-pa-md"
	>
		<q-btn
			class="absolute-top-left q-ma-md"
			icon="fas fa-arrow-left"
			text-color="primary"
			round
			flat
			@click="$router.push('/')"
		/>

		<q-img
			src="statics/img/not_found.png"
			class="image-size q-mb-md"
		/>

		<p
			class="text-h2 text-center"
		>
			User not found...
		</p>
	</q-page>
</template>

<script>
export default {
	// name: 'PageName',
}
</script>

<style scoped>
.image-size {
	max-width: 200px;
}
</style>
