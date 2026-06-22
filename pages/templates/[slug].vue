<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
await navigateTo(`/template-site-internet-equestre/${slug}`, { redirectCode: 301 })
</script>

<template></template>
