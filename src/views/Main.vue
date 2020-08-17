<template>
  <div class="main">
    <MainHeader title="My MusicPlay" @nav-click="toPath" />

    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import MainHeader from "@/components/main/MainHeader";

export default {
  methods: {
    toPath(path) {
      this.$router.push(path);
    },
  },
  components: {
    MainHeader,
  },
};
</script>
<style lang="scss"></style>
