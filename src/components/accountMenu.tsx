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
import { useQuery } from 'react-query'
import { getProfile } from '@/api/getProfile.ts'
import { getManagedRestaurant } from '@/api/getManagedRestaurant.ts'
import { ButtonSkeleton } from '@/components/skeletons/ButtonSkeleton.tsx'
import { Dialog, DialogTrigger } from '@/components/ui/dialog.tsx'
import { StoreProfileDialog } from '@/components/storeProfileDialog.tsx'

export function AccountMenu() {
  const { data: profile, isLoading: getProfileLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })

  const { data: managedRestaurant, isLoading: getManagedRestaurantLoading } =
    useQuery({
      queryKey: ['managed-restaurant'],
      queryFn: getManagedRestaurant,
    })

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {getManagedRestaurantLoading ? (
            <ButtonSkeleton />
          ) : (
            <Button variant={'outline'}>
              {managedRestaurant?.name} <ChevronDown />
            </Button>
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent align={'end'} className={'w-56'}>
          <DropdownMenuLabel className={'flex flex-col '}>
            <span>{profile?.name}</span>
            <span className={'text-xs font-normal text-muted-foreground'}>
              {profile?.email}
            </span>
          </DropdownMenuLabel>

          <DialogTrigger asChild>
            <DropdownMenuItem className={'flex justify-between'}>
              <span>Perfil da loja</span>
              <Building />
            </DropdownMenuItem>
          </DialogTrigger>

          <DropdownMenuSeparator />

          <DropdownMenuItem className={'flex justify-between text-rose-500'}>
            <span className={'font-semibold'}>Sair</span>
            <LogOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <StoreProfileDialog />
    </Dialog>
  )
}
