<script lang="js">
import { login } from "~/data/buttons";
import navStyles from "news-site-css/dist/nav.module.css";
import buttonStyles from "news-site-css/dist/button.module.css";
export default {
  data () {
    return {
      login,
      navStyles,
      buttonStyles,
      showPortal: false,
    }
  },
  methods: {
      logIn() {
        console.log('logIn clicked!');
      },
      openPortal() {
        this.showPortal = true;
      },
      closePortal() {
        this.showPortal = false;
      }
  },
}
</script>

<template>
  <nav
    :class="navStyles['page-navigation']"
    aria-label="main menu"
  >
    <div :class="navStyles['page-navigation-row']">
      <div :class="navStyles['page-navigation-column-left']">
        <Navbar :callback="openPortal" />
      </div>
      <div :class="navStyles['page-navigation-column-right']">
        <button
          id="login-button"
          :class="[buttonStyles.button, buttonStyles['secondary-button'], navStyles['nav-button']]"
          @click="logIn"
        >
          {{ login.label }}
        </button>
      </div>
    </div>
  </nav>
  <Teleport to="body">
    <Sidebar
      v-show="showPortal"
      :on-close="closePortal"
    />
  </Teleport>
</template>
