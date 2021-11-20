<template>
<!-- Card Portfolio -->
       <CFlex :direction="['column','column','row','row']" borderWidth="1px" justify-content="space-between" mt="24px">
              <!-- Card Images -->
              <CBox :pr="['0px','0px','0px','6px']" :width="['100%','100%','50%','50%']">
                     <img src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80" alt="workdesk">
              </CBox>
              <!-- Card Description -->
              <CBox p="6" :pr="['0px','0px','0px','12px']" :width="['100%','100%','50%','50%']">
                     <CHeading>Design Landing Page Kantor Pemerintahan Gubernur Jateng.</CHeading>
                     <CText font-size="16px" pt="24px">Redesign Landing Pages Kantor Pemerintahan Gubernur Jateng. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ab.</CText>
                     <CFlex mt="4">
                            <CBox bg="blue.300" pt="2" pb="2" pl="4" pr="4" mr="6px" border-radius="25px">
                                   <CText font-weigth="bold" fontSize=".75rem">Website Design</CText>
                            </CBox>
                            <CBox bg="blue.300" pt="2" pb="2" pl="4" pr="4" mr="6px" border-radius="25px">
                                   <CText font-weigth="bold" fontSize=".75rem">Development</CText>
                            </CBox>
                     </CFlex>
              </CBox>
       </CFlex>
</template>
<script>
export default {
       name: "CardPortfolio"
}
</script>
<style>
       
</style>