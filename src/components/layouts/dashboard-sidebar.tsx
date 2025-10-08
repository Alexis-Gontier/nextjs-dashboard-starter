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

export async function AppSidebar() {
  const user = await requireUser()

  return (
    <Sidebar collapsible="icon">
        <SidebarHeader className="h-16 border-b">

        </SidebarHeader>
        <SidebarContent></SidebarContent>
        <SidebarFooter className="border-t">
          <NavUser user={user} />
        </SidebarFooter>
    </Sidebar>
  )
}
