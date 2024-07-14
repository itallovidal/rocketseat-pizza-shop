import './style/global.css'
import { AppRoutes } from '@/pages/AppRoutes.tsx'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import React from 'react'
import { Toaster } from 'sonner'

export function App() {
  return (
    <HelmetProvider>
      <Toaster />
      <Helmet titleTemplate={'%s | Pizza Shop'} />
      <AppRoutes />
    </HelmetProvider>
  )
}
