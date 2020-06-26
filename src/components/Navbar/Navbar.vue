<template>
	<md-toolbar class="md-primary">
		<div class="md-toolbar-row">
			<div class="md-toolbar-section-start">
                <slot name="start"></slot>
			</div>
			<div class="md-toolbar-section-end">
                <slot name="end"></slot>
			</div>
		</div>
	</md-toolbar>
</template>

<script>

export default {
    name: "Navbar"
};
</script>
