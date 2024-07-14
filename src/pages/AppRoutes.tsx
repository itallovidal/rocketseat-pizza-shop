import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from '@/pages/auth/signIn.tsx'
import { Dashboard } from '@/pages/app/dashboard.tsx'
import { AppLayout } from '@/pages/_layout/appLayout.tsx'
import { AuthLayout } from '@/pages/_layout/authLayout.tsx'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<AppLayout />}>
          <Route path={'/'} element={<Dashboard />} />
        </Route>

        <Route path={'/'} element={<AuthLayout />}>
          <Route path={'/sign-in'} element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
