<template>
  <div class="w-[70%] mx-auto mt-10">
    <!-- Card -->
    <Card>
      <template #title>
        <h1 class="text-center text-2xl font-bold">Subjects</h1>
      </template>

      <template #content>
        <!-- Add Button -->
        <div class="flex justify-end mb-4">
          <RouterLink to="/subjects/add">
            <Button label="+ Add Subject" icon="pi pi-plus" class="p-button-success" />
          </RouterLink>
        </div>

        <!-- Subjects List -->
        <ul class="divide-y divide-gray-200 rounded-lg border border-gray-200">
          <li
            v-for="s in subjects"
            :key="s.id"
            class="p-3 hover:bg-gray-50 flex items-center justify-between"
          >
            <span>{{ s.name }}</span>
            <Button icon="pi pi-pencil" class="p-button-text p-button-sm text-blue-500" />
          </li>
        </ul>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { supabase } from '../lib/supabase'
import { ref, onMounted } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'

const subjects = ref([])

onMounted(async () => {
  let { data, error } = await supabase.from('subjects').select('*')
  if (!error) {
    subjects.value = data
  }
})
</script>
