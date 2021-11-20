<template>
       <CBox w="auto" :mx="['20px','35px','50px','100px']" mt="36px" pb="56px">
              <hr width="auto">
              <CFlex  mt="8" :direction="['column', 'column','row','row']">
                     <!-- Footer Left Section -->
                     <CBox :w="['100%','100%','30%','30%']">
                            <CText font-weight="bold" font-size="1rem">
                                   Alamat Kantor
                            </CText>
                            <CText font-size="md">
                                   ab quas beatae iste debitis voluptas. Aperiam est quam provident.
                            </CText>
                     </CBox>
                     <!-- Whitespace -->
                     <CBox :mt="['2rem','2rem','0','0']" :w="['100%','100%','40%','40%']"></CBox>
                     <!-- Footer Right Section -->
                     <CBox :w="['100%','100%','30%','30%']">
                            <CFlex direction="column">
                                   <!-- Social Media -->
                                   <CFlex>
                                          <CText font-size="md" mr="3">Facebook</CText>
                                          <CText font-size="md" mr="3">Instagram</CText>
                                          <CText font-size="md" mr="3">LinkedIn</CText>
                                          <CText font-size="md">Pinterest</CText>
                                   </CFlex>
                                   <!-- HJ Corporate -->
                                   <CFlex :justify-content="['flex-start','flex-start','flex-end','flex-end']">
                                          <CText font-size="md" font-weight="bold" mt="1.5rem">Copyright 2021. HJ Corporate.</CText>
                                   </CFlex>
                            </CFlex>
                     </CBox>
              </CFlex>
       </CBox>
</template>
<script>
export default {
       name: "Footer"
}
</script>
<style>
       
</style>