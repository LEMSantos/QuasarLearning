<template>
	<q-page
		class="window-height window-width bg-grey-3"
	>
		<div
			v-if="loading"
			class="row justify-center items-center fit"
		>
			<q-spinner-hourglass
				color="primary"
				size="6em"
			/>
		</div>

		<div v-else>
			<user-details-header
				:avatar="user.avatar_url"
				:name="user.name"
				:followers="user.followers"
				:repos="user.public_repos"
				:stars="starsCount"
				@back-button-click="$router.back()"
			/>

			<q-scroll-area
				:thumb-style="thumbStyle"
				class="scroll-area-height q-py-md"
			>
				<q-list>
					<q-expansion-item
						v-for="(repo,index) in userRepos"
						:key="index"
						expand-separator
						:icon="getIcon(repo)"
						:label="repo.name"
						:caption="repo.language"
					>
						<q-card>
							<q-card-section>
								{{ repo.description ? repo.description : 'Sem descrição'}}
							</q-card-section>
						</q-card>
					</q-expansion-item>
				</q-list>
			</q-scroll-area>
		</div>
	</q-page>
</template>

<script>
import UserDetailsHeader from '../components/UserDetailsHeader';

export default {
	components: {
		UserDetailsHeader,
	},

	data() {
		return {
			user: {},
			userRepos: {},
			loading: false,
			starsCount: 0,
		}
	},

	computed: {
		thumbStyle () {
			return {
				right: '2px',
				borderRadius: '5px',
				backgroundColor: '#027be3',
				width: '5px',
				opacity: 0.75
			};
		},
	},

	methods: {
		getIcon(repo) {
			if (repo.fork) {
				return 'fas fa-code-branch';
			}

			return 'fas fa-book';
		}
	},

	mounted () {
		this.loading = true;

		this.$axios.get(`https://api.github.com/users/${this.$route.params.user}`)
			.then((response) => {
				this.user = response.data;

				this.$axios.get(this.user.repos_url)
					.then((response) => {
						this.userRepos = response.data;

						this.starsCount = this.userRepos.reduce((acc, value) => {
							return acc + value.stargazers_count;
						}, 0);
					});
			})
			.catch((error) => {
				this.$router.push('/notfound');
			})
			.finally(() => {
				this.loading = false;
			});
	},
}
</script>

<style scoped>
.scroll-area-height {
	height: calc(100vh - 250px);
}
</style>
