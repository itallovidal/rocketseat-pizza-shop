import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header.tsx'

export function AppLayout() {
  return (
    <div>
      <Header />

      <div className={'p-6'}>
        <Outlet />
      </div>

      <footer>footer</footer>
    </div>
  )
}
