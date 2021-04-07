import { Stack, Button, Box } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack
      direction="row"
      marginTop="8"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width= "4"
          colorScheme="pink"
          disabled
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default'
          }}
        >
          1
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width= "4"
          backgroundColor="gray.700"
          _hover={{
            bgColor: 'gray.500'
          }}
        >
          2
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width= "4"
          backgroundColor="gray.700"
          _hover={{
            bgColor: 'gray.500'
          }}
        >
          3
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width= "4"
          backgroundColor="gray.700"
          _hover={{
            bgColor: 'gray.500'
          }}
        >
          4
        </Button>
      </Stack>
    </Stack>
  )
}