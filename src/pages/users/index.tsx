import Head from 'next/head';
import Link from 'next/link'
import { Box, Flex, Heading, Text, Table, Tbody, Td, Th, Thead, Tr, Checkbox, Button, Icon, useBreakpointValue, Spinner, Link as CrakraLink } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { queryClient } from '../../services/queryClient';

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from '../../services/hooks/useUsers';
import { useState } from 'react';
import { api } from '../../services/api';

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page, {});

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`/users/${userId}`)

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10 // 10 minutes
    })
  }

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
              <Heading size="lg" fontWeight="normal">
                Usuários

                {!isLoading && isFetching && <Spinner size="sm" color="gray.500" marginLeft="4" />}
              </Heading>

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

            {isLoading ? (
              <Flex justifyContent="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justifyContent="center">
                <Text>Falha ao obter dados do usuário</Text>
              </Flex>
            ) : (
              <>
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
                    {data.users.map(user => {
                      return (
                        <Tr key={String(user.id)}>
                          <Td paddingX={["4", "4", "6"]}>
                            <Checkbox colorScheme="pink" />
                          </Td>
                          <Td>
                            <CrakraLink color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                              <Text fontWeight="bold">{user.name}</Text>
                            </CrakraLink>
                            <Text fontSize="sm" fontWeight="bold">{user.email}</Text>
                          </Td>
                          {isWideVersion && <Td>{user.createdAt}</Td>}
                          {isWideVersion && (
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
                          )}
                        </Tr>
                      )
                    })}
                  </Tbody>
                </Table>

                <Pagination
                  totalCountOfRegisters={data.totalCount}
                  currentPage={page}
                  onPageChange={setPage}
                />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  )
}

