<script lang="ts" setup>
import {computed, defineProps, onMounted, reactive, ref, watch} from "vue"

const props = defineProps<{
  slide: number,
  all: number,
  breakpoint: string
}>()

const data = reactive({
  width: window.innerWidth
})

const width = computed(() => data.width)

const slides = ref(3)

const slides_ref = computed({
  get() {
    return slides.value
  },
  set(value: number)
  {
    slides.value = value
  }
})

if (data.width >= 1140) slides_ref.value = 3
else if (data.width < 1140 && data.width >= 0) slides_ref.value = 1

onMounted(() => {
  window.onresize = () => {
    data.width = window.innerWidth
  }
})

watch(width, async () => {
  if (data.width >= 1140) slides_ref.value = 3
  else if (data.width < 1140 && data.width >= 0) slides_ref.value = 1
})

const slider_index = computed(() => (props.slide / slides_ref.value))

const calcWidth = () => (slider_index.value + 1) * ( 100 / (props.all / slides_ref.value))

const slider_width = ref(calcWidth())

watch(slider_index, async () => {
  slider_width.value = calcWidth()
})
</script>

<template>
  <div class="sliderPagination"><div :style="{ width : `${slider_width}%` }"></div></div>
</template>

<style scoped lang="sass" src="../../assets/sass/layout/sliderPagination.sass"></style>