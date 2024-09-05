<template>
  <div class="container text-center margin">
    <h1 class="fw-semibold text-font" id="home">Frontend Web<br />Developer</h1>
    <h2 v-text="text" class="mt-4"></h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '<h2>Max Nölp</h2>',
    };
  },
};
</script>
<style scoped>
.text-font {
  font-size: 4rem;
}
</style>
