<template>
  <div class="container-fluid mt-5 bg-secondary">
    <div class="row row-cols-2">
      <div class="col d-flex gap-3 justify-content-center align-items-center">
        <a href="https://github.com/maxnoelp"
          ><img class="picture-1" src="../images/git.png" alt="Image für Github"
        /></a>
        <a href="https://www.linkedin.com/in/max-nölp-18b41a312/"
          ><img
            class="picture-1"
            src="../images/free-linkedin-icon-112-thumb.png"
            alt="Image für LinkedIn"
        /></a>
      </div>
      <div class="col d-flex flex-column gap-5 justify-content-center fs-4 align-items-center pt-1">
        <p class="text-decoration-underline hover-pointer" @click="showPopUp()">Impressum</p>
        <div v-if="showPop" class="popup">
          <p>Nölp Max</p>
          <p>Kapellenberg, 16</p>
          <p>97437 Haßfurt</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPop: false,
    };
  },
  methods: {
    showPopUp() {
      this.showPop = !this.showPop;
    },
  },
};
</script>
<style scoped>
.div-width {
  width: 100%;
}

.picture-1 {
  width: 35px;
  height: 35px;
}
</style>
