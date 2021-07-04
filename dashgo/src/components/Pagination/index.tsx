import { Stack, Button, Box } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

export function Pagination() {

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
        <PaginationItem numberPage={1} isCurrent />
        <PaginationItem numberPage={2}  />
        <PaginationItem numberPage={3}  />
        <PaginationItem numberPage={4}  />

     
      </Stack>
    </Stack>
  )
}