<template>
  <b-nav
    align="right"
    style="width:100%"
    class="nav text-right text-nowrap ml-auto"
  >
    <b-nav-item><dark-toggler /></b-nav-item>
  </b-nav>
</template>

<script>
import {
  BNav, BNavItem,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import DarkToggler from '@/@core/layouts/components/app-navbar/components/DarkToggler.vue'

export default {
  components: {
    BNav,
    BNavItem,
    DarkToggler,
  },
  directives: {
    Ripple,
  },
}
</script>
