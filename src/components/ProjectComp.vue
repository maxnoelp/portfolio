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
      <div v-for="title in titles" :key="title.id" class="col-12 col-md-4 col-lg-4 mb-3">
        <div class="h-100 w-100 card max-c-width mb-3">
          <img v-if="title.images.length" :src="title.images[0].file" alt="Erstes Bild" class="card-img-top max-c-height" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ title.title }}</h5>
            <div><span class="badge text-bg-dark">{{ title.coding_language }}</span></div>
            <p class="card-text" v-html="title.teaser"></p>
            <router-link
              class="custom-btn mt-auto text-center"
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
  max-width: 325px;
}
.max-c-height {
  max-height: 195px;
  object-fit: contain;
}

h5 {
  text-decoration: underline var(--accent-color);

}

.card {
  border-color: var(--accent-color) !important;
  transition: all 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.1);
}
</style>