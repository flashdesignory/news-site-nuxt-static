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
    <div v-for="section in content[route.name].sections">
        {{ section.name }}
    </div>
</template>
