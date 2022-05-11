<script lang="ts" setup>
import {defineProps} from "vue"

defineProps<{
  to: string,
  text: string
}>()
</script>

<template>
  <router-link class="mobileMenuItem text-decoration-none d-flex justify-content-center align-items-center" :to="to" active-class="ac">{{ text }}</router-link>
</template>

<style scoped lang="sass" src="../../assets/sass/layout/mobileMenuItem.sass"></style>