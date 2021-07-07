<template>
	<v-card>
		<v-img
			height="250"
			v-if="article.img"
			:src="article.img"
		/>
		<v-card-title v-if="article.title">
			{{ article.title }}
			<v-btn
				icon
				color="teal accent-4"
				:to="{ name: 'blog-slug', params: { slug: article.slug } }"
				nuxt
			><v-icon>mdi-open-in-new</v-icon></v-btn>
		</v-card-title>
		<v-card-subtitle v-if="article.authors">
			by {{ article.authors.join(', ') }}
		</v-card-subtitle>
		<v-card-text v-if="article.description">
			{{ article.description }}
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	props: {
		article: Object
	}
}
</script>