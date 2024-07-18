import { api } from '@/lib/axios.ts'

interface SignBody {
  email: string
}

export async function signIn({ email }: SignBody): Promise<string> {
  const response = await api.post('/authenticate', {
    email,
  })

  return response.data
}
