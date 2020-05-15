<template>
	<md-speed-dial md-direction="bottom">
		<md-speed-dial-target class="md-primary md-mini no-box-shadow">
			<md-icon class="md-morph-initial">color_lens</md-icon>
			<md-icon class="md-morph-final">edit</md-icon>
		</md-speed-dial-target>

		<md-speed-dial-content>
			<md-button class="md-icon-button" @click="changeTheme('kek')">
				<md-icon :class="getTheme === 'kek' ? 'active' : ''">directions</md-icon>
			</md-button>

			<md-button class="md-icon-button" @click="changeTheme('default-dark')">
				<md-icon :class="getTheme === 'default-dark' ? 'active' : ''">streetview</md-icon>
			</md-button>

			<md-button class="md-icon-button" @click="changeTheme('kekfault')">
				<md-icon :class="getTheme === 'kekfault' ? 'active' : ''">event</md-icon>
			</md-button>
		</md-speed-dial-content>
	</md-speed-dial>
</template>

<script>
export default {
	name: "SpeedDial",
	computed: {
		getTheme() {
			return this.$material.theming.theme;
		}
	},
	methods: {
		changeTheme(theme) {
			this.$material.theming.theme = theme;
		}
	}
};
</script>

<style lang="scss" scoped>
.md-toolbar .md-icon-button .md-icon.active {
	color: black !important;
}

.md-toolbar .md-icon-button .md-icon {
	color: rgba(0, 0, 0, 0.4) !important;
}
</style>