<script setup>
import { ref, onMounted } from 'vue'

const titles = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await fetch('https://drf-todo-app-411t.onrender.com/api/v1/projects/')
    if (!response.ok) throw new Error('Fehler beim Laden')

    const data = await response.json()
    console.log('API-Antwort:', data) // HIER
    titles.value = data.results ?? data
  } catch (error) {
    console.error('Fehler:', error)
  } finally {
    loading.value = false
  }
})

</script>

<template>
  <div class="container section-title" data-aos="fade-up">
      <h2 id="projects">Projects</h2>
      <p>Here are my Projects!</p>
    </div>
  <div v-if="loading" class="d-flex justify-content-center">
    <div class="spinner-border text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <p class="text-center">Load data from API...</p>
  </div>

  <div v-else class="container">
    <div class="row">
      <div v-for="title in titles" :key="title.id" class="col-12 col-md-6 col-lg-4 mx-auto">
        <div class="h-100 card max-c-width mb-3">
          <img v-if="title.images.length" :src="title.images[0].file" alt="Erstes Bild" class="card-img-top max-c-height" />
          <div class="card-body">
            <h5 class="card-title">{{ title.title }}</h5>
            <p class="card-text" v-html="title.teaser"></p>
            <router-link
              class="btn btn-outline-dark mt-2"
              :to="{ name: 'ProjectDetail', params: { id: title.id } }"
            >
  Mehr erfahren
</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.max-c-width {
  max-width: 350px;
}
.max-c-height {
  max-height: 250px;
  object-fit: contain;
}
</style>