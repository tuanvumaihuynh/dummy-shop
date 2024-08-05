<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent } from '@/components/ui/card'
</script>
<template>
  <Card>
    <CardContent class="flex flex-col space-y-3">
      <Skeleton class="h-[125px] w-[240px] rounded-xl" />
      <div class="space-y-2">
        <Skeleton class="h-4 w-[240px]" />
        <Skeleton class="h-4 w-[240px]" />
      </div>
    </CardContent>
  </Card>
</template>
