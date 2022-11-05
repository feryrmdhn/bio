import { FC } from 'react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    useColorMode,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MoonIcon,
    SunIcon,
} from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../../types';

const Header: FC = () => {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode()
    const bgColor = useColorModeValue("white", "#1a202c")

    return (
        <Box as="header" position={'fixed'} top={0} m={0} w={'100%'} zIndex={1}>
            <Flex
                bg={bgColor}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ?
                            <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5}
                            />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    mr={1}
                >
                    <Button
                        onClick={toggleColorMode}
                        fontSize={'md'}
                        variant={'ghost'}
                        aria-label={'Toggle Theme'}
                    >
                        {colorMode === 'dark' ? <SunIcon color={'#d1d100'} /> : <MoonIcon />}
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}


const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', '#d1d100');
    const linkHoverColor = useColorModeValue('gray.800', '#9a9a1a');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                as={NavLink}
                                end
                                to={navItem.href as string}
                                p={2}
                                fontFamily={'sans-serif'}
                                fontSize={'md'}
                                letterSpacing={1.5}
                                color={linkColor}
                                _activeLink={{ fontWeight: 'bold' }}
                                _focus={{
                                    background: 'none'
                                }}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            fontFamily={'sans-serif'}
            letterSpacing={1.5}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('blackAlpha.200', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{
                            color: useColorModeValue('black', '#d1d100')
                        }}
                        fontWeight={500} >
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={useColorModeValue('black', '#d1d100')} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link >
    );
};

const MobileNav = () => {
    return (
        <Stack
            p={4}
            display={{ md: 'none' }}
            bg={useColorModeValue('white', '#1a202c')}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
    const linkColor = useColorModeValue('gray.600', '#d1d100');

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontFamily={'sans-serif'}
                    fontSize={'md'}
                    letterSpacing={1.5}
                    color={linkColor}
                    pl={2}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    align={'start'}
                >
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} px={2} w={'100%'} href={child.href} _hover={{ border: 'none' }}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse >
        </Stack >
    );
};

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Works',
        href: '/work'
    },
    {
        label: 'Blog',
        href: '/blog'
    },
    {
        label: 'Contact',
        children: [
            {
                label: 'Whatsapp',
                href: '#',
            },
            {
                label: 'Telegram',
                href: '#',
            },
        ],
    },
];

export default Header;
