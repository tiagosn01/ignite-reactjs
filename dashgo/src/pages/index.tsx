import { Flex, Input, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">

      <Flex as="form" flexDir="column" w="100%" maxW={360} bg="gray.800" borderRadius={8} p="8">
        <Input name="email" type="email" bgColor="gray.900" focusBorderColor="pink.500" />
        <Input name="password" type="password" bgColor="gray.900" focusBorderColor="pink.500" />
        <Button type="submit" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
