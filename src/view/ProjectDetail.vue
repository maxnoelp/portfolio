<template>
    <div v-if="loading" class="text-center p-5">Lade Projektdetails...</div>
    <div v-else>
      <h2>{{ project.title }}</h2>
      <img v-if="project.images && project.images.length" :src="project.images[0].file" class="img-fluid" />
      <div v-html="project.teaser" class="mt-3"></div>
      <div v-html="project.description" class="mt-3"></div>
    </div>
    <router-link to="/#projects" class="btn btn-secondary mt-4">← Zurück zur Übersicht</router-link>
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
  