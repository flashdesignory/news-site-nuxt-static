<script setup lang="js">
    const route = useRoute()
</script>

<template>
    <div>{{ route.name }}</div>
    <div> Current page: <code>{{ route.path }}</code></div>
</template>
