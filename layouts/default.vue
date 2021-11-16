<template>
	<div class="container">
		<CThemeProvider>
			<CColorModeProvider>
				<CBox maxW="1440px" font-family="body" as="main" class="main">
					<CReset />
					<div class="navbar" fonts="heading" h="100px">
						<NuxtLink to="/">Homepage</NuxtLink>
						<NuxtLink to="/product">Product</NuxtLink>
						<NuxtLink to="/users">Users</NuxtLink>
						<NuxtLink to="/about">About</NuxtLink>
					</div>
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
	head: {
		title: 'HJ Corporate - Make a new World',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					hid: 'hjcorporate',
					name: 'hjcorporate',
					content: 'hjcorporate is a company'
				}
			],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
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
.main {
	background-color: #000000;
	background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
	color: #f2e5ff;
}
</style>