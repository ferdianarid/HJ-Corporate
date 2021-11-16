<template>
	<div class="container">
		<CBox w="auto" maxW="1440px" h="100vh" justify-content="center" mx="100px">
			<CBox max-w="32rem">
			<c-heading mb="4">Membantu mengubah produk anda menjadi luar biasa.</c-heading>
			<CText font-size="xl">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae laboriosam aliquid temporibus! Eos, ex vitae nihil provident ducimus.
			</CText>
			<CButton size="lg" variant-color="green" mt="24px">
			Create a free account
			</CButton>
			</CBox>
		</CBox>
	</div>
</template>

<script lang="js">
import {
	CBox,
	CFlex,
	CHeading,
	CText,
	CButton
} from '@chakra-ui/vue'

export default {
	head() {
		return {
			title: this.title,
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
					{
						hid: 'hjcorporate - homepage',
						name: 'hjcorporate',
						content: 'hjcorporate is a company'
					}
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
		}
	},
	name: 'App',
	components: {
		CBox,
		CFlex,
		CHeading,
		CText,
		CButton
	},
	data () {
		return {
			title: "HJ Corporate - Homepage"
		}
	},
	computed: {},
	methods: {}
}
</script>
