<template>
	<div
		class="column justify-center items-center header-height-size full-width bg-primary relative-position shadow-4"
	>
		<q-btn
			class="absolute-top-left q-ma-md"
			icon="fas fa-arrow-left"
			text-color="white"
			round
			flat
			@click="$emit('back-button-click')"
		/>

		<q-avatar
			size="110px"
			class="q-mb-sm"
		>
			<q-img
				:src="avatar"
			/>
		</q-avatar>

		<p
			class="text-white text-h6"
		>
			{{ name }}
		</p>

		<div class="row justify-between q-px-xl full-width text-white text-h5">
			<div class="row items-center">
				<q-icon
					name="fas fa-star"
					class="q-mr-sm"
				/>
				<div class="text-subtitle1">
					{{ stars }}
				</div>
			</div>

			<div class="row items-center">
				<q-icon
					name="fas fa-code"
					class="q-mr-sm"
				/>
				<div class="text-subtitle1">
					{{ repos }}
				</div>
			</div>

			<div class="row items-center">
				<q-icon
					name="fab fa-github"
					class="q-mr-sm"
				/>
				<div class="text-subtitle1">
					{{ followers }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		avatar: {
			type: String,
			default: '',
		},

		name: {
			type: String,
			default: '',
		},

		followers: {
			type: Number,
			default: 0,
		},

		repos: {
			type: Number,
			default: 0,
		},

		stars: {
			type: Number,
			default: 0,
		},
	},

	data () {
		return {}
	}
}
</script>

<style scoped>
.header-height-size {
	height: 250px;
}

.icon-size {
	font-size: 24px;
}
</style>
