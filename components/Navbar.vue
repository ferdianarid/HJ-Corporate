<template lang="">
       <CBox w="auto" fonts="heading" h="70px" :mx="['20px','35px','50px','100px']">
              <CFlex :direction="['column','column','row','row']" justify-content="start" align-items="start">
                     <CText font-size="20px" font-weight="800" mt="18px">
                            <CFlex w="10rem">
                                   <NuxtLink to="/">
                                          <span style="color: #50b9ff;">HJ Corporate&trade;</span>
                                   </NuxtLink>
                            </CFlex>
                     </CText>
                     <CFlex justify-content="start">
                            <NuxtLink to="/">
                                   <CText font-size="xs" :mx="['0px','16px','16px','32px']" font-weight="bold" mt="24px" textTransform="uppercase">Homepage</CText>
                            </NuxtLink>
                            <NuxtLink to="/components">
                                   <CText font-size="xs" :mx="['16px','16px','16px','32px']" font-weight="bold" textTransform="uppercase" mt="24px">Components</CText>
                            </NuxtLink>
                            <NuxtLink to="/about">
                                   <CText font-size="xs" :mx="['0px','16px','16px','32px']" font-weight="bold" textTransform="uppercase" mt="24px">About</CText>
                            </NuxtLink>
                     </CFlex>
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