<template>
  <div>
    <h1>Add Subject</h1>
    <form @submit.prevent="addSubject">
      <input v-model="name" placeholder="Subject name" required />
      <textarea v-model="description" placeholder="Description"></textarea>
      <button type="submit">Save</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { supabase } from '../lib/supabase'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const description = ref('')
const message = ref('')
const router = useRouter()

const addSubject = async () => {
  let { error } = await supabase.from('subjects').insert([{ name: name.value, description: description.value }])
  if (!error) {
    message.value = 'Subject added successfully!'
    router.push('/subjects')
  } else {
    message.value = error.message
  }
}
</script>
