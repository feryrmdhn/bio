import { FC } from "react";
import { Box, Container, Flex, Heading, List, Link, ListItem, Text, useColorModeValue } from "@chakra-ui/react";
import { Experience } from "../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/style/index.css'
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const About: FC = () => {
    const colorText = useColorModeValue('black', 'white')

    let works: Array<Experience> = [
        {
            icon: <img src={require('../assets/img/TC.png')} className='company-icon' alt='Tokocrytpo' />,
            title: 'Frontend Developer',
            company: 'Tokocrypto',
            status: 'Remote Fulltime',
            time: 'Jan 2022 - Present',
            location: 'South Jakarta, DKI Jakarta',
            href: 'https://www.tokocrypto.com/'
        },
        {
            icon: <img src={require('../assets/img/RG.png')} className='company-icon' alt='Ruangguru' />,
            title: 'Frontend Mentor',
            company: 'Ruangguru',
            status: 'Remote Freelance',
            time: 'Feb 2022 - Mar 2022',
            location: 'South Jakarta, DKI Jakarta',
            href: 'https://www.ruangguru.com/'
        },
        {
            icon: <img src={require('../assets/img/Kio.png')} className='company-icon' alt='Kioser' />,
            title: 'Frontend Developer',
            company: 'Kioser',
            status: 'Fulltime',
            time: 'Nov 2020 - Jan 2022',
            location: 'Makassar, South Sulawesi',
            href: 'https://kioser.com/'
        },
        {
            icon: <img src={require('../assets/img/Gl.png')} className='company-icon' alt='Glints' />,
            title: 'Frontend Developer',
            company: 'Glints Indonesia',
            status: 'Internship',
            time: 'Apr 2020 - Jul 2020',
            location: 'Batam, Kepulauan Riau',
            href: 'https://glints.com/id'
        },
        {
            icon: <img src={require('../assets/img/Gsi.jpeg')} className='company-icon' alt='GSI' />,
            title: 'Cost Control',
            company: 'GSI',
            status: 'Contract',
            time: 'Aug 2019 - Jan 2020',
            location: 'Kolaka, Southeast Sulawesi',
            href: 'http://www.gsicorp.co.id/'
        },
        {
            icon: <img src={require('../assets/img/hor.png')} className='company-icon' alt='Horison' />,
            title: 'IT Officer',
            company: 'Hotel Horison',
            status: 'Fulltime',
            time: 'Des 2018 - Apr 2019',
            location: 'Makassar, South Sulawesi',
            href: 'https://myhorison.com/hotelprofile/view?hotel=horison-ultima-makassar'
        }
    ]

    const Titlejob = ({ children }: any) => {
        return <Heading
            as='h5'
            fontSize={20}
            fontFamily={'sans-serif'}
            fontWeight={'normal'}
            color={useColorModeValue('gray.600', '#d1d100')}
        >
            {children}
        </Heading>
    }

    return (
        <>
            <Box h={'full'} py={75} px={4}>
                <Container maxW='container.lg'>
                    <Heading
                        as='h2'
                        mb={4}
                        fontFamily={'sans-serif'}
                        color={useColorModeValue('gray.600', '#d1d100')}
                    >
                        About me
                    </Heading>
                    <div className="fadeInUp">
                        <Text
                            fontSize={18}
                            fontFamily={'monospace'}
                            color={colorText}
                            mb={5}
                        >
                            Hello guys, here is <i>Fery Ramadhan Cahyono</i> who works in the field of web interface or front-end development.
                        </Text>
                        <Text
                            fontSize={14}
                            fontFamily={'monospace'}
                            color={colorText}
                            mb={5}
                        >
                            A career as a web developer is very enjoyable, apart from being able to interact with the programming code, we also understand the description of applications requested by clients such as User Interface and User Experience.
                            It really helps ourselves and others, professionalism is really needed but satisfying clients is more important than that and I can give it to my clients.
                        </Text>
                        <Heading
                            as='h3'
                            mb={5}
                            fontSize={20}
                            fontFamily={'sans-serif'}
                            fontWeight={'normal'}
                            color={useColorModeValue('gray.600', '#d1d100')}
                        >
                            Summary :
                        </Heading>
                        <Box mb={5}>
                            <List px={50}>
                                <ListItem>
                                    <Flex flex={{ base: 1 }} justify={{ md: 'start' }}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <Text ml={10}>The first child</Text>
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex flex={{ base: 1 }} justify={{ md: 'start' }}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <Text ml={10}>Bachelor</Text>
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex flex={{ base: 1 }} justify={{ md: 'start' }}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <Text ml={10}>Makassar tribe</Text>
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex flex={{ base: 1 }} justify={{ md: 'start' }}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <Text ml={10}>Playful</Text>
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex flex={{ base: 1 }} justify={{ md: 'start' }}>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <Text ml={10}>Love Sports</Text>
                                    </Flex>
                                </ListItem>
                            </List>
                        </Box>
                        <Heading
                            as='h3'
                            mb={5}
                            fontSize={20}
                            fontFamily={'sans-serif'}
                            fontWeight={'normal'}
                            color={useColorModeValue('gray.600', '#d1d100')}
                        >
                            Experience :
                        </Heading>
                        <Box>
                            {works.map((data, i) => (
                                <List key={i} px={50}>
                                    <Flex
                                        flex={{ base: 1 }}
                                        justify={{ md: 'start' }}
                                        align={'normal'}
                                        mb={4}
                                    >
                                        {data.icon}
                                        <List spacing={1} ml={5}>
                                            <Titlejob>{data.title}</Titlejob>
                                            <ListItem>
                                                <Link href={data.href}>
                                                    <b>{data.company}</b>
                                                </Link>
                                            </ListItem>
                                            <ListItem>{data.status}</ListItem>
                                            <ListItem>{data.time}</ListItem>
                                            <ListItem>{data.location}</ListItem>
                                        </List>
                                    </Flex>
                                </List>
                            ))}
                        </Box>
                    </div>
                </Container>
            </Box>
        </>
    )
}

export default About;