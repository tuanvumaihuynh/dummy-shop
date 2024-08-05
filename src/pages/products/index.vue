<script setup lang="ts">
import { LoaderCircle } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

import CardProduct from '@/features/product/components/CardProduct.vue'
import CardProductSkeleton from '@/features/product/components/CardProductSkeleton.vue'

import { useProductsQuery } from '@/features/product/queries/use-products-query'

const limit = ref(20)
const skip = ref(0)

const { data, isPending, isFetching, isError } = useProductsQuery(limit, skip)

function fetchMore() {
  limit.value += 8
}
</script>

<route lang="yaml">
meta:
  layout: DashboardLayout
</route>

<template>
  <main class="container">
    <h1 class="mb-4 text-2xl font-bold">Products</h1>
    <div
      v-if="isPending"
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <CardProductSkeleton v-for="n in 16" :key="n" />
    </div>
    <div v-else-if="isError">Error</div>
    <div
      v-else-if="data"
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <CardProduct v-for="product in data.products" :key="product.id" :product="product" />

      <div class="flex justify-center mt-4 col-span-full">
        <Button :disabled="isPending" @click="fetchMore">
          <LoaderCircle v-if="isFetching" class="w-4 h-4 mr-2 animate-spin" />
          Load More
        </Button>
      </div>
    </div>
  </main>
</template>
