import { Input as ChakraInput , FormLabel, FormControl, InputProps as ChakraInputProps } from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }) {

  return (
    <FormControl>
           {!!label &&  (<FormLabel htmlFor={name}>{label}</FormLabel>)}
              <ChakraInput
                  name={name}
                  id={name}
                  type="email"
                  bgColor="gray.900"
                  variant="filled"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                  size="lg"
                  focusBorderColor="pink.500" 
                  {...rest}                   
                />
          </FormControl>
  )
}