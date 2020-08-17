<template>
  <div class="main-header">
    <div class="title text-primary text-lg text-weight-7 text-center">
      {{ title }}
    </div>
    <div class="nav-list">
      <ul class="d-flex jc-around py-3 text-md text-gray2">
        <li
          v-for="item of navList"
          :key="item.name"
          :class="{ 'nav-active': isActive(item.path) }"
          @click="navClick(item.path)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "My MusicPlay",
    },
  },
  data() {
    return {
      navList: [
        { path: "/recommen", name: "推荐" },
        { path: "/singer", name: "歌手" },
        { path: "/rank", name: "排行" },
        { path: "/search", name: "搜索" },
      ],
    };
  },

  methods: {
    navClick(path) {
      this.$emit("nav-click", path);
    },

    isActive(path) {
      if (path === this.$route.path) {
        return true;
      }
      if (path === "recommen" && this.$rount.path === "/") {
        return true;
      }
      return false;
    },
  },
};
</script>
>
