<template>
  <div class="recommen">
    <Scroll>
      <div class="scroll-wrapper">
        <my-swiper :swiper-list="swiperList" :swiper-option="swiperOption" />
        <song-sheet-list :hot-song="hotSong" />
      </div>
    </Scroll>
  </div>
</template>
<script>
import MySwiper from "@/components/main/recommen/MySwiper";
import SongSheetList from "@/components/main/recommen/SongSheetList";
import Scroll from "@/components/common/Scroll";
export default {
  data() {
    return {
      swiperList: [],
      hotSong: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: true,
      },
    };
  },
  methods: {
    async fetchSwiperList() {
      const res = await this.$http.get("/recommend/banner");
      this.swiperList = res.data.data.map((item) => ({ img: item.picUrl }));
    },
    // 获取歌单列表数据（热门歌曲）
    async fetchHotSong() {
      const res = await this.$http.get("/recommend/playlist");
      this.hotSong = res.data.data.list.map((item) => ({
        id: item.tid,
        img: item.cover_url_small,
        title: item.title,
        info: item.creator_info.nick,
      }));
      console.log(this.hotSong);
    },
  },
  created() {
    this.fetchSwiperList();
    this.fetchHotSong();
  },
  components: {
    MySwiper,
    SongSheetList,
    Scroll,
  },
};
</script>
>
