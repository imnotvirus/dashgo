import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

const Sidebar: React.FC = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <Stack spacing="4" mt="8" align="stretch">
            <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
            <NavLink icon={RiContactsLine}>Usuários</NavLink>
          </Stack>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <Stack spacing="4" mt="8" align="stretch">
            <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
            <NavLink icon={RiGitMergeLine}>Automação</NavLink>
          </Stack>
        </NavSection>
      </Stack>
    </Box>
  );
};

export default Sidebar;
