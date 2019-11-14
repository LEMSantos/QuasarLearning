<template>
	<q-page
		class="window-height window-width q-pa-md bg-grey-3"
	>
		<div
			class="column justify-center items-center fit"
		>
			<q-img
				class="image-size q-mb-xl"
				src="statics/img/github_logo.png"
			/>

			<div
				class="q-mb-md full-width"
			>
				<q-input
					outlined
					v-model="user"
					label="Usuário"
					class="full-width"
					@keyup.enter="goToNextPage"
				/>

				<span
					v-if="$v.user.$error"
					class="text-negative"
				>
					O nome do usuário é obrigatório
				</span>
			</div>

			<q-btn
				color="primary"
				label="Pesquisar"
				no-caps
				class="full-width button-size text-h6"
				@click="goToNextPage"
			/>
		</div>
	</q-page>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
	data() {
		return {
			user: '',
		}
	},

	validations: {
		user: {
			required,
		}
	},

	methods: {
		goToNextPage() {
			this.$v.$touch();

			if (!this.$v.$error) {
				this.$router.push({
					name: 'github.details',
					params: {
						user: this.user,
					},
				});
			}
		}
	},
}
</script>

<style scoped>
.image-size {
	max-width: 200px;
}

.button-size {
	height: 56px;
}
</style>
