import { Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import NotificationsNav from "./NotificationsNav";
import Profile from "./Profile";
import SearchBox from "./SearchBox";

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
};

export default Header;
