<template>
  <section id="hero" class="hero section dark-background">

<div class="container text-center" data-aos="fade-up" data-aos-delay="100">
  <h2>Hi, I'm Max!</h2>
  <p class="text-light">I am a Fullstack Web Developer living in Germany.<br></p>
  <a href="#about" class="btn-scroll" title="Scroll Down"><i class="bi bi-chevron-down"></i></a>
</div>

</section>
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

@media (min-width: 1200px) {
  .text-font {
    font-size: 8rem;
  }
}
</style>
