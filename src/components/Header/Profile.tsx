import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex alignItems="center">
      <Box marginRight="4" textAlign="right">
        <Text>Gabriel Buzzi</Text>
        <Text color="gray.300" fontSize="small">
          gabrielbuzziv@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Gabriel buzzi" src="https://github.com/gabrielbuzziv.png" />
    </Flex>
  )
}