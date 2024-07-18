import { api } from '@/lib/axios.ts'

export type TOrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

export interface Order {
  orderId: string
  createdAt: string
  status: TOrderStatus
  customerName: string
  total: number
}

interface GetOrdersResponse {
  orders: Order[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

interface GetOrdersRequest {
  pageIndex: number
}

export async function getOrders({
  pageIndex,
}: GetOrdersRequest): Promise<GetOrdersResponse> {
  const response = await api.get('/orders', {
    params: {
      pageIndex,
    },
  })

  return response.data
}
