import { Button } from "@chakra-ui/react";
import React from "react";
import { IPaginationItem } from "./types";

const PaginationItem: React.FC<IPaginationItem> = ({
  isCurrent = false,
  page,
}) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: "pink.500",
          cursor: "default",
        }}
      >
        {page}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{ bg: "gray.500" }}
    >
      {page}
    </Button>
  );
};

export default PaginationItem;
