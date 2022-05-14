<script setup lang="ts">
// INPUT
import {defineAsyncComponent} from "vue"

// LAYOUT
const HeaderOne = defineAsyncComponent(() => import("./components/layout/HeaderComponent.vue"))
const FooterOne = defineAsyncComponent(() => import("./components/layout/FooterComponent.vue"))
</script>

<template>
  <div id="main">
    <HeaderOne :fixed="$route.path === '/'"/>
    <router-view/>
    <FooterOne/>
  </div>
</template>

<style lang="sass" src="./assets/sass/public/style.sass"></style>
<style lang="sass">
// FONTS

// FONT-NAME: DANA
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

// FONT-NAME: GOTHAM
@font-face
  font-family: gotham
  font-style: italic
  font-weight: 100
  src: url("./assets/fonts/Gotham-ThinItalic.otf")

@font-face
  font-family: gotham
  font-style: normal
  font-weight: 100
  src: url("./assets/fonts/Gotham-Thin.otf")

@font-face
  font-family: gotham
  font-style: italic
  font-weight: 200
  src: url("./assets/fonts/Gotham-XLightItalic.otf")

@font-face
  font-family: gotham
  font-style: normal
  font-weight: 200
  src: url("./assets/fonts/Gotham-XLight.otf")

@font-face
  font-family: gotham
  font-style: italic
  font-weight: 300
  src: url("./assets/fonts/Gotham-LightItalic.ttf")

@font-face
  font-family: gotham
  font-style: normal
  font-weight: 300
  src: url("./assets/fonts/Gotham-Light.otf")

@font-face
  font-family: gotham
  font-style: italic
  font-weight: 400
  src: url("./assets/fonts/Gotham-BookItalic.otf")

@font-face
  font-family: gotham
  font-style: normal
  font-weight: 400
  src: url("./assets/fonts/Gotham-Book.ttf")

@font-face
  font-family: gotham
  font-style: italic
  font-weight: 500
  src: url("./assets/fonts/Gotham-MediumItalic.ttf")

@font-face
  font-family: gotham
  font-style: normal
  font-weight: 500
  src: url("./assets/fonts/Gotham-Medium.ttf")

@font-face
  font-family: gotham
  font-style: italic
  font-weight: 600
  src: url("./assets/fonts/Gotham-BoldItalic.ttf")

@font-face
  font-family: gotham
  font-style: normal
  font-weight: 600
  src: url("./assets/fonts/Gotham-Bold.ttf")

@font-face
  font-family: gotham
  font-style: normal
  font-weight: 700
  src: url("./assets/fonts/Gotham-Black.otf")

@font-face
  font-family: gotham
  font-style: italic
  font-weight: 800
  src: url("./assets/fonts/Gotham-UltraItalic.otf")
</style>