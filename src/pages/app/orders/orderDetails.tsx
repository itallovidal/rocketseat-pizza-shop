import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido 312313123</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className={`space-y-6`}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className={'text-muted-foreground'}>Status</TableCell>
              <TableCell className={'flex justify-end'}>
                <div className={'flex items-center gap-2'}>
                  <span className={'h-2 w-2 rounded-full bg-slate-500'} />
                  <span>Pendente</span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={'text-muted-foreground'}>Cliente</TableCell>
              <TableCell className={'flex justify-end'}>Itallo Vidal</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={'text-muted-foreground'}>
                Telefone
              </TableCell>
              <TableCell className={'flex justify-end'}>21 901293002</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={'text-muted-foreground'}>E-mail</TableCell>
              <TableCell className={'flex justify-end'}>
                Itallo@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={'text-muted-foreground'}>
                Realizado há
              </TableCell>
              <TableCell className={'flex justify-end'}>3 Minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className={'text-right'}>Quantidade</TableHead>
              <TableHead className={'text-right'}>Preço</TableHead>
              <TableHead className={'text-right'}>Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza de peperoni</TableCell>
              <TableCell className={'text-right'}>2</TableCell>
              <TableCell className={'text-right'}>R$ 70</TableCell>
              <TableCell className={'text-right'}>R$ 140,00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Pizza de calabera</TableCell>
              <TableCell className={'text-right'}>3</TableCell>
              <TableCell className={'text-right'}>R$ 50</TableCell>
              <TableCell className={'text-right'}>R$ 150,00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do Pedido</TableCell>
              <TableCell className={'text-right font-medium'}>
                R$ 290,00
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
