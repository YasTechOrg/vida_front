<script setup lang="ts">
// INPUT
import {defineAsyncComponent} from "vue"

// LAYOUT
const HeaderOne = defineAsyncComponent(() => import("./components/layout/HeaderOne.vue"))
</script>

<template>
  <div id="main">
    <HeaderOne/>
    <router-view/>
  </div>
</template>

<style lang="sass" src="./assets/sass/public/style.sass"></style>
<style lang="sass">
// FONTS
@font-face
  font-family: dana
  font-style: normal
  font-weight: 10
  src: url("./assets/fonts/Dana-Hairline.ttf")

@font-face
  font-family: dana
  font-style: normal
  font-weight: 100
  src: url("./assets/fonts/Dana-Thin.ttf")

@font-face
  font-family: dana
  font-style: normal
  font-weight: 200
  src: url("./assets/fonts/Dana-UltraLight.ttf")

@font-face
  font-family: dana
  font-style: normal
  font-weight: 300
  src: url("./assets/fonts/Dana-Light.ttf")

@font-face
  font-family: dana
  font-style: normal
  font-weight: 500
  src: url("./assets/fonts/Dana-Medium.ttf")

@font-face
  font-family: dana
  font-style: normal
  font-weight: 600
  src: url("./assets/fonts/Dana-DemiBold.ttf")

@font-face
  font-family: dana
  font-style: normal
  font-weight: 800
  src: url("./assets/fonts/Dana-ExtraBold.ttf")

@font-face
  font-family: dana
  font-style: normal
  font-weight: 900
  src: url("./assets/fonts/Dana-Black.ttf")

@font-face
  font-family: dana
  font-style: normal
  font-weight: 930
  src: url("./assets/fonts/Dana-ExtraBlack.ttf")

@font-face
  font-family: dana
  font-style: normal
  font-weight: 960
  src: url("./assets/fonts/Dana-Heavy.ttf")

@font-face
  font-family: dana
  font-style: normal
  font-weight: 990
  src: url("./assets/fonts/Dana-fat.ttf")

@font-face
  font-family: dana
  font-style: normal
  font-weight: bold
  src: url("./assets/fonts/Dana-ExtraBold.ttf")

@font-face
  font-family: dana
  font-style: normal
  font-weight: normal
  src: url("./assets/fonts/Dana-Regular.ttf")
</style>