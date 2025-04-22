
<template>
  <section id="skills" class="skills section">
    <div class="container section-title" data-aos="fade-up">
      <h2>Skills</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row skills-content skills-animation">
        <div class="col-lg-6">
          <div class="progress">
            <span class="skill"><span>HTML</span> <i class="val">100%</i></span>
            <div class="progress-bar-wrap" role="progressbar" aria-valuenow="100" >
              <div class="progress-bar" style="width: 100%"></div>
            </div>
          </div>
          <div class="progress">
            <span class="skill"><span>CSS</span> <i class="val">90%</i></span>
            <div class="progress-bar-wrap" role="progressbar" aria-valuenow="90">
              <div class="progress-bar" style="width: 90%"></div>
            </div>
          </div>
          <div class="progress">
            <span class="skill"><span>JavaScript</span> <i class="val">75%</i></span>
            <div class="progress-bar-wrap" role="progressbar" aria-valuenow="75">
              <div class="progress-bar" style="width: 75%"></div>
            </div>
          </div>
          <div class="progress">
            <span class="skill"><span>VUE.JS</span> <i class="val">50%</i></span>
            <div class="progress-bar-wrap"  role="progressbar" aria-valuenow="75" >
              <div class="progress-bar" style="width: 50%"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="progress">
            <span class="skill"><span>Python</span> <i class="val">70%</i></span>
            <div class="progress-bar-wrap" role="progressbar" aria-valuenow="80">
              <div class="progress-bar" style="width: 70%"></div>
            </div>
          </div>
          <div class="progress">
            <span class="skill"><span>Django</span> <i class="val">80%</i></span>
            <div class="progress-bar-wrap" role="progressbar" aria-valuenow="90">
              <div class="progress-bar" style="width: 80%"></div>
            </div>
          </div>
          <div class="progress">
            <span class="skill"><span>DjangoCMS</span> <i class="val">90%</i></span>
            <div class="progress-bar-wrap" role="progressbar" aria-valuenow="55">
              <div class="progress-bar" style="width: 90%"></div>
            </div>
          </div>
          <div class="progress">
            <span class="skill"><span>Flask</span> <i class="val">40%</i></span>
            <div class="progress-bar-wrap" role="progressbar" aria-label="Basic example" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style="width: 40%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills .progress {
  height: 60px;
  display: block;
  background: none;
  border-radius: 0;
}

.skills .progress .skill {
  color: var(--heading-color);
  padding: 0;
  margin: 0 0 6px 0;
  text-transform: uppercase;
  display: block;
  font-weight: 600;
  font-family: var(--heading-font);
}

.skills .progress .skill .val {
  float: right;
  font-style: normal;
}

.skills .progress-bar-wrap {
  background: color-mix(in srgb, var(--default-color), transparent 90%);
  height: 10px;
}

.skills .progress-bar {
  width: 1px;
  height: 10px;
  transition: 0.9s;
  background-color: var(--accent-color);
}
</style>


