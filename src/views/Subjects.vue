<template>
  <div>
    <h1>Subjects</h1>
    <router-link to="/subjects/add">+ Add Subject</router-link>
    <ul>
      <li v-for="s in subjects" :key="s.id">
        {{ s.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { supabase } from '../lib/supabase'
import { ref, onMounted } from 'vue'

const subjects = ref([])

onMounted(async () => {
  let { data, error } = await supabase.from('subjects').select('*')
  if (!error) {
    subjects.value = data
  }
})
</script>
