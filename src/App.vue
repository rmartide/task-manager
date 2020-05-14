<template>
	<div id="app">
		<Navbar>
			<template #start>
				<routered-button route="/" icon="home"></routered-button>
				<div class="md-title">
					<h3 class="md-title" style="flex: 1">Remember the task</h3>
				</div>
			</template>
			<template #end>
				<!-- <md-button @click="changeTheme" class="md-icon-button">
					<md-icon>color_lens</md-icon>
				</md-button>-->
				<speed-dial class="theme-changer"></speed-dial>
				<routered-button route="/create" icon="add"></routered-button>
			</template>
		</Navbar>
		<router-view />
	</div>
</template>

<script>
import { Navbar } from '@/components';

export default {
	name: 'App',
	components: {
		Navbar
	}
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}

.no-box-shadow {
	box-shadow: 0 0 0 !important;
}

.theme-changer {
	position: absolute;
	top: 12px;
	right: 50px;
}
</style>
