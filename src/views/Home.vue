<script lang="ts" setup>

import {defineAsyncComponent} from "vue"

const CardBase = defineAsyncComponent(() => import("../components/layout/CardBase.vue"))

const section2Cards = [
  { img: new URL("../assets/img/images/home/section2_campagn.svg", import.meta.url), title: "طراحی و اجرا کمپین تبلیغاتی", path: "/services" },
  { img: new URL("../assets/img/images/home/section2_seo.svg", import.meta.url), title: "سئو سایت و بهینه سازی سایت", path: "/services" },
  { img: new URL("../assets/img/images/home/section2_strategy.svg", import.meta.url), title: "طراحی استراتژی و برنامه ریزی تبلیغات آنلاین", path: "/services" },
  { img: new URL("../assets/img/images/home/section2_content.svg", import.meta.url), title: "تولید محتوا وب سایت و شبکه های اجتماعی", path: "/services" },
  { img: new URL("../assets/img/images/home/section2_webapp.svg", import.meta.url), title: "طراحی و پشتیبانی وب و اپلیکیشن", path: "/services" },
  { img: new URL("../assets/img/images/home/section2_branding.svg", import.meta.url), title: "برندسازی و روابط عمومی دیجیتال", path: "/services" }
]

</script>

<template>
  <div id="home" data-safe>
    <section data-s-1 dir="rtl">
      <div class="row position-relative">
        <div class="position-absolute mouse">
          <img src="../assets/img/icon/icon_mouse_black.svg" alt="mouse">
        </div>
        <div class="p1 col-sm-6 d-flex flex-column justify-content-start">
          <h1>آژانس خلاقیت ویدا</h1>
          <p class="mb-0">تسا مزال هک نانچنآرطس و نوتس رد هلجم وچ تعنص زا موهفمان یگداــس دــیلوت اب </p>

          <div class="d-flex justify-content-start align-items-center">
            <button type="button">ثبت پروژه</button>
            <button type="button">ثبت پروژه</button>
          </div>
        </div>
        <div class="p2 col-sm-6 d-flex flex-column justify-content-start align-items-end">
          <div class="d-flex flex-column justify-content-center align-items-end">
            <h3>Vida Creative</h3>
            <h3>Marketing Agency</h3>
          </div>
        </div>

        <div class="bt_bar d-flex justify-content-center align-items-end">
          <button type="button">ثبت پروژه</button>
          <button type="button">ثبت پروژه</button>
        </div>
      </div>
    </section>

    <section data-s-2 dir="rtl">
      <div class="d-flex flex-column justify-content-start">
        <h1>خدمات تیم ویدا</h1>

        <div class="row m-0">
          <CardBase
              v-for="item in section2Cards"
              class="col-sm-4" :padding="23"
              innerClass="flex-column"
              :key="item">
            <img :src="item.img" alt="">
            <p>{{ item.title }}</p>
          </CardBase>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="sass" src="../assets/sass/pages/home.sass"></style>