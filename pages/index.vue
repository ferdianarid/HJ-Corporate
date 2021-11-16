<template>
	<div class="container">
		<CBox w="auto" h="100vh" justify-content="center" mx="100px" pt="100px">
			<CBox max-w="32rem">
				<CText font-size="md" font-bo>
					HJ Corporate
				</CText>
				<CHeading mb="4">
					Membantu mengubah produk anda menjadi luar biasa.
				</CHeading>
				<CText font-size="xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae laboriosam aliquid temporibus! Eos, ex vitae nihil provident ducimus.
				</CText>
				<CFlex>
					<CButton size="lg" variant-color="green" mt="24px">
						Hubungi Kami
					</CButton>
					<CButton size="lg" variant="outline" variant-color="green" mt="24px" ml="12px">
						Pelajari Dulu
					</CButton>
				</CFlex>
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
