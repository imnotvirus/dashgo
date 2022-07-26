import { LinkProps as ChakraLinkProps } from "@chakra-ui/core";
import { ElementType } from "react";

export interface INavLink extends ChakraLinkProps {
  children: string;
  icon: ElementType;
}
