import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import React from "react";
import { INavLink } from "./types";

const NavLink: React.FC<INavLink> = ({ children, icon, href, ...props }) => {
  return (
    <ChakraLink display="flex" alignItems="center" {...props}>
      <Icon as={icon} fontSize="20" />
      <Text fontSize="medium" ml="4">
        {children}
      </Text>
    </ChakraLink>
  );
};

export default NavLink;
