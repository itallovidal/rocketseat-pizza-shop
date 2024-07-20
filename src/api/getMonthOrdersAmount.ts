import { api } from '@/lib/axios.ts'

interface GetMonthOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount(): Promise<GetMonthOrdersAmountResponse> {
  const response = await api.get('/metrics/month-orders-amount')

  return response.data
}
