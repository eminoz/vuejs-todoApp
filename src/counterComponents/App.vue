<template>
  <div class="flex flex-col items-center justify-center bg-slate-200 rounded p-1 m-1">
    <appHeader />

    <Counter />
  </div>
</template>

<script>
import Counter from "@/counterComponents/Counter.vue";
export default {
  components: {
    Counter: Counter,
  },
};
</script>
