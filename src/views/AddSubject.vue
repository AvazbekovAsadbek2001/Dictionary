<template>
  <div class="w-[60%] mx-auto" style="margin-top: 10%">
    <Card>
      <template #title>
        <h1 class="text-2xl font-bold text-center">Add Subject</h1>
      </template>

      <template #content>
        <form @submit.prevent="addSubject" class="space-y-4">
          <!-- Subject Name -->
          <div>
            <label for="name" class="block text-gray-700 font-medium mb-1">Subject Name</label>
            <InputText 
              id="name"
              v-model="name"
              placeholder="Enter subject name"
              required
              class="w-full"
            />
          </div>

          <!-- Description -->
          <div>
            <label for="description" class="block text-gray-700 font-medium mb-1">Description</label>
            <Textarea
              id="description"
              v-model="description"
              placeholder="Enter description"
              rows="4"
              autoResize
              class="w-full"
            />
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end">
            <Button type="submit" label="Save" icon="pi pi-check" class="p-button-success" />
          </div>
        </form>

        <!-- Message -->
        <p v-if="message" class="mt-4 text-green-600 font-medium text-center">
          {{ message }}
        </p>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { supabase } from '../lib/supabase'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Card from 'primevue/card'
import  InputText  from 'primevue/inputtext'
import  Textarea  from 'primevue/textarea'
import  Button  from 'primevue/button'

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
