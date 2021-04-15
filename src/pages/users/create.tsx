import Head from 'next/head';
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from '../../components/Form/Input';

import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Link from 'next/link';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais.')
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema)
  });

  const { errors, isSubmitting } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  };

  return (
    <>
      <Head>
        <title>Criar usuários | dashgo.</title>
      </Head>

      <Box>
        <Header />

        <Flex width="100%" maxWidth={1480} marginX="auto" paddingX="6">
          <Sidebar />

          <Box
            as="form"
            flex="1"
            borderRadius="1"
            backgroundColor="gray.800"
            padding={["6", "8"]}
            onSubmit={handleSubmit(handleCreateUser)}
          >
            <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

            <Divider marginY="6" borderColor="gray.600"></Divider>

            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                <Input
                  name="name"
                  label="Nome completo"
                  error={errors.name}
                  {...register('name')}
                />
                <Input
                  name="email"
                  type="email"
                  label="E-mail"
                  error={errors.email}
                  {...register('email')}
                />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                <Input
                  name="password"
                  type="password"
                  label="Senha"
                  error={errors.password}
                  {...register('password')}
                />
                <Input
                  name="confirm_password"
                  type="password"
                  label="Confirmação da senha"
                  error={errors.password_confirmation}
                  {...register('password_confirmation')}
                />
              </SimpleGrid>
            </VStack>

            <Flex marginTop="8" justifyContent="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button colorScheme="whiteAlpha">Cancelar</Button>
                </Link>

                <Button 
                  type="submit"
                  colorScheme="pink"
                  isLoading={isSubmitting}>
                    Salvar
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}