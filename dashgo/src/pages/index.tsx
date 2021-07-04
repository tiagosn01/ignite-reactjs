import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'

import { Input } from '../components/Form/Input';

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex
        as="form"
        flexDir="column"
        w="100%"
        maxW={360}
        bg="gray.800"
        borderRadius={8}
        p="8">

        <Stack spacing="4">                
          <Input
            name="email"
            type="email"
            label="Email"
          />
    

            
          <Input
            name="password"
            type="password"
            label="Senha"
          />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
