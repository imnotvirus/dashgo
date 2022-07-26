import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Profile: React.FC = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign={"right"}>
        <Text>Luiz Claudio</Text>
        <Text color="gray.300" fontSize="small">
          lcluizclaudio96@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Luiz Claudio"
        src="https://github.com/imnotvirus.png"
      />
    </Flex>
  );
};

export default Profile;
