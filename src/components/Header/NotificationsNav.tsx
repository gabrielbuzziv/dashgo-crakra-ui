import { Flex, HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserLine } from "react-icons/ri";

export function NotificationsNav() {
  return (
    <HStack
      spacing={["6", "8"]}
      marginX={["6", "8"]}
      paddingRight={["6", "8"]}
      paddingY="1"
      color="gray.300"
    >
      <Icon as={RiNotificationLine} />
      <Icon as={RiUserLine} />
    </HStack>
  )
}