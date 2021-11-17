<template>
       <CBox w="18rem" border-width="1px" rounded="lg" overflow="hidden" mx="20px">
              <CImage :src="property.imageUrl" :alt="property.imageAlt" />
                     <CBox  p="6" align="left">
                            <CBox d="flex" align-items="baseline">
                                   <CBadge rounded="full" px="2" variant-color="green">
                                          New
                                   </CBadge>
                                   <CBox
                                                 color="gray.400"
                                                 font-weight="semibold"
                                                 letter-spacing="wide"
                                                 font-size="xs"
                                                 text-transform="uppercase"
                                                 ml="2"
                                          >
                                          {{ property.beds }} beds &bull; {{ property.baths }} baths
                                   </CBox>
                            </CBox>
                            <CBox
                                          mt="1"
                                          font-weight="semibold"
                                          as="h4"
                                          line-height="tight"
                                          is-truncated
                                   >
                                          {{ property.title }}
                            </CBox>
                            <CBox>
                                   {{ property.formattedPrice }}
                                   <CBox as="span" color="white" fontSize="sm">
                                   / week
                                   </CBox>
                            </CBox>
                            <CBox d="flex" mt="2" align-items="center">
                                   <CIcon
                                          v-for="(_, i) in Array(5).fill('')"
                                          name="star"
                                          :key="i"
                                          :color="i < property.rating ? 'green.500' : 'gray.300'"
                                   />
                                   <CBox as="span" ml="2" color="white" font-size="sm">
                                          {{ property.reviewCount }} reviews
                            </CBox>
                     </CBox>
              </CBox>
       </CBox>
</template>
<script>
export default {
       name: "Card",
       data () {
              return {
                     property: {
                            imageUrl: "https://bit.ly/2Z4KKcF",
                            imageAlt: "Rear view of modern home with pool",
                            beds: 3,
                            baths: 2,
                            title: "Modern home in Los Angeles US",
                            formattedPrice: "$1,900.00",
                            reviewCount: 34,
                            rating: 4,
                     }
              }
       }
}
</script>
<style>

</style>