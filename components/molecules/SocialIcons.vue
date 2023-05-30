<script lang="js">
  import styles from "news-site-css/dist/icons-group.module.css";
  export default {
    props: {
        onClick: Function
    },
    data () {
      return {
        styles
      }
    }
  }
</script>

<template>
    <div :class="styles['icons-group']">
            <ul :class="styles['icons-group-list']">
                <li :class="styles['icons-group-item']">
                    <a href="#" id="footer-link-social-facebook">
                        <div :class="styles['group-icon']">
                            <FacebookIcon />
                        </div>
                    </a>
                </li>
                <li :class="styles['icons-group-item']">
                    <a href="#" id="footer-link-social-instagram">
                        <div :class="styles['group-icon']">
                            <InstagramIcon />
                        </div>
                    </a>
                </li>
                <li :class="styles['icons-group-item']">
                    <a href="#" id="footer-link-social-twitter">
                        <div :class="styles['group-icon']">
                            <TwitterIcon />
                        </div>
                    </a>
                </li>
            </ul>
        </div>
</template>
