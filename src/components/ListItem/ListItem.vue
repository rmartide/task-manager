<template>
	<div class="list-item-container">
		<md-card md-with-hover class="md-accent">
			<md-ripple>
				<md-card-header>
					<div class="md-title" data-spec="listItemName">{{name}}</div>
				</md-card-header>
			</md-ripple>
		</md-card>
	</div>
</template>

<script>
export default {
    name: "ListItem",
    props: {
        name: String
    }
};
</script>

<style lang="scss" scoped>

.list-item-container {
	width: 320px;
	margin: auto;
	margin-bottom: 10px;
}
</style>