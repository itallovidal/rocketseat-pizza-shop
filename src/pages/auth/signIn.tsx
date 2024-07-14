import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Input } from '@/components/ui/input.tsx'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const signInSchema = z.object({
  email: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .min(10, {
      message: 'Campo deve haver pelo menos 10 caracteres.',
    })
    .email({
      message: 'O campo precisa ser um email.',
    }),
})

interface ISignInSchema extends z.infer<typeof signInSchema> {}

export function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<ISignInSchema>({
    resolver: zodResolver(signInSchema),
  })

  async function handleSignIn(data: ISignInSchema) {
    console.log(data)
  }

  return (
    <>
      <Helmet title={'Signin'} />
      <div className={'p-8'}>
        <div className={'flex w-[350px] flex-col justify-center gap-6'}>
          <div className={'flex flex-col gap-2 text-center'}>
            <h1 className={'text-2xl font-semibold tracking-tight'}>
              Acessar painel
            </h1>
            <p className={'text-sm text-muted-foreground'}>
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className={'space-y-4'}>
            <div className={'space-y-2'}>
              <Label>Seu e-mail</Label>
              <Input id={'email'} type={'email'} {...register('email')} />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <Button
              disabled={isSubmitting}
              className={'w-full'}
              type={'submit'}
            >
              Acessar Painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
