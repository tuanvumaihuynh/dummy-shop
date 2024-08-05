<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useLoginMutation } from '../mutations/use-login-mutation'

const router = useRouter()
const { mutate: login, isPending } = useLoginMutation()

const formSchema = toTypedSchema(
  z.object({
    username: z
      .string()
      .min(3, 'Username must be at least 3 characters long')
      .max(50, 'Username must be at most 50 characters long'),
    password: z
      .string()
      .min(4, 'Password must be at least 4 characters long')
      .max(50, 'Password must be at most 50 characters long')
  })
)

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    username: 'emilys',
    password: 'emilyspass'
  }
})

const onSubmit = form.handleSubmit((values) => {
  login(
    { username: values.username, password: values.password },
    {
      onSuccess: (values) => {
        localStorage.setItem('accessToken', values.token)
        localStorage.setItem('refreshToken', values.refreshToken)
        router.push('/products')
      }
    }
  )
})
</script>

<template>
  <Card class="w-full max-w-sm">
    <form @submit="onSubmit">
      <CardHeader>
        <CardTitle class="text-2xl">Login</CardTitle>
        <CardDescription> Enter your email below to login to your account. </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="vip123"
                v-bind="componentField"
                :disable="isPending"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="*********"
                v-bind="componentField"
                :disable="isPending"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </CardContent>
      <CardFooter>
        <Button :disable="isPending" class="w-full">
          <Loader2 v-if="isPending" class="w-4 h-4 mr-2 animate-spin" />
          Sign in
        </Button>
      </CardFooter>
    </form>
  </Card>
</template>
