<template>
  <div class="margin container-xl container-xl-gap">
    <div>
      <img src="../images/me.jpg" class="rounded d-block float-end me-1" alt="" />
    </div>
    <div class="content-text">
      <div class="text p-2 outlines">
        Hello, my name is Max. I am 29 years young and come from Haßfurt, Bavaria. I am a frontend
        web developer. My strengths are ambition, curiosity, and motivation. I love designing and
        solving difficult tasks. This new stage in my life is a dream come true for me. I want to
        constantly develop and discover new things. In addition to my professional skills, I am
        passionate about creating user-friendly and visually appealing interfaces that provide
        seamless experiences. I thrive in collaborative environments where creativity and innovation
        are encouraged. Outside of work, I enjoy exploring new technologies, staying updated with
        industry trends, and working on personal projects that challenge my skills. I am always
        eager to learn and grow, both professionally and personally, and I look forward to the
        exciting opportunities that lie ahead.
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
img {
  width: 150px;
  height: 150px;
  transform: rotate(12.5deg);
  margin-bottom: -1rem;
  box-shadow: 0px 0px 8px 1px black;
}

.container-xl-gap {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.text {
  font-size: 1.5rem;
}
</style>
