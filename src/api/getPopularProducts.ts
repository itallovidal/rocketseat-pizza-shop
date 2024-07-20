import { api } from '@/lib/axios.ts'

interface GetPopularProductsResponse {
  amount: number
  product: string
}

export async function getPopularProducts(): Promise<
  GetPopularProductsResponse[]
> {
  const response = await api.get('/metrics/popular-products')

  return response.data
}
