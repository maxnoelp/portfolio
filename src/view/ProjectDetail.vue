<template>
  <NavBarComp />
    <div v-if="loading" class="text-center p-5">Lade Projektdetails...</div>
    <div v-else>
      <div class="container bg-light section-title py-5 px-3">
      <h2 class=" mb-5">{{ project.title }}</h2>
        <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div
            v-for="(image, index) in project.images"
            :key="image.id"
            :class="['carousel-item', { active: index === 0 }]"
          >
            <img :src="image.file" class="d-block w-100 img-fluid" alt="Projektbild" style="max-height: 650px; object-fit: contain;">
          </div>
        </div>
        <button class="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      
      <div v-html="project.teaser" class="mt-3"></div>
      <div v-html="project.description" class="mt-3"></div>
    <router-link to="/#projects" class="btn btn-secondary mt-4">← Zurück zur Übersicht</router-link>
  </div>
  </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const project = ref({})
  const loading = ref(true)
  
  onMounted(async () => {
    const res = await fetch(`https://drf-todo-app-411t.onrender.com/api/v1/projects/${route.params.id}/`)
    const data = await res.json()
    project.value = data
    loading.value = false
  })
  </script>
  <script>
    import NavBarComp from '@/components/NavBarComp.vue';

    export default {
      components: { NavBarComp },
    };
</script>
  