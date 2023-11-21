'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Image,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

const handleAcheterClick = () => {
  const whatsappUrl = `https://wa.me/+2250501310360`;
  window.location.href = whatsappUrl;
};
const NavLink = (props: NavLinkProps) => {
  const { href, children, ...rest } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={href}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const links = [
    { text: 'Abonnement', href: '#abonnement' },
    { text: 'Recharge', href: '#rechargement' },
    { text: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <Box id='navbar' bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={100} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'start'}>
            <Image
              rounded={'lg'}
              height={100}
              width={102}
              margin={10}
              objectFit={'cover'}
              src={'images/logo.png'}
              alt="#"
            />
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => (
                <NavLink key={link.text} href={link.href}>
                  {link.text}
                </NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Button
              variant={'solid'}
              colorScheme={'teal'}
              margin={8}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}
              onClick={handleAcheterClick}
            >
              
              Commander
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map((link) => (
                <NavLink key={link.text} href={link.href}>
                  {link.text}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
