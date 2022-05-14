<script lang="ts" setup>

</script>

<template>

  <footer class="d-flex justify-content-center align-items-stretch">
    <div class="w-100 d-flex flex-column align-items-stretch justify-content-end">
      <img src="../../assets/img/brand/logo_x2.svg" class="align-self-end" alt="Vida Creative Agency">

      <div class="row m-0" dir="rtl">
        <div class="col-sm-6 p-0">
          <p class="mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
        </div>
        <div class="links col-2 d-flex flex-column justify-content-start align-items-center">
          <router-link to="/services" active-class="ac">خدمات ما</router-link>
          <router-link to="/projects" active-class="ac">پـــروژه ها</router-link>
          <router-link to="/projects" active-class="ac">ثبت پروژه</router-link>
          <router-link to="/team" active-class="ac">تیـــــم ما</router-link>
        </div>
        <div class="info col-4 d-flex flex-column justify-content-start align-items-start" dir="ltr">
          <button>دریافت مشاوره تلنفی</button>
          <p dir="rtl" class="w-100 d-flex justify-content-between align-items-center"><img src="../../assets/img/icon/icon_phone_gray.svg" alt="Phone">021-55823262</p>
          <div class="d-flex justify-content-start align-items-center">
            <img src="../../assets/img/icon/icon_instagram_gray.svg" alt="instagram">
            <img src="../../assets/img/icon/icon_linkedin_gray.svg" alt="linkedin">
            <img src="../../assets/img/icon/icon_twitter_gray.svg" alt="tweeter">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="sass" src="../../assets/sass/layout/footer.sass"></style>