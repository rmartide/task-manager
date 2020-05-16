<template>
	<md-button class="md-icon-button" @click="$emit('changeTheme', theme)">
		<md-icon :class="active">{{icon}}</md-icon>
	</md-button>
</template>

<script>
export default {
	name: "SpeedDialContentButton",
	props: {
		theme: String,
		icon: String
	},
	computed: {
		active() {
			return this.$material.theming.theme  === this.theme ? 'active' : '';
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