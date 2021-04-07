import { Flex, HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserLine } from "react-icons/ri";

export function NotificationsNav() {
  return (
    <Flex
        alignItems="center"
        marginLeft="auto"
      >
        <HStack
          spacing="4"
          marginX="8"
          paddingRight="8"
          paddingY="1"
          color="gray.300"
        >
          <Icon as={RiNotificationLine} />
          <Icon as={RiUserLine} />
        </HStack>
      </Flex>
  )
}