<template>
	<div class="default-layout">
		<nav>nav</nav>
		<main>
			<Nuxt />
		</main>
		<footer>footer</footer>
	</div>
</template>

<script>
export default {
	mounted() {
		const rootElement = this.$el;
		const setTheme = (theme = "dark") => {
			console.log(`setting theme to ${theme}`);
			if (theme === "dark") rootElement.classList.add("dark");
			if (theme === "light") rootElement.classList.add("light");
		};

		// if dark mode is prefered
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			// dark mode
			setTheme("dark");
		}

		// watch for color scheme changes
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", (e) => {
				const newColorScheme = e.matches ? "dark" : "light";
				setTheme(newColorScheme);
			});
	},
};
</script>

<style>
html {
}

*,
*::before,
*::after {
	box-sizing: border-box;
}
</style>
