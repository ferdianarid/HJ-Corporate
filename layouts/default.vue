<template>
	<div class="container">
		<CThemeProvider>
			<CColorModeProvider>
				<CBox font-family="body" as="main">
					<Nuxt />
				</CBox>
			</CColorModeProvider>
		</CThemeProvider>
	</div>
</template>
<script>
import {
	CThemeProvider,
	CColorModeProvider,
	CReset,
	CBox
} from '@chakra-ui/vue'

export default {
	name: 'App',
	components: {
		CThemeProvider,
		CColorModeProvider,
		CReset,
		CBox
	}
}
</script>

<style>
* {
	font-family: "SF Pro Display", sans-serif;
}
.nav-link {
	margin: 100px;
}
</style>