import {
    Box,
    Flex,
    HStack,
    Link,
    Text,
    IconButton,
    Button,
    Spacer,
    useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = ['Shop all', 'Catagories', 'Collections', 'About'];

const NavLink = ({ children }) => (
    <Text
        px={2}
        py={1}
        
        rounded={'md'}
        cursor='pointer'
        fontSize='lg'
        _hover={{
            color: '#1DA1F2'
        }}
        href={'#'}>
        {children}
    </Text>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box px={5}>
                <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>

                    <Box  fontSize={{ base: 'sm', md: 'xl' }}
                        _hover={{
                            color: '#1DA1F2'
                        }}
                        cursor='pointer'
                    > <span style={{ fontFamily: "cursive" }} ><b>Webflow</b></span> Merch Store</Box>
                    <Spacer />
                    <Box spacing={8} alignItems={'center'} display='flex' justifyContent={'space-between'}  >
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </Box>
                    <IconButton
                        size={'sm'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack alignItems={'center'}>
                        <Button
                            variant={'solid'}
                            colorScheme={'twitter'}
                            size={{ base: 'sm', md: 'lg' }}
                            mr={4}
                            ml={2}
                            borderRadius='0'
                            bg='#4353FF'
                        >
                            Cart (0)
                        </Button>

                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <HStack spacing={1} fontSize='xxs'>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </Box>
                ) : null}
            </Box>

        </>
    );
}