import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header.tsx'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card.tsx'
import { CalendarDays, Home } from 'lucide-react'

export function AppLayout() {
  return (
    <div>
      <Header />

      <div className={'p-6'}>
        <Outlet />
      </div>
    </div>
  )
}
