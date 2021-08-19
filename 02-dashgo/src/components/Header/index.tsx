import { Flex, IconButton, useBreakpointValue, Icon } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './Search';


export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
   <Flex
    as="header"
    w="100%"
    maxW={1480}
    h="20"
    mx="auto"
    mt="4"
    px="6"
    align="center"
   >
    { !isWideVersion && (
      <IconButton aria-label="Open navigation" mr="3" fontSize="24" variant="unstyled" onClick={onOpen} icon={<Icon as={RiMenuLine} />} />
    ) } 
    <Logo />
    {isWideVersion && (
      <SearchBox  />
    )}
   
    <Flex align="center" ml="auto"
    >

    <NotificationsNav />

     <Profile showProfileData={isWideVersion} />


    </Flex>   
   </Flex>
  )
}