import Head from 'next/head';
import { Box, Flex, Heading, Text, Table, Tbody, Td, Th, Thead, Tr, Checkbox, Button, Icon, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import Link from 'next/link'

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <>
      <Head>
        <title>Usuários | dashgo.</title>
      </Head>

      <Box>
        <Header />

        <Flex
          width="100%"
          maxWidth={1480}
          marginX="auto"
          paddingX="6"
        >
          <Sidebar />

          <Box
            flex="1"
            borderRadius="1"
            backgroundColor="gray.800"
            padding="8"
          >
            <Flex marginBottom="8" justify="space-between" alignItems="center">
              <Heading size="lg" fontWeight="normal">Usuários</Heading>

              <Link href="/users/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} />}
                >
                  Criar novo
                </Button>
              </Link>
            </Flex>

            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th paddingX={["4", "4", "6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>Usuário</Th>
                  {isWideVersion && (<Th>Data de cadastro</Th>)}
                  <Th></Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td paddingX={["4", "4", "6"]}>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Text fontWeight="bold">Gabriel Buzzi</Text>
                    <Text fontSize="sm" fontWeight="bold">gabrielbuzziv@gmail.com</Text>
                  </Td>
                  { isWideVersion && <Td>04 de abril, 2021</Td> }
                  { isWideVersion && (
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar
                      </Button>
                    </Td>
                  ) }
                </Tr>

                <Tr>
                  <Td paddingX={["4", "4", "6"]}>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Text fontWeight="bold">Gabriel Buzzi</Text>
                    <Text fontSize="sm" fontWeight="bold">gabrielbuzziv@gmail.com</Text>
                  </Td>
                  { isWideVersion && <Td>04 de abril, 2021</Td> }
                  { isWideVersion && (
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar
                      </Button>
                    </Td>
                  ) }
                </Tr>
              </Tbody>
            </Table>

            <Pagination />
          </Box>
        </Flex>
      </Box>
    </>
  )
}