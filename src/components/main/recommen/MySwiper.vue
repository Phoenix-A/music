<template>
  <div class="my-swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) of swiperList" :key="index">
        <img :src="item.img" style="width:100%" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  props: {
    swiperList: {
      type: Array,
      required: true,
    },
    swiperOption: {
      type: Object,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
