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
	color: #2c3e50;
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
</style>
