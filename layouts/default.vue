<script lang="js">
  import styles from "news-site-css/dist/layout.module.css";
  export default {
    data () {
      return {
        styles
      }
    }
  }
</script>

<template>
    <div :class="styles.page">
        <Header />
        <Navigation />
        <Main>
            <slot/>
        </Main>
        <Footer />
    </div>
</template>
