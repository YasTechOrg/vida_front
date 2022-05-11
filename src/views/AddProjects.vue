<script lang="ts" setup>

</script>

<template>
  <div id="addProducts" class="d-flex flex-column justify-content-start align-items-center" data-safe>
    <img src="../assets/img/images/addService_vector1.png" alt="vector">
    <form class="d-flex flex-column justify-content-center align-items-center position-relative">
      <h1>ثبت پروژه</h1>

      <label dir="rtl">
        <span>نام و نام خانوادگی</span>
        <input type="text" dir="auto">
      </label>

      <label dir="rtl">
        <span>نام موسسه یا شرکت</span>
        <input type="text" dir="auto">
      </label>

      <label dir="rtl">
        <span>زمینه فعالیت</span>
        <input type="text" dir="auto">
      </label>

      <label dir="rtl">
        <span>آدرس ایمیل</span>
        <input type="email" dir="auto">
      </label>

      <label dir="rtl">
        <span>شماره تلفن</span>
        <input type="tel" dir="auto">
      </label>

      <label dir="rtl">
        <span>انتخاب سرویس</span>
        <select class="form-select" aria-label="انتخاب سرویس">
          <option selected></option>
          <option value="1">سرویس یک</option>
          <option value="2">سرویس دو</option>
          <option value="3">سرویس سه</option>
        </select>
      </label>

      <button type="submit" class="position-absolute">ارسال درخواست</button>
    </form>

    <div class="p2 w-100 d-flex justify-content-center align-items-start" dir="rtl">
      <div></div>
      <p class="mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
    </div>
  </div>
</template>

<style scoped lang="sass" src="../assets/sass/pages/addProducts.sass"></style>