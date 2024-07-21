import { api } from '@/lib/axios.ts'

export interface SignInBody {
  email: string
}

export async function signIn({ email }: SignInBody): Promise<string> {
  const response = await api.post('/authenticate', {
    email,
  })

  return response.data
}
