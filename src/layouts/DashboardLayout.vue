<script setup lang="ts">
import { ShoppingBag } from 'lucide-vue-next'

import SearchProduct from '@/components/SearchProduct.vue'
import UserNav from '@/components/UserNav.vue'
</script>

<template>
  <main class="flex flex-col w-full h-screen">
    <div class="sticky top-0 z-40 border-b backdrop-blur-3xl">
      <div class="container flex items-center justify-between h-16">
        <a href="/" class="flex items-center gap-2">
          <ShoppingBag class="w-6 h-6 text-primary" />
          <h1 class="text-xl font-semibold">Dummy shop</h1>
        </a>
        <div class="flex items-center gap-3">
          <SearchProduct />
          <UserNav />
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 pt-3 bg-muted/60">
      <router-view class="self-center flex-1" />
      <span class="py-4 text-xs text-center text-gray-500">
        Powered by Vue 3, Vite, and Tailwind CSS
      </span>
    </div>
  </main>
</template>
