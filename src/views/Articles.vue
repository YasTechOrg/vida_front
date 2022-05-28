<script lang="ts" setup>
import {defineAsyncComponent} from "vue";

const ComingSoon = defineAsyncComponent(() => import("../components/public/ComingSoon.vue"))
</script>

<template>
  <div id="articles">
    <coming-soon/>
  </div>
</template>

<style scoped lang="sass">

</style>