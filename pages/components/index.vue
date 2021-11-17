<template>
       <div class="container">
		<CBox w="auto" justify-content="center" mx="100px" pt="32px">
                     <CBox max-w="32rem" mx="auto" align="center" pb="32px">
                            <CHeading font-size="5xl" mb="4">
                                          Components
                            </CHeading>
                            <CText font-size="md">
                                   Components yang akan digunakan untuk membuat pages yang baik dan interaktif.
                            </CText>
				<CFlex justify="start" mt="32px">
					<Card />
					<Card />
				</CFlex>
                     </CBox>
		</CBox>
	</div>
</template>

<script>
import { CText, CBox } from  "@chakra-ui/vue"
import Card from "../../components/Card.vue"
export default {
       head() {
		return {
			title: this.title,
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
					{
						hid: 'hjcorporate - components',
						name: 'hjcorporate',
						content: 'hjcorporate is a company'
					}
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
		}
	},
       data () {
		return {
			title: "HJ Corporate - Components Page"
		}
	},
       name: "Components",
       components: {
              CText,
              CBox,
		Card
       }
}
</script>

<style></style>