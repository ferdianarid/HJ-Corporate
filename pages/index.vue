<template>
	<div class="container">
		<CBox w="auto" h="100vh" justify-content="center" mx="100px" pt="60px">
			<CFlex>
			<CBox max-w="32rem">
				<CText mb="4">
					<CFlex justify-content="start" align="center">
						<b mr="20px">HJ Corporate</b>&nbsp;&nbsp;
						<hr width="100px" color="white">
					</CFlex>
				</CText>
				<CHeading mb="4" font-size="5xl">
					Membantu mengubah <span class="highlightHeading"> produk anda </span> menjadi luar biasa.
				</CHeading>
				<CText font-size="md">
					Perusahaan di bidang Teknologi Informasi dengan menawarkan spesialisasi pada pembuatan Sistem Informasi, Mobile Aplication and Website Design.
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
			<CBox max-w="36rem" mt="48px" ml="2rem">
				<img class="animateImage" src="../static/hero.png" alt="isometrichero">
			</CBox>
			</CFlex>
		</CBox>
		<CBox w="auto" justify-content="center" mx="100px" mt="36px" pt="16px">
			<CText mb="4">
				<CFlex justify-content="start" align="center">
					<b mr="20px">Discovery</b>&nbsp;&nbsp;
					<hr width="100px" color="white">
				</CFlex>
			</CText>
			<CHeading mb="4" font-size="5xl">
				Keuntungan menjadi partner kerja <span class="highlightHeading"> HJ Corporate </span>
			</CHeading>
			<CText font-size="md">
				Mempunyai pelayanan dan sistem kerja yang baik dan bisa membuat produk yang berkualitas.
			</CText>
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

<style>
span.highlightHeading {
	color: #50b9ff;
}
.animateImage {
	animation: animate 3s ease-out infinite;
	transition: none;
}
@keyframes animate {
	0% {
		transform: translateY(0px);
	} 50% {
		transform: translateY(-20px);
	} 100% {
		transform: translateY(0px)
	}
}
</style>