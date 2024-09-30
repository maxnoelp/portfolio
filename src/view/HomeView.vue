<script>
import AboutMe from '@/components/AboutMe.vue';
import CodingSkillsComp from '@/components/CodingSkillsComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import NavBarComp from '@/components/NavBarComp.vue';
import ProjectComp from '@/components/ProjectComp.vue';

export default {
  components: { NavBarComp, HeaderComp, AboutMe, CodingSkillsComp, ProjectComp, FooterComp },
};
</script>

<template>
  <NavBarComp />

  <header>
    <HeaderComp />
  </header>
  <main>
    <AboutMe />
    <CodingSkillsComp />
    <ProjectComp />
  </main>

  <footer class="container-fluid m-0 p-0"><FooterComp /></footer>
</template>

<style scoped></style>
