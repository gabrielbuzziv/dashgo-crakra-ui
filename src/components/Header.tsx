import { Flex, Input, Text, Icon, HStack } from '@chakra-ui/react';

import { RiNotificationLine, RiSearchLine, RiUserLine } from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      alignItems="center"
    >

      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        width="64"
      >
        dashgo
        <Text as="span" color="pink.500" marginLeft="1">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        paddingY="4"
        paddingX="8"
        marginLeft="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        background="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{
            color: 'gray.400'
          }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
    
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
    </Flex>
  );
}