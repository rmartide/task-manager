<template>
	<md-toolbar class="md-primary">
		<div class="md-toolbar-row md-toolbar-offset">
			<div class="md-toolbar-section-start">
				<div class="md-title">
					<h3 class="md-title" style="flex: 1">Remember the task</h3>
				</div>
			</div>
			<div class="md-toolbar-section-end">
                <routered-button route="/create" icon="add"></routered-button>
			</div>
		</div>
	</md-toolbar>
</template>

<script>

export default {
    name: "Navbar"
};
</script>
