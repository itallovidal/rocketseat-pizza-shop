import { TableCell, TableRow } from '@/components/ui/table.tsx'
import { Button } from '@/components/ui/button.tsx'
import { ChevronRight, Search, X } from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog.tsx'
import { OrderDetails } from '@/pages/app/orders/orderDetails.tsx'
import { Order } from '@/api/getOrders.ts'
import { OrderStatus } from '@/pages/app/orders/orderStatus.tsx'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function OrderRow({
  order: { orderId, status, total, customerName, createdAt },
}: {
  order: Order
}) {
  console.log(createdAt)
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={'outline'} size={'xs'}>
              <Search className={'h-3 w-3'} />
              <span className={'sr-only'}>Detalhes do Pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className={'font-mono'}>{orderId}</TableCell>
      <TableCell>
        <OrderStatus status={status} />
      </TableCell>
      <TableCell>{customerName}</TableCell>

      <TableCell>
        {formatDistanceToNow(createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>

      <TableCell>
        {total.toLocaleString('pt-BR', {
          currency: 'BRL',
          style: 'currency',
        })}
      </TableCell>
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
  )
}
