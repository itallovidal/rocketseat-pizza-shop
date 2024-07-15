import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Input } from '@/components/ui/input.tsx'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx'
import { Button } from '@/components/ui/button.tsx'
import { ChevronRight, Search, X } from 'lucide-react'

export function Orders() {
  return (
    <>
      <Helmet title={'Pedidos'} />
      <div className={'space-y-4'}>
        <div className={'flex flex-col gap-4'}>
          <h1 className={'text-3xl font-bold tracking-tight'}>Pedidos</h1>
        </div>

        <form className={'flex items-center gap-2'}>
          <span>Filtros:</span>
          <Input placeholder={'Nome do cliente'} className={'h-8 w-[320px]'} />
        </form>

        <div className={'border rouded-md'}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className={'w-[64px]'}></TableHead>
                <TableHead className={'w-[140px]'}>Identificador</TableHead>
                <TableHead className={'w-[180px]'}>Realizado há</TableHead>
                <TableHead className={'w-[140px]'}>Status</TableHead>
                <TableHead className={'flex-1'}>Cliente</TableHead>
                <TableHead className={'w-[140px]'}>Total do pedido</TableHead>
                <TableHead className={'w-[120px]'}></TableHead>
                <TableHead className={'w-[120px]'}></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Button variant={'outline'} size={'xs'}>
                    <Search className={'h-3 w-3'} />
                    <span className={'sr-only'}>Detalhes do Pedido</span>
                  </Button>
                </TableCell>
                <TableCell className={'font-mono'}>1312312313</TableCell>
                <TableCell>há 15 minutos</TableCell>
                <TableCell>
                  <div className={'flex items-center gap-2'}>
                    <span className={'h-2 w-2 rounded-full bg-slate-500'} />
                    <span>Pendente</span>
                  </div>
                </TableCell>
                <TableCell>Nome nome nome nome</TableCell>
                <TableCell>R$ 149,99</TableCell>
                <TableCell>
                  <Button variant={'ghost'} size={'xs'}>
                    Aprovar
                    <ChevronRight className={'h-4 w-4'} />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant={'ghost'} size={'xs'}>
                    Cancelar
                    <X className={'h-4 w-4'} />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
