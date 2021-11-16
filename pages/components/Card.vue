<template>
       <div class="container">
		<CBox w="auto" h="100vh" justify-content="center" mx="100px" pt="140px">
                     <CBox max-w="32rem" mx="auto" align="center">
                            <CHeading font-size="5xl" mb="4">
                                          Card Components
                            </CHeading>
                            <CText font-size="md">
                                   Card component adalah component yang digunakan untuk menampilkan suatu produk.
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
						hid: 'hjcorporate - card components',
						name: 'cardcomponents',
						content: 'Card Components'
					}
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
		}
	},
       data () {
		return {
			title: "HJ Corporate - Card Components"
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