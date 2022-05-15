<script lang="ts" setup>

import {defineAsyncComponent} from "vue"

const CardBase = defineAsyncComponent(() => import("../components/layout/CardBase.vue"))



import campaign from "../assets/img/images/home/section2_campaign.svg"
import seo from "../assets/img/images/home/section2_seo.svg"
import strategy from "../assets/img/images/home/section2_strategy.svg"
import content from "../assets/img/images/home/section2_content.svg"
import webapp from "../assets/img/images/home/section2_webapp.svg"
import branding from "../assets/img/images/home/section2_branding.svg"

const section2Cards = [
  { img: campaign, title: "طراحی و اجرا کمپین تبلیغاتی", path: "/services" },
  { img: seo, title: "سئو سایت و بهینه سازی سایت", path: "/services" },
  { img: strategy, title: "طراحی استراتژی و برنامه ریزی تبلیغات آنلاین", path: "/services" },
  { img: content, title: "تولید محتوا وب سایت و شبکه های اجتماعی", path: "/services" },
  { img: webapp, title: "طراحی و پشتیبانی وب و اپلیکیشن", path: "/services" },
  { img: branding, title: "برندسازی و روابط عمومی دیجیتال", path: "/services" }
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
      <div class="d-flex flex-column justify-content-start position-relative">
        <h1>خدمات تیم ویدا</h1>

        <img src="../assets/img/images/public/public_dots.svg" class="position-absolute" alt="dt1">
        <img src="../assets/img/images/public/public_dots.svg" class="position-absolute d-none" alt="dt2">

        <div class="row">
          <CardBase
              v-for="item in section2Cards"
              class="col-md-4" :padding="23"
              innerClass="flex-column justify-content-between align-items-center"
              :key="item">
            <img :src="item.img" :alt="item.title">
            <div class="d-flex flex-column align-items-center justify-content-center">
              <p class="mb-0">{{ item.title }}</p>

              <router-link :to="item.path">
                اطلاعات بیشتر
                <img src="../assets/img/icon/icon_arrow_left_orange.svg" alt="arrow">
              </router-link>
            </div>
          </CardBase>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="sass" src="../assets/sass/pages/home.sass"></style>
<style lang="sass">
@import ../assets/sass/public/colors

#home

  > section[data-s-2]

    > div .inner
      padding: 24px 70px
      @media screen and (max-width: 1015px)
        padding: 24px 50px

      @media screen and (max-width: 895px)
        padding: 20px 30px
        max-width: 300px

      > img
        max-height: 140px

      > div

        > p
          margin-top: 16px
          color: $vida_brand_orange
          font-size: 18px
          text-align: center
          font-weight: 500

        > a
          text-decoration: none
          padding: 10px
          border-radius: 360px
          background-color: $vida_brand_whitesmoke
          color: $vida_gray_3
          font-weight: 500
          font-size: 18px
          transition: 0.2s
          margin-top: 15px

        > a:hover
          background-color: rgba(255, 143, 60, 0.25)
          color: $vida_brand_orange
</style>