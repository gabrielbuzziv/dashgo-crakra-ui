import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSession } from "./NavSession";

export function SidebarNav() {
  return (
    <Stack spacing="12" alignItems="flex-start">
      <NavSession title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink href="/users" icon={RiContactsLine}>Usuários</NavLink>
      </NavSession>

      <NavSession title="AUTOMAÇÃO">
        <NavLink href="/forms" icon={RiInputMethodLine}>Formulários</NavLink>
        <NavLink href="/automations" icon={RiGitMergeLine}>Automação</NavLink>
      </NavSession>
    </Stack>
  )
}