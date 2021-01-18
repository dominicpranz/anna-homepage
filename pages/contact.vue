<template>
	<div>
		<section>contact info</section>
		<section>CV</section>
		<h3>
			here we want download button with the cv pdf which we can toggle on or off
			in the backend
		</h3>
		<li v-for="post of posts" :key="post.slug">
			<NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
		</li>
		----------
		<h2>{{ post.title }}</h2>
		<nuxt-content :document="post" />
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params, error }) {
		const posts = await $content("blog").fetch();
		let post;
		try {
			post = await $content("blog", params.slug).fetch();
			// OR const article = await $content(`articles/${params.slug}`).fetch()
			post = post[0];
			console.log(post);
		} catch (e) {
			error({ message: "Blog Post not found" });
		}

		return {
			post,
			posts,
		};
	},
};
</script>

<style lang="scss">
h1 {
}
</style>
