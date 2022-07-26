import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";
import React, { ElementType } from "react";

interface INavLink extends ChakraLinkProps {
  children: string;
  icon: ElementType;
}
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
