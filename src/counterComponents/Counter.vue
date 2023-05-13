<template>

    <div class="flex items-center justify-center">
      <button class="m-1 bg-amber-600 p-1 rounded" @click="incrice">
        artır
      </button>
      <h3>{{ counter }}</h3>
      <button class="m-1 bg-amber-600 p-1 rounded" @click="decrise">
        azalt
      </button>
    </div>

</template>

<script>
export default {
  data() {
    return { counter: 0 };
  },
  methods: {
    incrice() {
      this.counter = this.counter + 1;
    },
    decrise() {
      this.counter = this.counter - 1;
    },
  },
};
</script>