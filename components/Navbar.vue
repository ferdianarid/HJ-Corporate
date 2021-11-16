<template lang="">
       <CBox w="100%" fonts="heading" h="70px" px="100px">
              <CFlex justify-content="start" align-items="start">
                     <CText font-size="20px" font-weight="800" mt="18px">
                            <CFlex w="10rem">
                                   <NuxtLink to="/">
                                          <span style="color: #50b9ff;">HJ Corporate&trade;</span>
                                   </NuxtLink>
                            </CFlex>
                     </CText>
                     <NuxtLink to="/">
                            <CText font-size="xs" mx="16px" font-weight="bold" mt="24px" textTransform="uppercase">Homepage</CText>
                     </NuxtLink>
                     <NuxtLink to="/components">
                            <CText font-size="xs" mx="16px" font-weight="bold" textTransform="uppercase" mt="24px">Components</CText>
                     </NuxtLink>
                     <NuxtLink to="/about">
                            <CText font-size="xs" mx="16px" font-weight="bold" textTransform="uppercase" mt="24px">About</CText>
                     </NuxtLink>
                     <CMenu>
                     <CMenuButton>
                            Your Cats
                     </CMenuButton>
                     <CMenuList>
                     <CMenuItem h="48px">
                            <CImage
                                   size="2rem"
                                   rounded="full"
                                   src="https://placekitten.com/100/100"
                                   alt="Fluffybuns the destroyer"
                                   mr="12px"
                            />
                     <span>Fluffybuns the Destroyer</span>
                     </CMenuItem>
                     <CMenuItem h="40px">
                     <CImage
                     size="2rem"
                     rounded="full"
                     src="https://placekitten.com/120/120"
                     alt="Simon the pensive"
                     mr="12px"
                     />
                     <span>Simon the pensive</span>
                     </CMenuItem>
                     </CMenuList>
                     </CMenu>

              </CFlex>
       </CBox>
</template>
<script>
import {
       CBox,
       CImage,
       CFlex
} from '@chakra-ui/vue'
export default {
       name: "Navbar",
       components: {
              CBox,
              CImage,
              CFlex
       }
}
</script>
<style>
</style>