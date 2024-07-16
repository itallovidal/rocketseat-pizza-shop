import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'

import * as colors from 'tailwindcss/colors'

import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { BarChart } from 'lucide-react'

const data = [
  {
    product: 'Peperoni',
    amount: 12,
  },
  {
    product: 'Mussarela',
    amount: 23,
  },
  {
    product: 'Marguerita',
    amount: 41,
  },
  {
    product: 'Quatro queijos',
    amount: 21,
  },
  {
    product: 'Frango',
    amount: 56,
  },
]

const COLORS = [
  colors.red[500],
  colors.blue[500],
  colors.emerald[500],
  colors.rose[500],
  colors.orange[500],
]

export function PopularProductsChart() {
  return (
    <Card className={'col-span-3'}>
      <CardHeader className={'flex-row items-center justify-between pb-8'}>
        <div className={'space-y-1 flex-row flex justify-between w-full'}>
          <CardTitle className={''}>Produtos populares</CardTitle>
          <BarChart className={'h-4 w-4 text-muted-foreground'} />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={'100%'} height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
              data={data}
              type={'linear'}
              strokeWidth={2}
              dataKey={'amount'}
              nameKey={'product'}
            >
              {data.map((_, index) => {
                return (
                  <Cell
                    key={`cel-${index}`}
                    fill={COLORS[index]}
                    className={'stroke-background'}
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
