<template>
  <div class="flex items-center justify-center min-h-screen">
    <Card class="w-1/2 mt-[-10%]">
      <template #title>
        <h2 class="text-center font-bold m-0 pb-3">Dictionary</h2>
      </template>
      <template #content>
        <p class="m-0 text-center">
          A guide to learning a new language and memorizing new words. This is a perfect guide to repeating words frequently and reinforcing old knowledge.
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1 justify-center">
          <Button label="Start" severity="primary" variant="outlined" class="w-[90%]" />
        </div>
      </template>
    </Card>
</div>

</template>

<script setup>
import { useRouter } from 'vue-router'
import Card from 'primevue/card';
import Button from 'primevue/button';

const router = useRouter()

</script>

<style scoped>
/* Qo'shimcha maxsus stillar kerak bo'lsa shu yerga qo'shishingiz mumkin */
</style>