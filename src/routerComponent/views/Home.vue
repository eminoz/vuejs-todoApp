<template>
  <div>
    <h1>home</h1>
    <input class="bg-red-100" type="text" @keydown.enter="goDetail" />
  </div>
</template>

<script>
export default {
  methods: {
    goDetail(e) {
      this.$router.push({
        name: "DetayPage",
        params: {
          userId: e.target.value,
        },
      });
    },
  },
};
</script>