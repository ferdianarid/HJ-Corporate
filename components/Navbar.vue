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