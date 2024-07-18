import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Textarea } from '@/components/ui/textarea.tsx'
import { useQuery } from 'react-query'
import { getManagedRestaurant } from '@/api/getManagedRestaurant.ts'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
})

interface IStoreProfileSchema extends z.infer<typeof storeProfileSchema> {}

export function StoreProfileDialog() {
  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
  })

  const { register, handleSubmit } = useForm<IStoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da Loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis ao seu cliente
        </DialogDescription>
      </DialogHeader>

      <form action="">
        <div className={'space-x-4 py-4'}>
          <div className={'grid grid-cols-4 items-center gap-4'}>
            <label className={'text-right'} htmlFor="name">
              Nome
            </label>
            <Input className={'col-span-3'} id={'name'} {...register('name')} />
          </div>

          <div className={'grid grid-cols-4 items-center gap-4'}>
            <label className={'text-right'} htmlFor="description">
              Descrição
            </label>
            <Textarea
              className={'col-span-3'}
              id={'description'}
              {...register('description')}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant={'ghost'} type={'button'}>
            Cancelar
          </Button>
          <Button type={'submit'} variant={'success'}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
