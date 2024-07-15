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
import { OrderRow } from '@/pages/app/orders/orderRow.tsx'
import { OrderFilters } from '@/pages/app/orders/orderFilters.tsx'

export function Orders() {
  return (
    <>
      <Helmet title={'Pedidos'} />
      <div className={'space-y-4'}>
        <div className={'flex flex-col gap-4'}>
          <h1 className={'text-3xl font-bold tracking-tight'}>Pedidos</h1>
        </div>

        <OrderFilters />

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
              <OrderRow />
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
