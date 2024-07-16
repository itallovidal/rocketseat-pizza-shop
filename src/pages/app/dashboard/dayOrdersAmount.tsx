import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { DollarSign } from 'lucide-react'

export function DayOrdersAmount() {
  return (
    <Card>
      <CardHeader
        className={'flex-row items-center justify-between space-y-0 pb-2'}
      >
        <CardTitle> Pedidos (dia )</CardTitle>
        <DollarSign className={`h-4 w-4 text-muted-foreground`} />
      </CardHeader>
      <CardContent>
        <span>21</span>
        <p className={'text-xs text-muted-foreground'}>
          <span className={'text-rose-500 dark:text-rose-400'}>-6%</span> em
          relação a ontem.
        </p>
      </CardContent>
    </Card>
  )
}
