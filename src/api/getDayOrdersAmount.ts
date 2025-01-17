import { api } from '@/lib/axios.ts'

export interface GetDayOrdersAmountResponse {
  amount: number
  diffFromYesterday: number
}

export async function getDayOrdersAmount(): Promise<GetDayOrdersAmountResponse> {
  const response = await api.get('/metrics/day-orders-amount')

  return response.data
}
