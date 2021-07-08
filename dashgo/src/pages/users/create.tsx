import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button } from '@chakra-ui/react'
import { Input } from '../../components/Form/Input';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


type CreateUserFormData = {
  name: string;
  email: string;
  password: string
  password_confirmation: string
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório.'),
  email: yup.string().required('E-mail obrigatório.').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória.').min(6, 'No mínimo 6 caracteres.'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password'),
  ], 'As senhas precisam ser iguais'),
})


export default function UserList() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  });

  const { errors } = formState;
  console.log(errors)

  const handleCreateUser: SubmitHandler<CreateUserFormData> = (values) => {
    console.log(values)
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box as="form" onSubmit={handleSubmit(handleCreateUser)} flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>         
        
          <Divider my="6" borderColor="gray.700" />
            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input name="name" error={errors.name} label="Nome completo" {...register('name')}/>
                <Input name="email" error={errors.email} label="Email" {...register('email')}/>
              </SimpleGrid>
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input name="password" error={errors.password} type="password" label="Senha" {...register('password')}/>
                <Input name="password_confirmation" error={errors.password_confirmation} type="password" label="Confirmação de senha" {...register('password_confirmation')}/>
              </SimpleGrid>
            </VStack>

            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
               <Link href="/users" passHref>
                  <Button as="a" colorScheme="whiteAlpha">
                    Cancelar
                  </Button>
                </Link>
                <Button isLoading={formState.isSubmitting} type="submit" colorScheme="pink">
                  Salvar
                </Button>

              </HStack>
            </Flex>
        </Box>
      
      </Flex>
    </Box>
  )
}