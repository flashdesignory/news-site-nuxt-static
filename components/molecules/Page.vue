<script setup lang="js">
    const route = useRoute();
</script>

<script lang="js">
    import { content } from "../../data/content";
    export default {
        data() {
            return {
                content
            }
        }
    }
</script>

<template>
    <Section v-for="section in content[route.name].sections" :data="section" />
</template>
