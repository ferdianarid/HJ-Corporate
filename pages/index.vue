<template>
	<div class="container">
		<CBox
			d="flex"
			w="100vw"
			h="100vh"
			flex-dir="column"
			justify-content="center"
		>
			<CHeading text-align="center" mb="4">
				⚡️ Hello chakra-ui/vue
			</CHeading>
		</CBox>
	</div>
</template>

<script lang="js">
import {
	CBox,
	CFlex,
	CHeading
} from '@chakra-ui/vue'

export default {
	name: 'App',
	components: {
		CBox,
		CFlex,
		CHeading
	},
	data () {
		return {}
	},
	computed: {},
	methods: {}
}
</script>
