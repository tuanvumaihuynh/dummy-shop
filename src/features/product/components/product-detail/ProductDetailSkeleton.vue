<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div class="flex items-center gap-12">
    <div>
      <Skeleton class="h-[360px] w-[360px] rounded-md" />
    </div>
    <div class="flex flex-col gap-3">
      <Skeleton class="h-8 w-[300px]" />
      <div class="flex items-center gap-3">
        <Skeleton class="h-6 w-[100px]" />
        <Skeleton class="h-6 w-[100px]" />
      </div>
      <Skeleton class="h-8 w-[120px] mt-2 bg-gray-100" />
      <Skeleton class="h-6 w-[100px]" />
      <div class="flex items-center gap-3">
        <Skeleton class="w-8 h-8 rounded-full" />
        <Skeleton class="w-8 h-8 rounded-full" />
        <Skeleton class="h-8 w-[60px]" />
      </div>
      <Skeleton class="h-10 w-[160px] mt-4" />
    </div>
  </div>
</template>
