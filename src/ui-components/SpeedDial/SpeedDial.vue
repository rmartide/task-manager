<template>
	<md-speed-dial md-direction="bottom">
		<md-speed-dial-target class="md-primary md-mini no-box-shadow">
			<md-icon class="md-morph-initial">color_lens</md-icon>
			<md-icon class="md-morph-final">edit</md-icon>
		</md-speed-dial-target>

		<md-speed-dial-content>
			<speed-dial-content-button icon="directions" theme="kek" @changeTheme="changeTheme"></speed-dial-content-button>
			<speed-dial-content-button icon="streetview" theme="default-dark" @changeTheme="changeTheme"></speed-dial-content-button>
			<speed-dial-content-button icon="event" theme="kekfault" @changeTheme="changeTheme"></speed-dial-content-button>
		</md-speed-dial-content>
	</md-speed-dial>
</template>

<script>

import SpeedDialContentButton from './SpeedDialContentButton/SpeedDialContentButton';

export default {
	name: "SpeedDial",
	components: {
		SpeedDialContentButton
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