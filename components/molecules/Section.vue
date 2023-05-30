<script lang="js">
import styles from "news-site-css/dist/layout.module.css";
export default {
    props: {
        data: Object,
    },
  data() {
    return {
      styles
    }
  }
}
</script>

<template>
    <div v-if="data?.name" :id="data.id" :class="styles['row-header']">
        <h2>{{data.name}}</h2>
    </div>
     <section :class="styles.row">
        <Article v-for="articles in data.articles" :data="articles" />
     </section>
</template>
