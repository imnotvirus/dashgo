import { FormControl, FormLabel, Input as ChakraInput } from "@chakra-ui/react";
import React from "react";
import { IInput } from "./types";

const Input: React.FC<IInput> = ({ name, label, ...rest }) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>Email</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
};

export default Input;
