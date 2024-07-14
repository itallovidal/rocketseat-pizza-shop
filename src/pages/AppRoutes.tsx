import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from '@/pages/app/dashboard.tsx'
import { SignIn } from '@/pages/auth/signIn.tsx'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Dashboard />} />
        <Route path={'/signin'} element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}
