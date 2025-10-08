"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn-ui/dropdown-menu"
import {
    SidebarMenuButton,
} from "@/components/shadcn-ui/sidebar"
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/shadcn-ui/avatar"
import {
    ChevronsUpDown,
    LogOut,
    Settings,
    User
} from "lucide-react"
import { signOut } from "@/server/auth-action"

type NavUserProps = {
    user: {
        name?: string | null
        email?: string | null
        image?: string | null
    }
}

export default function NavUser({ user }: NavUserProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                    size="lg"
                    className="text-sidebar-accent-foreground cursor-pointer"
                >
                    <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src={user.image || "https://github.com/shadcn.png"} />
                        <AvatarFallback className="rounded-lg">
                            {user.name?.split(" ").map((n) => n[0]).join("") || "CN"}
                        </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">{user.name}</span>
                        <span className="truncate text-muted-foreground text-xs">{user.email}</span>
                    </div>
                    <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                side="top"
                className="w-56"
            >
                <DropdownMenuItem>
                    <User />
                    Mon profil
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Settings />
                    Paramètres
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="cursor-pointer"
                    onSelect={async () => {
                        await signOut()
                    }}
                >
                    <LogOut />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
