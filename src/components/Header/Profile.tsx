import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex alignItems="center">
      { showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Gabriel Buzzi</Text>
          <Text color="gray.300" fontSize="small">
            gabrielbuzziv@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Gabriel buzzi" src="https://github.com/gabrielbuzziv.png" />
    </Flex>
  )
}