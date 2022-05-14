<script lang="ts" setup>

import {computed, defineAsyncComponent, defineProps, ref} from "vue"
import store from "../../store"

const HeaderOneItem = defineAsyncComponent(() => import("./HeaderItem.vue"))
const MobileMenu = defineAsyncComponent(() => import("./MobileMenu.vue"))

const menu_items = ref([
  { href: "/", text: "صفحه اصلی" },
  { href: "/services", text: "خدمات ما" },
  { href: "/projects", text: "پروژه ها" },
  { href: "/projects/add", text: "ثبت پروژه" },
  { href: "/articles", text: "مقالات" },
  { href: "/about", text: "درباره ما" },
  { href: "/team", text: "تیم ما" },
])

defineProps<{
  fixed: boolean
}>()

const isMenuShow = computed({
  get() { return store.state.isMenuShow },
  set(newValue) { store.commit("setMenuState", newValue) }
})

</script>

<template>
  <MobileMenu :showMenu="isMenuShow" @closeMenu="isMenuShow = false"/>
  <header class="d-flex justify-content-center align-items-stretch" :class="{ 'fixed': fixed === true }">
    <div class="row m-0 w-100">
      <div class="col-2 d-flex justify-content-center align-items-center s1">
        <p class="m-0 d-flex justify-content-center align-items-center"><img src="../../assets/img/icon/icon_phone_gray.svg" alt="Phone">021-55823262</p>
        <img src="../../assets/img/icon/icon_menu_gray.svg" class="d-none" alt="menu" @click="isMenuShow = !isMenuShow">
      </div>
      <div class="col-8 s2 d-flex d-flex justify-content-center align-items-center" dir="rtl">
        <HeaderOneItem v-for="(item, index) in menu_items" :key="item" :text="item.text" :to="item.href" :spec="menu_items.length - 1 !== index"/>
      </div>
      <div class="col-2 d-flex justify-content-center align-items-center s3">
        <img src="../../assets/img/brand/logo.png" alt="Vida">
      </div>
    </div>
  </header>
</template>

<style scoped lang="sass" src="../../assets/sass/layout/header.sass"></style>