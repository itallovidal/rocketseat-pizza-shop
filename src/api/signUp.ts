import { api } from '@/lib/axios.ts'

interface SignBody {
  restaurantName: string
  email: string
  phone: string
  managerName: string
}

export async function signUp({
  email,
  managerName,
  restaurantName,
  phone,
}: SignBody) {
  await api.post('/restaurants', {
    email,
    restaurantName,
    managerName,
    phone,
  })
}
