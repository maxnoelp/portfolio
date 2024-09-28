<template>
  <div class="margin container-sm">
    <div class="d-flex justify-content-center mb-4">
      <h2 class="text-center fs-1 mb-4 outline-head">Coding Skills</h2>
    </div>
    <div class="row row-cols-3 text-center align-items-center justify-content-center">
      <div class="mb-3">
        <img class="picture hover-image" src="https://skillicons.dev/icons?i=html" alt="html" />
        <!--../images/html.png-->
        <p>HTML</p>
      </div>
      <div class="mb-3">
        <img class="picture hover-image" src="https://skillicons.dev/icons?i=css" alt="" />
        <p>CSS</p>
      </div>
      <div class="mb-3">
        <img class="picture hover-image" src="https://skillicons.dev/icons?i=javascript" alt="" />
        <p>JavaScript</p>
      </div>
      <div class="mb-3">
        <img class="picture hover-image" src="https://skillicons.dev/icons?i=vuejs" alt="" />
        <p>Vue.js</p>
      </div>
      <div class="mb-3">
        <img class="picture hover-image" src="https://skillicons.dev/icons?i=nodejs" alt="" />
        <p>Node.js</p>
      </div>
      <div class="mb-3">
        <img class="picture hover-image" src="../images/responsive.png" alt="" />
        <p>Responsive Webdesign</p>
      </div>
      <div class="mb-3">
        <img class="picture hover-image" src="https://skillicons.dev/icons?i=bootstrap" alt="" />
        <p>Bootstrap</p>
      </div>
      <div class="mb-3">
        <img class="picture hover-image" src="https://skillicons.dev/icons?i=python" alt="" />
        <p>Python</p>
      </div>
      <div class="mb-3">
        <img class="picture hover-image" src="https://skillicons.dev/icons?i=django" alt="" />
        <p>Django</p>
      </div>
      <div class="mb-3">
        <img class="picture-length hover-image" src="../images/Cypress.png" alt="" />
        <p>Cypress</p>
      </div>
      <div class="mb-3">
        <img class="picture hover-image" src="../images/rest-api-icon (1).png" alt="" />
        <p>Rest Api</p>
      </div>
      <div>
        <img class="picture hover-image" src="https://skillicons.dev/icons?i=postman" alt="" />
        <p>Postman</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.picture-length {
  height: 45px;
  width: 125px;
}

.hover-image {
  transition:
    transform 0.6s ease,
    transform 0.6s ease;
  transform-origin: center;
}

.hover-image:hover {
  transform: rotate(360deg) scale(1.2);
}
</style>
