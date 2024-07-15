import React, { ComponentType } from 'react'
import { Button } from '@/components/ui/button.tsx'
import { LucideProps } from 'lucide-react'
import { LinkProps, Link, useLocation } from 'react-router-dom'

interface NavButton extends LinkProps {
  Icon: ComponentType<LucideProps>
}

export function NavButton({ to, Icon, children }: NavButton) {
  const { pathname } = useLocation()

  return (
    <Button asChild variant={pathname === to ? 'default' : 'ghost'}>
      <Link to={to} className={'gap-2'}>
        <Icon />
        {children}
      </Link>
    </Button>
  )
}
