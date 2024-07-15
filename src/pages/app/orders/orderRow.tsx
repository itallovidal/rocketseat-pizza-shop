import { TableCell, TableRow } from '@/components/ui/table.tsx'
import { Button } from '@/components/ui/button.tsx'
import { ChevronRight, Search, X } from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog.tsx'
import { OrderDetails } from '@/pages/app/orders/orderDetails.tsx'

export function OrderRow() {
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
  )
}
