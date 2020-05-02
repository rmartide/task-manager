<template>
	<div>
		<md-card md-with-hover class="md-accent">
			<md-ripple>
				<md-card-header>
					<div class="md-title" data-spec="listItemName">{{ name }}</div>
				</md-card-header>
			</md-ripple>
		</md-card>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "ListItem",
	props: {
		name: String
	}
};
</script>

<style lang="scss" scoped>
.md-card {
	width: 320px;
	margin: 4px;
	display: inline-block;
	vertical-align: top;
}
</style>
