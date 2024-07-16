import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'

import * as colors from 'tailwindcss/colors'

import {
  ResponsiveContainer,
  LineChart,
  YAxis,
  CartesianGrid,
  Line,
  XAxis,
} from 'recharts'

const data = [
  {
    date: '10/12',
    revenue: 1200,
  },
  {
    date: '12/12',
    revenue: 312,
  },
  {
    date: '13/12',
    revenue: 432,
  },
  {
    date: '14/12',
    revenue: 567,
  },
  {
    date: '15/12',
    revenue: 923,
  },
  {
    date: '16/12',
    revenue: 1200,
  },
]

export function RevenueChart() {
  return (
    <Card className={'col-span-6'}>
      <CardHeader className={'flex-row items-center justify-between pb-8'}>
        <div className={'space-y-1'}>
          <CardTitle>Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={'100%'} height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <CartesianGrid vertical={false} className={'stroke-muted'} />

            <XAxis dataKey={'date'} tickLine={false} dy={16} />

            <YAxis
              width={80}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <Line
              type={'linear'}
              strokeWidth={2}
              dataKey={'revenue'}
              stroke={colors.red['600']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
