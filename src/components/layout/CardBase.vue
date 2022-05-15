<script lang="ts" setup>
import {defineProps} from "vue"

defineProps<{
  padding?: number,
  innerClass?: string
}>()

</script>

<template>
  <div class="cardBase d-flex justify-content-center align-items-center"
       :style="{ 'padding' : (typeof padding === 'number' ? `${padding}px` : '0px') }">
    <div class="inner d-flex justify-content-center align-items-center" :class="innerClass">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="sass" src="../../assets/sass/layout/cardBase.sass"></style>