<script setup lang="ts">
import { Plus, Minus, PackagePlus } from 'lucide-vue-next'

import Button from '@/components/ui/button/Button.vue'

import type { Product } from '../../types'

interface Props {
  product: Product
}

const props = defineProps<Props>()

const quantity = ref(1)

function handleDecreaseQty() {
  quantity.value = Math.max(1, quantity.value - 1)
}

function handleIncreaseQty() {
  quantity.value = Math.min(props.product.stock, quantity.value + 1)
}
</script>

<template>
  <div class="flex items-center gap-12">
    <div>
      <img :src="product.thumbnail" height="360" width="360" />
    </div>
    <div class="flex flex-col gap-3">
      <h2 class="text-2xl font-semibold">{{ product.title }}</h2>
      <div class="flex gap-3">
        <span> Rating: {{ product.rating }} ★ </span> |
        <span> Review: {{ product.reviews.length }} </span>
      </div>

      <div class="p-2 bg-gray-100">
        <span class="mt-3 text-3xl font-semibold text-orange-600">${{ product.price }}</span>
      </div>
      <span>Shipping: Free ship</span>

      <div class="flex items-center">
        <Button variant="outline" size="icon" @click="handleDecreaseQty">
          <Minus />
        </Button>
        <span class="px-4 text-xl font-semibold">{{ quantity }}</span>
        <Button variant="outline" size="icon" @click="handleIncreaseQty">
          <Plus />
        </Button>
        <span class="ml-6"> {{ product.stock }} in stock </span>
      </div>

      <Button size="lg" class="mt-4">
        <PackagePlus class="mr-2" />
        Add to cart
      </Button>
    </div>
  </div>
</template>
