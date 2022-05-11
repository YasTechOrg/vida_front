<script setup lang="ts">

import {defineAsyncComponent, defineProps, ref} from "vue"

const menu_items = ref([
  { href: "/", text: "صفحه اصلی" },
  { href: "/services", text: "خدمات ما" },
  { href: "/projects", text: "پروژه ها" },
  { href: "/projects/add", text: "ثبت پروژه" },
  { href: "/articles", text: "مقالات" },
  { href: "/about", text: "درباره ما" },
  { href: "/team", text: "تیم ما" },
])

const MobileMenuItem = defineAsyncComponent(() => import("./MobileMenuItem.vue"))

defineProps<{
  showMenu: boolean
}>()
</script>

<template>
  <div class="mobileMenu" :class="{ showMenu: showMenu }">
    <div class="position-absolute d-flex flex-column align-items-center justify-content-center">
      <img src="../../assets/img/icon/icon_close_orange.svg" alt="close" @click="$emit('closeMenu')">
      <div class="line"></div>

      <div class="items">
        <MobileMenuItem v-for="item in menu_items" :key="item" :text="item.text" :to="item.href"/>
      </div>
    </div>
    <p class="mb-0 position-absolute d-flex justify-content-center align-items-center"><img src="../../assets/img/icon/icon_phone_white.svg" alt="Phone">021-55823262</p>
  </div>
</template>

<style lang="sass" src="../../assets/sass/layout/mobileMenu.sass" scoped></style>