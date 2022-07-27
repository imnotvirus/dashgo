import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";
import PaginationItem from "./PaginationItem";
import { IPagination } from "./types";

const Pagination: React.FC<IPagination> = ({}) => {
  return (
    <Stack
      direction="row"
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem isCurrent page={1} />
        <PaginationItem page={2} />
        <PaginationItem page={3} />
        <PaginationItem page={4} />
        <PaginationItem page={5} />
      </Stack>
    </Stack>
  );
};

export default Pagination;
