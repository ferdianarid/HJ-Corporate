<template>
       <div>
              <CBox w="100vw">
                     <CText
                            bgClip="text"
                            fontSize="6xl"
                            fontWeight="extrabold"
                            text-align="center"
                     >
                            Users Page
                     </CText>
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
						hid: 'hjcorporate - users',
						name: 'hjcorporate',
						content: 'hjcorporate is a company'
					}
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
              }
       },
       data () {
              return {
                     title: "HJ Corporate - Users Page"
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