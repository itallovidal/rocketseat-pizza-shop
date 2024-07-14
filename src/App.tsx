import './style/global.css'
import { AppRoutes } from '@/pages/AppRoutes.tsx'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import React from 'react'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate={'%s | Pizza Shop'} />
      <AppRoutes />
    </HelmetProvider>
  )
}
