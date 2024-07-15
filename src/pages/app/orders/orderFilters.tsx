import React from 'react'
import { Input } from '@/components/ui/input.tsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx'
import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'

export function OrderFilters() {
  return (
    <form className={'flex items-center gap-2'}>
      <span>Filtros:</span>
      <Input placeholder={'Id do pedido'} className={'h-8 w-[320px]'} />
      <Input placeholder={'Nome do cliente'} className={'h-8 w-[320px]'} />
      <Select defaultValue={'all'}>
        <SelectTrigger className={'h-8 w-[180px]'}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={'all'}>Todos</SelectItem>
          <SelectItem value={'pending'}>Pendentes</SelectItem>
          <SelectItem value={'canceled'}>Cancelados</SelectItem>
          <SelectItem value={'processing'}>Em preparo</SelectItem>
          <SelectItem value={'delivered'}>Entregue</SelectItem>
        </SelectContent>
      </Select>

      <Button type={'submit'} size={'xs'} variant={'secondary'}>
        <Search className={'mr-2 h-4 w-4'} />
        Filtrar Resultados
      </Button>

      <Button type={'button'} size={'xs'} variant={'secondary'}>
        <X className={'mr-2 h-4 w-4'} />
        Limpar filtros
      </Button>
    </form>
  )
}
