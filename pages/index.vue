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
					<CHeading mb="4" font-size="48px">
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
		<!-- Section Tentang Kami -->
		<CBox w="auto" justify-content="center" :mx="['20px','35px','50px','100px']" :mt="['20px','32px','64px','32px']" pt="16px">
			<CText mb="4">
				<CFlex justify-content="start" align="center">
					<b mr="20px">Tentang Kami</b>&nbsp;&nbsp;
					<hr width="100px" color="white">
				</CFlex>
			</CText>
			<!-- Heading Tentang -->
			<CHeading mb="4" font-size="48px">
				Kami selalu mengedepankan <span class="highlightHeading"> kepuasan </span> para partner kami demi menghasilkan sebuah produk yang diinginkan.
			</CHeading>
			<!-- Sub Heading Tentang -->
			<CText fontSize="md">
				Mempunyai pelayanan dan sistem kerja yang baik dan bisa membuat produk yang berkualitas.
			</CText>
			<CBox class="banner" width="auto" height="300px" mt="24px" pos="relative">
				<CBox bg="white" width="auto" borderWidth="1px" p="6" pos="absolute" top="0" right="0">
					<!-- <CHeading>
						200+ Users
					</CHeading> -->
				</CBox>
			</CBox>
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
			<CHeading mb="4"  font-size="48px">
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
						<!-- Items Benefits -->
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
			<CHeading mb="4"   font-size="48px">
				Bidang <span class="highlightHeading"> bisnis </span> yang kami tawarkan.
			</CHeading>
			<CText fontSize="md">
				Kami menawarkan berbagai layanan seperti
			</CText>
			<CFlex :direction="['column','row','row','row']" justify-content="space-between">
				<CBox :width="['100%','75%','49%','49%']" borderWidth="1px" rounded="lg" overflow="hidden" p="6" mt="24px">
					<img width="128px" src="../static/spotify.png" alt="spotify">
					<CText fontSize="32px" fontWeight="bold" pt="32px">
						HJ Technology
					</CText>
					<CText>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita deleniti quisquam deserunt omnis obcaecati quasi enim sunt earum. dolor sit amet consectetur adipisicing elit. Expedita deleniti quisquam deserunt omnis obcaecati quasi enim sunt earum.
					</CText>
				</CBox>
				<CBox :width="['100%','75%','49%','49%']" borderWidth="1px" rounded="lg" overflow="hidden" p="6" mt="24px">
					<img width="128px" src="../static/spotify.png" alt="spotify">
					<CText fontSize="32px" fontWeight="bold" pt="32px">
						HJ Design
					</CText>
					<CText>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita deleniti quisquam deserunt omnis obcaecati quasi enim sunt earum. dolor sit amet consectetur adipisicing elit. Expedita deleniti quisquam deserunt omnis obcaecati quasi enim sunt earum.
					</CText>
				</CBox>
			</CFlex>
			<CFlex :direction="['column','row','row','row']"  justify-content="space-between">
				<CBox :width="['100%','75%','49%','49%']" borderWidth="1px" rounded="lg" overflow="hidden" p="6" mt="24px">
					<img width="128px" src="../static/spotify.png" alt="spotify">
					<CText fontSize="32px" fontWeight="bold" pt="32px">
						HJ Consultant
					</CText>
					<CText>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita deleniti quisquam deserunt omnis obcaecati quasi enim sunt earum. dolor sit amet consectetur adipisicing elit. Expedita deleniti quisquam deserunt omnis obcaecati quasi enim sunt earum.
					</CText>
				</CBox>
				<CBox :width="['100%','75%','49%','49%']" borderWidth="1px" rounded="lg" overflow="hidden" p="6" mt="24px">
					<img width="128px" src="../static/spotify.png" alt="spotify">
					<CText fontSize="32px" fontWeight="bold" pt="32px">
						HJ Farm
					</CText>
					<CText>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita deleniti quisquam deserunt omnis obcaecati quasi enim sunt earum. dolor sit amet consectetur adipisicing elit. Expedita deleniti quisquam deserunt omnis obcaecati quasi enim sunt earum.
					</CText>
				</CBox>
			</CFlex>
		</CBox>
		<!-- Section Card Portfolio -->
		<CBox w="auto" :mx="['20px','35px','50px','100px']" mt="48px" pb="56px">
			<CFlex justify-content="start" align="center">
				<b mr="20px">Portfolio</b>&nbsp;&nbsp;
				<hr width="100px" color="white">
			</CFlex>
			<!-- Heading  Portfolio -->
			<CHeading mb="4"  font-size="48px">
				<span class="highlightHeading"> Proyek </span> yang pernah kami kerjakan.
			</CHeading>
			<!-- Sub Heading  Portfolio -->
			<CText fontSize="md">
				Mempunyai pelayanan dan sistem kerja yang baik dan bisa membuat produk yang berkualitas.
			</CText>
			<CardPortfolio />
		</CBox>
		<!-- Kolaborasi -->
		<CBox w="auto" :mx="['20px','35px','50px','100px']" mt="36px" pb="56px">
			<hr width="auto">
			<CFlex justify-content="start" align="center" mt="16">
				<b mr="20px">Berkolaborasi</b>&nbsp;&nbsp;
				<hr width="100px" color="white">
			</CFlex>
			<CHeading mb="4"   font-size="48px">
				Siap <span class="highlightHeading"> berkolaborasi </span> dengan kami ?
			</CHeading>
			<CText fontSize="md">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum eos debitis explicabo libero.
			</CText>
		</CBox>
		<!-- Question -->
		<CBox w="auto" :mx="['20px','35px','50px','100px']" mt="36px" pb="56px">
			<CFlex justify-content="space-between" :direction="['column', 'column','row','row']">
				<CBox :w="['100%','100%','50%','50%']">
					<CHeading mb="4"   font-size="48px">
						Belum memiliki <span class="highlightHeading"> ide </span> untuk proyek anda ?
					</CHeading>
				</CBox>
				<CBox :w="['100%','100%','50%','50%']">
					<CText fontSize="md" :pl="['0px','0px','6px','6px']">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum eos debitis explicabo libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet blanditiis alias illo, praesentium officia doloribus hic iste enim aliquam ut vero sit.
					</CText>
					<CButton variant="outline" :ml="['0','0','1','1']" mt="6">
						Agendakan Meeting Online
					</CButton>
				</CBox>
			</CFlex>
		</CBox>
		<!-- Footer Component -->
		<Footer />
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

import CardPortfolio from '~/components/CardPortfolio.vue'
import Footer from "../components/Footer.vue"
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
		CButton,
		CardPortfolio,
		Footer
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

.banner {
	background-image: url("https://images.unsplash.com/photo-1488998527040-85054a85150e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80");
	background-size: cover;
}

</style>