import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header.tsx'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card.tsx'

export function AppLayout() {
  return (
    <div>
      <Header />

      <div className={'p-6'}>
        <Outlet />
      </div>

      <footer>footer</footer>

      <HoverCard>
        <HoverCardTrigger>Esse ara fica no footer!</HoverCardTrigger>
        <HoverCardContent className={'bg-blue-500'}>
          <div>
            <span>oi</span>
            <span>okdawdkw</span>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
