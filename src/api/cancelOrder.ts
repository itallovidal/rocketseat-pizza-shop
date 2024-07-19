import { api } from '@/lib/axios.ts'

export async function cancelOrder(orderId: string) {
  await api.patch(`orders/${orderId}/cancel`)
}
