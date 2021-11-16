<template>
	<div class="container">
		<CBox w="100vw" h="100vh" justify-content="center">
			<navbar>
				<NuxtLink to="/">Home page</NuxtLink>
				<NuxtLink to="/product">Product</NuxtLink>
				<NuxtLink to="/users">Users</NuxtLink>
				<NuxtLink to="/about">About</NuxtLink>
			</navbar>
			<CHeading text-align="center" mb="4">
				⚡️ Fast Reload
			</CHeading>
			<CText
				variant-color="red"
				bgClip="text"
				fontSize="6xl"
				fontWeight="extrabold"
				text-align="center"
			>
			Company Name
			</CText>
		</CBox>
	</div>
</template>

<script lang="js">
import {
	CBox,
	CFlex,
	CHeading,
	CText
} from '@chakra-ui/vue'

export default {
	name: 'App',
	components: {
		CBox,
		CFlex,
		CHeading,
		CText
	},
	data () {
		return {}
	},
	computed: {},
	methods: {}
}
</script>
