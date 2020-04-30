<template>
	<router-link :to="route" class="md-button md-icon-button">
		<div class="md-ripple">
			<div class="md-button-content">
				<md-icon>{{icon}}</md-icon>
			</div>
		</div>
	</router-link>
</template>

<script>
export default {
    name: "RouteredButton",
    props: {
        icon: String,
        route: String
    }
};
</script>
