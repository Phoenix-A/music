<template>
  <div class="song-sheet-list">
    <ul class="pt-3 px-4">
      <li v-for="item of hotSong" :key="item.id" class="d-flex pb-3 ai-center">
        <img :src="item.img" alt="" width="60" />
        <span class="title " style="width:100%">{{ item.title }}</span>
        <span class="info text-gray2">{{ item.info }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    hotSong: {
      type: Array,
      required: true,
    },
  },
};
</script>
