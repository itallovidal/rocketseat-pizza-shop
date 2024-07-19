import { TOrderStatus } from '@/api/getOrders.ts'

const orderStatusMap: Record<TOrderStatus, string> = {
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Saiu para entrega',
  pending: 'Pendente',
  processing: 'Processando',
}

export function OrderStatus({ status }: { status: TOrderStatus }) {
  return (
    <div className={'flex items-center gap-2'}>
      {status === 'pending' && (
        <span className={'h-2 w-2 rounded-full bg-slate-500'} />
      )}

      {status === 'canceled' && (
        <span className={'h-2 w-2 rounded-full bg-rose-500'} />
      )}
      {status === 'delivering' && (
        <span className={'h-2 w-2 rounded-full bg-purple-600'} />
      )}

      {status === 'delivered' && (
        <span className={'h-2 w-2 rounded-full bg-emerald-500'} />
      )}

      {status === 'processing' && (
        <span className={'h-2 w-2 rounded-full bg-amber-500'} />
      )}
      <span>{orderStatusMap[status]}</span>
    </div>
  )
}
