<template>
       <div class="container">
		<CBox w="auto" h="100vh" justify-content="center" mx="100px" pt="140px">
                     <CBox max-w="32rem" mx="auto" align="center">
                            <CHeading font-size="5xl" mb="4">
                                          HJ Corporate
                            </CHeading>
                            <CText font-size="md">
                                   Perusahaan di bidang Teknologi Informasi dengan menawarkan spesialisasi pada pembuatan Sistem Informasi, Mobile Aplication and Website Design.
                            </CText>
                     </CBox>
		</CBox>
	</div>
</template>

<script>
import { CText, CBox } from  "@chakra-ui/vue"
export default {
       head() {
		return {
			title: this.title,
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
					{
						hid: 'hjcorporate - about',
						name: 'hjcorporate',
						content: 'hjcorporate is a company'
					}
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
		}
	},
       data () {
		return {
			title: "HJ Corporate - About Page"
		}
	},
       name: "Product",
       components: {
              CText,
              CBox
       }
}
</script>

<style></style>