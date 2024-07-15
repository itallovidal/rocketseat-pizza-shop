import React from 'react'
import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import { Separator } from '@/components/ui/separator.tsx'
import { Link } from 'react-router-dom'
import { NavButton } from '@/components/navButton.tsx'

export function Header() {
  return (
    <div className={'border-b'}>
      <div className={'flex h-16 items-center gap-6 px-6'}>
        <Pizza className={'h-6 w-6'} />
        <Separator orientation={'vertical'} className={'h-6'} />
        <nav className={'flex items-center space-x-4 lg:space-x-6'}>
          <NavButton Icon={Home} to={'/'}>
            Home
          </NavButton>
          <NavButton Icon={UtensilsCrossed} to={'/orders'}>
            Pedidos
          </NavButton>
        </nav>
      </div>
    </div>
  )
}
