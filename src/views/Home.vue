<script lang="ts" setup>

// IMPORTS
import {defineAsyncComponent, ref} from "vue"
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import campaign from "../assets/img/images/home/section2_campaign.svg"
import seo from "../assets/img/images/home/section2_seo.svg"
import strategy from "../assets/img/images/home/section2_strategy.svg"
import content from "../assets/img/images/home/section2_content.svg"
import webapp from "../assets/img/images/home/section2_webapp.svg"
import branding from "../assets/img/images/home/section2_branding.svg"

// COMPONENTS
const CardBase = defineAsyncComponent(() => import("../components/layout/CardBase.vue"))
const ButtonWhite = defineAsyncComponent(() => import("../components/widget/ButtonWhite.vue"))
const ButtonOrange = defineAsyncComponent(() => import("../components/widget/ButtonOrange.vue"))
const SliderPagination = defineAsyncComponent(() => import("../components/layout/SliderPagination.vue"))

// SECTION 2 CARDS DATA
const section2Cards = [
  { img: campaign, title: "طراحی و اجرا کمپین تبلیغاتی", path: "/services" },
  { img: seo, title: "سئو سایت و بهینه سازی سایت", path: "/services" },
  { img: strategy, title: "طراحی استراتژی و برنامه ریزی تبلیغات آنلاین", path: "/services" },
  { img: content, title: "تولید محتوا وب سایت و شبکه های اجتماعی", path: "/services" },
  { img: webapp, title: "طراحی و پشتیبانی وب و اپلیکیشن", path: "/services" },
  { img: branding, title: "برندسازی و روابط عمومی دیجیتال", path: "/services" }
]

// BLOG SLIDER BREAKPOINTS
const blog_slider_breakpoints = ref({
  1140: {
    itemsToShow: 3,
    snapAlign: 'start',
  },

  0: {
    itemsToShow: 1,
    itemsToScroll: 1,
    snapAlign: 'start',
  },
})
</script>

<template>
  <div id="home" data-safe>

    <!-- SECTION 1 -->
    <section data-s-1 dir="rtl">
      <div class="row position-relative">
        <div class="position-absolute mouse">
          <img src="../assets/img/icon/icon_mouse_black.svg" alt="mouse">
        </div>
        <div class="p1 col-sm-6 d-flex flex-column justify-content-start">
          <h1>آژانس خلاقیت ویدا</h1>
          <p class="mb-0">تسا مزال هک نانچنآرطس و نوتس رد هلجم وچ تعنص زا موهفمان یگداــس دــیلوت اب </p>

          <div class="d-flex justify-content-start align-items-center">
            <ButtonWhite>ثبت پروژه</ButtonWhite>
            <ButtonOrange>ثبت پروژه</ButtonOrange>
          </div>
        </div>
        <div class="p2 col-sm-6 d-flex flex-column justify-content-start align-items-end">
          <div class="d-flex flex-column justify-content-center align-items-end">
            <h3>Vida Creative</h3>
            <h3>Marketing Agency</h3>
          </div>
        </div>

        <div class="bt_bar d-flex justify-content-center align-items-end">
          <ButtonWhite>ثبت پروژه</ButtonWhite>
          <ButtonOrange>ثبت پروژه</ButtonOrange>
        </div>
      </div>
    </section>

    <!-- SECTION 2 -->
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

    <!-- SECTION GROUP 1 -->
    <div class="d-flex flex-column" data-sg-1>

      <!-- SECTION 3 -->
      <section data-s-3 dir="rtl" class="d-flex justify-content-center align-items-start">
        <div class="row m-0 w-100">
          <div class="col-md-6 d-flex justify-content-end align-items-center">
            <picture>
              <img src="../assets/img/images/home/section3_img1.png" alt="vida">
            </picture>
          </div>
          <div class="col-md-6 d-flex flex-column justify-content-start">
            <h1>درباره تیم ویدا:</h1>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
            <div class="align-items-start d-flex justify-content-end ali\">
              <ButtonWhite>آشنایی با اعضای تیم</ButtonWhite>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 4 -->
      <section data-s-4 dir="rtl">
        <div>
          <h1>بلاگ ویدا</h1>
          <Carousel :wrap-around="true" :itemsToShow="3" :itemsToScroll="3" :breakpoints="blog_slider_breakpoints">
            <Slide v-for="slide in 9" :key="slide">
              <CardBase class="carousel__item" :padding="23">
                <img src="../assets/img/images/home/section4_img2.png" alt="slide">
              </CardBase>
            </Slide>

            <template #addons="{ currentSlide }">
              <Navigation/>
              <SliderPagination :slide="currentSlide" :all="9" />
            </template>
          </Carousel>
        </div>
      </section>
    </div>

    <!-- SECTION 5 -->
    <div class="d-flex flex-column" data-sg-2>
      <section data-s-5 dir="rtl">
        <div class="row m-0">
          <div class="col-md-6 d-flex flex-column justify-content-center align-items-start">
            <h1>اکادمی ویدا</h1>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
            <ButtonWhite>مشاهده دوره ها</ButtonWhite>
          </div>
          <div class="col-md-6 d-flex justify-content-center align-items-center">
            <div class="row m-0">
              <div class="col-6">

              </div>
              <div class="col-6">

              </div>
              <div class="col-6">

              </div>
              <div class="col-6">

              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 6 -->
      <section data-s-6 dir="rtl">
        <div class="row m-0">
          <div class="col-md-6 d-flex justify-content-center align-items-center">
            <div class="position-relative">
              <picture class="position-absolute">
                <img src="../assets/img/images/home/section6_img1.png" alt="img1">
              </picture>
              <img src="../assets/img/images/home/section6_img2.png" class="position-absolute" alt="img2">
            </div>
          </div>
          <div class="col-md-6 d-flex flex-column justify-content-center align-items-start">
            <h1>برگزاری رویدادهایتان را به ما بسپارید</h1>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
            <div class="d-flex justify-content-end align-items-center w-100">
              <ButtonWhite>اطلاعات بیشتر</ButtonWhite>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 7 -->
      <section data-s-7 dir="rtl">
        <div class="d-flex flex-column justify-content-start align-items-start">
          <h1>مشتریان ویدا</h1>
          <div class="row m-0">

          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="sass" src="../assets/sass/pages/home.sass"></style>
<style lang="sass">
// NON SCOPED STYLES
@import ../assets/sass/public/colors

#home

  .carousel__item
    padding: 40px 0!important

  .carousel__prev, .carousel__next
    background-repeat: no-repeat
    background-position: center
    padding: 12px!important
    width: 36px
    height: 36px
    background-color: $vida_brand_whitesmoke
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.08)

    > *
      display: none

  .carousel__next
    background-image: url("../assets/img/icon/icon_arrow_right_gray.svg")

  .carousel__prev
    background-image: url("../assets/img/icon/icon_arrow_left_gray.svg")

  section[data-s-2]

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

  section[data-s-4]

    .inner
      max-width: 295px

      img
        width: 100%
        height: 100%
        object-fit: fill
        border-radius: 16px
</style>