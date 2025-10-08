"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/shadcn-ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn-ui/form"
import { Input } from "@/components/shadcn-ui/input"

import { useTransition } from "react"

import {
  signInWithEmailSchema,
  SignInWithEmailType,
} from "@/schemas/auth-schema"

import { signInWithEmail } from "@/actions/auth-action"

export function SignInForm() {

  const [isPending, startTransition] = useTransition()

  const form = useForm<SignInWithEmailType>({
    resolver: zodResolver(signInWithEmailSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: SignInWithEmailType) {
    startTransition(async () => {
      await signInWithEmail(values)
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={isPending}
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}