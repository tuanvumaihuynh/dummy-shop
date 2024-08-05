<script setup lang="ts">
import { Star } from 'lucide-vue-next'

interface Props {
  rating: number
}

const props = defineProps<Props>()

const filledStars = Math.floor(props.rating)
const partialStar = props.rating - filledStars

// TODO: Fix star icon didn't work correctly
</script>

<template>
  <div class="flex space-x-1">
    <template v-for="n in filledStars" :key="n">
      <Star class="text-yellow-500" />
    </template>
    <div v-if="partialStar > 0" class="relative">
      <Star class="text-gray-300" />
      <div
        class="absolute top-0 left-0 h-full overflow-hidden text-yellow-500"
        :style="{ width: `${partialStar * 100}%` }"
      >
        <Star />
      </div>
    </div>
    <template v-for="n in 5 - filledStars - (partialStar > 0 ? 1 : 0)" :key="n">
      <Star class="text-gray-300" />
    </template>
  </div>
</template>
