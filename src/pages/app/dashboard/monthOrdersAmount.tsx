import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { DollarSign } from 'lucide-react'

export function MonthOrdersAmount() {
  return (
    <Card>
      <CardHeader
        className={'flex-row items-center justify-between space-y-0 pb-2'}
      >
        <CardTitle> Pedidos totais (mês)</CardTitle>
        <DollarSign className={`h-4 w-4 text-muted-foreground`} />
      </CardHeader>
      <CardContent>
        <span>246</span>
        <p className={'text-xs text-muted-foreground'}>
          <span className={'text-emerald-500 dark:text-emerald-400'}>+6%</span>{' '}
          em relação ao mês passado.
        </p>
      </CardContent>
    </Card>
  )
}
