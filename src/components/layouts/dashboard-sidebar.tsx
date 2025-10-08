import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  SidebarMenuButton,
  // useSidebar,
} from "@/components/shadcn-ui/sidebar"
import NavUser from "@/components/ui/nav-user"
import { requireUser } from "@/lib/auth/auth-session"
import { isAdmin } from "@/lib/auth/auth-admin"

export async function AppSidebar() {
  const user = await requireUser()
  const i = await isAdmin()

  return (
    <Sidebar collapsible="icon">
        <SidebarHeader className="h-16 border-b">

        </SidebarHeader>
        <SidebarContent></SidebarContent>
        <SidebarFooter className="border-t">
          <NavUser
            user={user}
            isAdmin={i}
          />
        </SidebarFooter>
    </Sidebar>
  )
}
