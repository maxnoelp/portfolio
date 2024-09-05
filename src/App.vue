<script>
import AboutMe from './components/AboutMe.vue';
import CodingSkillsComp from './components/CodingSkillsComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import NavBarComp from './components/NavBarComp.vue';
import ProjectComp from './components/ProjectComp.vue';

export default {
  components: { NavBarComp, HeaderComp, AboutMe, CodingSkillsComp, ProjectComp },
};
</script>

<template>
  <NavBarComp />
  <div class="overflow-auto">
    <header>
      <HeaderComp />
    </header>
    <main>
      <AboutMe />
      <CodingSkillsComp />
      <ProjectComp />
    </main>
    <footer></footer>
  </div>
  <RouterView />
</template>

<style scoped></style>
