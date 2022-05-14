<script>

</script>

<template>
  <div id="addProducts2" data-safe>
    <img class="me-auto ms-auto d-block" src="../assets/img/images/addService_vector1.png" alt="image">
    <form action="" class="box-shadow-sp mb-5 d-flex flex-column bg-white m-auto text-end">
      <p class="me-auto ms-auto">
        ثبت پروژه
      </p>
      <label for="name" class="pe-2">نام و نام خانوادگی</label>
      <input type="text" class="form-control mb-3" id="name">

      <label for="company" class="pe-2">نام شرکت یا موسسه</label>
      <input type="text" class="form-control mb-3" id="company">

      <label for="activity" class="pe-2">زمینه فعالیت</label>
      <input type="text" class="form-control mb-3" id="activity">

      <label for="email" class="pe-2">آدرس ایمیل</label>
      <input type="email" class="form-control mb-3" id="email">

      <label for="phone-number" class="pe-2">شماره تماس</label>
      <input type="tel" class="form-control mb-3" id="phone-number">

      <label for="service" class="pe-2">انتخاب سرویس</label>
      <select id="service" class="form-select">
        <option selected>
        </option>
        <option value="1">
          انتخاب سرویس 1
        </option>
        <option value="2">
          انتخاب سرویس 2
        </option>
      </select>
      <button class="btn">
        ثبت درخواست
      </button>
    </form>
    <div class="d-flex text-end justify-content-center pt-5">
      <p class="w-50">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
      </p>
      <span class="mt-3 ms-3">
      </span>
    </div>
  </div>
</template>

<style scoped lang="sass" src="../assets/sass/pages/addProducts2.sass"></style>