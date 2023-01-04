<template>
  <p class="clearfix mb-0">
    <span class="float-md-right d-none d-md-block d-md-inline-block mt-25">
      <strong>&nbsp;SmartInvest</strong>
    </span>
  </p>
</template>

<script>
import { VBPopover } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  name: 'AppFooter',
  components: {},
  directives: {
    'b-popover': VBPopover,
    Ripple,
  },
}
</script>
