<template>
  <div>
    <div class="flex justify-center m-1">
      <router-link class="bg-red-100 m-1 p-1 rounded" to="/">home</router-link>
      <router-link class="bg-red-100 m-1 p-1 rounded" to="/about">about</router-link>
      <router-link class="bg-red-100 m-1 p-1 rounded" to="/detay/1">detay</router-link>
    </div>
    <div class="flex justify-center">

        <router-view></router-view>
    </div>
  </div>
</template>