<script setup lang="ts">
	useHead({
    title: "Restaurant Portfolio",
		link: [
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,600,700 |Material+Icons",
			},
      {
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap",
			},
		],
		script: [
			{
				crossorigin: "anonymous",
				src: "https://kit.fontawesome.com/0db2cbd175.js",
			},
		],
	});
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
