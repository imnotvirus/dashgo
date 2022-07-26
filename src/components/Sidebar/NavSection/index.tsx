import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";
import { INavSection } from "./types";

// import { Container } from './styles';

const NavSection: React.FC<INavSection> = ({ title, children }) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      {children}
    </Box>
  );
};

export default NavSection;
