import './style/global.css'
import { AppRoutes } from '@/pages/AppRoutes.tsx'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import React from 'react'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/theme/themeProvider.tsx'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey={'pizzashop-theme'} defaultTheme={'dark'}>
        <Toaster />
        <Helmet titleTemplate={'%s | Pizza Shop'} />
        <AppRoutes />
      </ThemeProvider>
    </HelmetProvider>
  )
}
