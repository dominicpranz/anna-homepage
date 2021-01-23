<template>
	<div
		class="container text-blue-700 dark:text-indigo-300 bg-indigo-300 dark:bg-indigo-900"
	>
		<section class="">hero-section</section>
		<section>Intro-text (+ image / graphic?)</section>
		<section>instagram-section</section>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	head() {
		return {
			// Authenticating with Netlify Identity --> Add the Netlify Identity Widget to the index page
			script: [
				{ src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
			],
		};
	},
});
</script>

<style lang="scss">
section {
	color: blue;

	@media (prefers-color-scheme: dark) {
		color: green;
	}

	@media (prefers-color-scheme: light) {
		color: red;
	}
}
</style>
