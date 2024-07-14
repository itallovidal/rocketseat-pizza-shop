import React from 'react'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <header>cabeçalho</header>

      <div>
        <Outlet />
      </div>

      <footer>footer</footer>
    </div>
  )
}
