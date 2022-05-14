<script lang="ts" setup>
import {defineProps} from "vue"

defineProps<{
  to: string,
  text: string,
  spec: boolean
}>()
</script>

<template>
  <router-link class="headerOneItem text-decoration-none d-flex justify-content-center align-items-center" :to="to" active-class="ac">{{ text }} <div v-if="spec" class="circle"></div></router-link>
</template>

<style scoped lang="sass" src="../../assets/sass/layout/headerItem.sass"></style>