<script setup lang="ts">
import ProductDetail from '@/features/product/components/product-detail/ProductDetail.vue'
import ProductDetailSkeleton from '@/features/product/components/product-detail/ProductDetailSkeleton.vue'

import { useProductDetailQuery } from '@/features/product/queries/use-product-detail-query'

const route = useRoute('/products/[id]')

const { data, isError, isPending } = useProductDetailQuery(route.params.id)
</script>

<route lang="yaml">
meta:
  layout: DashboardLayout
</route>

<template>
  <main class="container">
    <ProductDetailSkeleton v-if="isPending" />
    <div v-else-if="isError">Error</div>
    <ProductDetail v-else-if="data" :product="data" />
  </main>
</template>
