<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'

import type { Product } from '../types'

interface Props {
  product: Product
}

defineProps<Props>()
</script>

<template>
  <Card @click="() => $router.push(`/products/${product.id}`)" class="cursor-pointer">
    <CardContent class="flex flex-col">
      <img :src="product.thumbnail" height="240" width="240" />
      <h2 class="font-semibold">{{ product.title }}</h2>
      <span>{{ product.price }}</span>
    </CardContent>
  </Card>
</template>
