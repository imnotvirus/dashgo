import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

const Sidebar: React.FC = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" py="1">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text fontSize="medium" ml="4">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" py="1">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text fontSize="medium" ml="4">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" py="1">
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text fontSize="medium" ml="4">
                Formulários
              </Text>
            </Link>
            <Link display="flex" py="1">
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text fontSize="medium" ml="4">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
