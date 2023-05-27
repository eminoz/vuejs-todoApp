<template>
  <div>
    <p>detay</p>
    <p>{{ $route.params.userId }}</p>
    <button @click="goBack">go back</button>
  </div>
</template>

  <script>
export default {
  methods: {
    goBack() {
    //   this.$router.push("/");
      this.$router.push("/");
    },
  },
};
</script>