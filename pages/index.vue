<template>
	<div class="container">
		<!-- Main Canvas -->
		<CBox w="auto" h="auto" justify-content="center" :mx="['20px','35px','50px','100px']" pt="60px">
			<CFlex :direction="['column','column','row','row']">
				<CBox maxW="32rem">
					<!-- Pre Heading -->
					<CText mb="4" :mt="['48px','36px','24px','0px']">
						<CFlex justify-content="start" align="center">
							<b mr="20px">HJ Corporate</b>&nbsp;&nbsp;
							<hr width="100px" color="white">
						</CFlex>
					</CText>
					<!-- Heading -->
					<CHeading mb="4" font-size="5xl">
						Membantu mengubah <span class="highlightHeading"> produk anda </span> menjadi luar biasa.
					</CHeading>
					<!-- Sub Heading -->
					<CText fontSize="md">
						Perusahaan di bidang Teknologi Informasi dengan menawarkan spesialisasi pada pembuatan Sistem Informasi, Mobile Aplication and Website Design.
					</CText>
					<!-- Call to Action -->
					<CFlex>
						<CButton size="lg" variant-color="green" mt="24px">
							Hubungi Kami
						</CButton>
						<CButton size="lg" variant="outline" variant-color="green" mt="24px" ml="12px">
							Pelajari Dulu
						</CButton>
					</CFlex>
				</CBox>
				<!-- Hero Image -->
				<CBox maxW="36rem" :mt="['64px','64px','48px','48px']" ml="2rem">
					<img class="animateImage" src="../static/hero.png" alt="isometrichero">
				</CBox>
			</CFlex>
		</CBox>
		<!-- Section Benefits -->
		<CBox w="auto" justify-content="center" :mx="['20px','35px','50px','100px']" :mt="['20px','32px','64px','32px']" pt="16px">
			<CText mb="4">
				<CFlex justify-content="start" align="center">
					<b mr="20px">Benefits</b>&nbsp;&nbsp;
					<hr width="100px" color="white">
				</CFlex>
			</CText>
			<!-- Heading Benefits -->
			<CHeading mb="4" font-size="5xl">
				Keuntungan menjadi partner <br> kerja <span class="highlightHeading"> HJ Corporate. </span>
			</CHeading>
			<!-- Sub Heading Benefits -->
			<CText fontSize="md">
				Mempunyai pelayanan dan sistem kerja yang baik dan bisa membuat produk yang berkualitas.
			</CText>
		</CBox>
		<!-- Cards Benefits-->
		<CBox w="auto" :mx="['20px','35px','50px','100px']" mt="36px" pb="56px">
			<CFlex :direction="['column','column','row','row']" justify-content="space-between">
				<!-- Items Benefits -->
				<CBox :width="['100%','50%','50%','32%']" :mt="['8px','32px','16px','16px']">
					<CBox borderWidth="1px" rounded="lg" overflow="hidden" p="6">
						<CText fontSize="24px" fontWeight="600">
							Komunikasi yang jelas dan baik.
						</CText>
						<CText fontSize="md" pt="4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</CText>
					</CBox>
				</CBox>
				<!-- Items Benefits -->
				<CBox :width="['100%','50%','50%','32%']" :mt="['32px','32px','16px','16px']">
					<CBox borderWidth="1px" rounded="lg" overflow="hidden" p="6">
						<!-- Items Benefi1ts -->
						<CText fontSize="24px" fontWeight="600">
							Proyek sesuai dari permintaan client.
						</CText>
						<CText fontSize="md" pt="4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</CText>
					</CBox>
				</CBox>
				<!-- Items Benefits -->
				<CBox :width="['100%','50%','50%','32%']" :mt="['32px','32px','16px','16px']">
					<CBox borderWidth="1px" rounded="lg" overflow="hidden" p="6">
						<!-- Items Benefi1ts -->
						<CText fontSize="24px" fontWeight="600">
							Ketepatan dalam waktu pengerjaan.
						</CText>
						<CText fontSize="md" pt="4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</CText>
					</CBox>
				</CBox>
			</CFlex>
		</CBox>
		<!-- Partner Section --> 
		<CBox w="auto" :mx="['20px','35px','50px','100px']" :mt="['64px','48px','24px','12px']" pb="56px">
			<CFlex :direction="['column','column','row','row']" :justify-content="['center','center','start','start']" align-items="center">
				<CHeading as="h1">
					Partner Kami
				</CHeading>
				<CBox w="auto" maxW="18rem" :mt="['64px','48px','12px','8px']" :ml="['16px','32px','64px','128px']">
					<img src="../static/spotify.png" alt="spotify">
				</CBox>
				<CBox w="auto" maxW="18rem" :mt="['64px','48px','12px','8px']" :ml="['16px','32px','64px','128px']">
					<img src="../static/youtube.png" alt="youtube">
				</CBox>
			</CFlex>
		</CBox>
		<!-- Services Provide -->
		<CBox w="auto" :mx="['20px','35px','50px','100px']" mt="36px" pb="56px">
			<CHeading as="h1">
				Bidang bisnis yang kami tawarkan.
			</CHeading>
			<CText fontSize="md" pt="4">
				Kami menawarkan berbagai layanan seperti
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