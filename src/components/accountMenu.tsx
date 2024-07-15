import React from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Building, ChevronDown, LogOut } from 'lucide-react'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'}>
          Pizza Shop <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align={'end'} className={'w-56'}>
        <DropdownMenuLabel className={'flex flex-col '}>
          <span>Nome da pessoa</span>
          <span className={'text-xs font-normal text-muted-foreground'}>
            email cadastrado aqui
          </span>
        </DropdownMenuLabel>

        <DropdownMenuItem className={'flex justify-between'}>
          <span>Perfil da loja</span>
          <Building />
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className={'flex justify-between text-rose-500'}>
          <span className={'font-semibold'}>Sair</span>
          <LogOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
