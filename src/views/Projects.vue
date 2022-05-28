<script lang="ts" setup>
import {defineAsyncComponent} from "vue";

const ComingSoon = defineAsyncComponent(() => import("../components/public/ComingSoon.vue"))
</script>

<template>
  <div id="projects">
    <coming-soon/>
  </div>
</template>

<style scoped lang="sass">

</style>