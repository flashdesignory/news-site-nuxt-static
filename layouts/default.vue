<script setup lang="js">
  const route = useRoute();
</script>

<script lang="js">
  import styles from "news-site-css/dist/layout.module.css";
  import { content } from "../data/content";
  export default {
    data () {
      return {
        content,
        styles,
        showMessage: false,
      }
    },
    mounted() {
        this.showMessage = content[this.$route.name].message;      
    },
    methods: {
        openMessage() {
            this.showMessage = true;
        },
        closeMessage() {
            this.showMessage = false;
        }
    }
  }
</script>

<template>
    <div :class="styles.page">
        <Header />
        <Navigation />
        <Message
            v-if="content[route.name].message"
            v-show="showMessage"
            :onClose="closeMessage"
            :message="content[route.name].message" />
        <Main>
            <slot/>
        </Main>
        <Footer />
    </div>
</template>
