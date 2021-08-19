import { Flex, Button, Stack, } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório.').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória.'),
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors } = formState;
  console.log(errors)

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
   await new Promise(resolve => setTimeout(resolve, 2000))
   
    console.log(values);

    
  }

  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex
        as="form"
        flexDir="column"
        w="100%"
        maxW={360}
        bg="gray.800"
        borderRadius={8}
        p="8"
        onSubmit={handleSubmit(handleSignIn)}
        >

        <Stack spacing="4">                
          <Input
            name="email"
            type="email"
            error={errors.email}
            label="E-mail"
            {...register('email')}
          />
            
          <Input
            error={errors.password}
            name="password"
            type="password"
            label="Senha"
            {...register('password')}
          />
        </Stack>
        <Button isLoading={formState.isSubmitting} type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
