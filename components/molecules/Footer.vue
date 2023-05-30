<script lang="js">
  import styles from "news-site-css/dist/footer.module.css";
  export default {
    data () {
      return {
        styles
      }
    }
  }
</script>

<template>
    <footer :class="styles['page-footer']">
        <div :class="styles['footer-row']">
          <div :class="styles['footer-column-center']">© {{new Date().getFullYear()}} No Rights Reserved</div>
        </div>
    </footer>
</template>
