import { FC } from "react";
import { Box, Container, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { JobDetails } from "../types";
import Carousel from "../components/Carousel";

const data: Array<JobDetails> = [
    {
        slug: 'Middleware',
        desc: 'This project is a combined project with several pages in one dashboard, Middleware payment aims to make it easier for customers to make transactions on several integrated company projects, both internal and external transaction facilities.',
        frontend: ['Typescript', 'React', 'Redux-Saga', 'Scss', 'React-Bootstrap', 'Vercel'],
        backend: ['Nodejs', 'Typescript', 'Nest', 'Swagger', 'MySQL'],
        image: [
            <img src={require('../assets/img/project/mid1.png')} alt="midlleware1" />,
            <img src={require('../assets/img/project/mid2.png')} alt="midlleware2" />,
            <img src={require('../assets/img/project/mid3.png')} alt="midlleware3" />,
            <img src={require('../assets/img/project/mid4.png')} alt="midlleware4" />,
        ]
    },
    {
        slug: 'Kioser',
        desc: 'Kioser is a distributor for selling online credit for all operators without large national capital, providing a variety of products ranging from All Operator Electric Credit, Internet Packages, SMS Packages, Transfer Credit, PLN Tokens, Game Vouchers, eCommerce Balances and Payment Point Online Banking (PPOB) at a low price!',
        frontend: ['Javascript', 'React', 'Redux-Thunk', 'Scss', 'Ant Design'],
        backend: ['PHP', 'Laravel', 'Golang', 'MySQL', 'Nginx'],
        image: [
            <img src={require('../assets/img/project/ki1.PNG')} alt="kioser1" />,
            <img src={require('../assets/img/project/ki2.PNG')} alt="kioser2" />,
            <img src={require('../assets/img/project/ki3.png')} alt="kioser3" />,
            <img src={require('../assets/img/project/ki4.PNG')} alt="kioser4" />,
        ]
    },
    {
        slug: 'TLaunchpad',
        desc: 'TLaunchpad is the leading decentralized fundraising platform and IDO platform in the Asian market. This project invites to be part of a cross-chain token pool and raise capital on Blockchains; Solana, Binance Smart Chain, Polygon, and Ethereum.',
        frontend: ['Typescript', 'Nextjs', 'Context', 'Scss', 'Material UI', 'Web3', 'Vercel'],
        backend: ['Nodejs', 'Typescript', 'Nest', 'Express', 'Swagger', 'Web3', 'MongoDB'],
        image: [
            <img src={require('../assets/img/project/launch-1.png')} alt="launch1" />,
            <img src={require('../assets/img/project/launch-2.png')} alt="launch2" />,
            <img src={require('../assets/img/project/launch-3.png')} alt="launch3" />,
            <img src={require('../assets/img/project/launch-4.png')} alt="launch4" />,
        ]
    },
    {
        slug: 'Kriptoversity',
        desc: 'Cryptoversity is a platform to educate people about crypto, blockchain, NFT, web3, exchange and so on. This platform is also available in mobile applications with Android and iOS Operating System.',
        frontend: ['Javascript', 'React', 'Redux-Saga', 'Scss', 'React-Bootstrap', 'Vercel'],
        backend: ['Nodejs', 'Typescript', 'Nest', 'Swagger', 'MySQL', 'AWS'],
        image: [
            <img src={require('../assets/img/project/Krip-1.png')} alt="krip1" />,
            <img src={require('../assets/img/project/Krip-2.png')} alt="krip2" />,
            <img src={require('../assets/img/project/Krip-3.png')} alt="krip3" />,
            <img src={require('../assets/img/project/Krip-4.png')} alt="krip4" />,
        ]
    },
    {
        slug: 'Kickin',
        desc: 'Kickin is an application for ordering long distance futsal courts online. It is possible for clients without having to come directly to the field. Please visit kickinapp.herokuapp.com/ to see it.',
        frontend: ['Javascript', 'React', 'Redux-Thunk', 'Scss', 'Ant Design', 'Heroku'],
        backend: ['Nodejs', 'Javascript', 'Express', 'Postman Docs', 'PostgreSQL', 'Nginx'],
        image: [
            <img src={require('../assets/img/project/Kick1.png')} alt="Kick1" />,
            <img src={require('../assets/img/project/Kick2.png')} alt="Kick2" />,
            <img src={require('../assets/img/project/Kick3.png')} alt="Kick3" />,
        ]
    },
]

const JobDetail: FC = () => {
    const { slug } = useParams<string>()
    const colorText = useColorModeValue('black', 'white')
    const borderColor = useColorModeValue('#0a0a0a2b', '#ffffff29')
    const colorTitle = useColorModeValue('gray.600', '#d1d100')

    return (
        <>
            <Box h={'full'} pt={5}>
                <Container maxW='container.lg' px={6} color={useColorModeValue('gray.600', '#d1d100')}>
                    <Heading
                        as='h2'
                        mb={4}
                        fontFamily={'sans-serif'}
                        color={useColorModeValue('gray.600', '#d1d100')}
                    >
                        {slug}
                    </Heading>
                    <Box border={`0.5px solid ${borderColor}`} borderRadius={'6px'}>
                        <Carousel data={data.filter(list => list.slug === slug)} />
                    </Box>
                    {data.filter(list => list.slug === slug).map((item, i) => (
                        <Box key={i} mt={8}>
                            <Heading
                                as='h4'
                                mb={4}
                                fontFamily={'sans-serif'}
                                fontSize='2xl'
                                color={colorTitle}
                            >
                                Description
                            </Heading>
                            <Text
                                fontSize={17}
                                fontFamily={'sans-serif'}
                                color={colorText}
                                mb={10}
                            >
                                {item.desc}
                            </Text>
                            <Heading
                                as='h4'
                                mb={4}
                                fontFamily={'sans-serif'}
                                fontSize='2xl'
                                color={colorTitle}
                            >
                                Tech Stack
                            </Heading>
                            <Text
                                fontSize={14}
                                fontFamily={'monospace'}
                                color={colorText}
                                mb={6}
                            >
                                The following is the technology stack used to build this project.
                            </Text>
                            <Box mb={'5'}>
                                <Tabs variant='unstyled'>
                                    <Flex>
                                        <TabList flexDirection={'column'}>
                                            <Tab _selected={{ fontWeight: 'bold', _before: { content: '">"', marginRight: '10px' } }} pl={0}>Frontend</Tab>
                                            <Tab _selected={{ fontWeight: 'bold', _before: { content: '">"', marginRight: '10px' } }} pl={0}>Backend</Tab>
                                        </TabList>
                                        <TabPanels>
                                            <TabPanel>
                                                {item.frontend?.map((fe, idx) => (
                                                    <Box key={idx} ml={'6'} fontSize={'lg'} color={colorText}>
                                                        &bull; {fe}
                                                    </Box>
                                                ))}
                                            </TabPanel>
                                            <TabPanel>
                                                {item.backend?.map((be, idx) => (
                                                    <Box key={idx} ml={'6'} fontSize={'lg'} color={colorText}>
                                                        &bull; {be}
                                                    </Box>
                                                ))}
                                            </TabPanel>
                                        </TabPanels>
                                    </Flex>
                                </Tabs>
                            </Box>
                            <Text
                                fontSize={11}
                                fontFamily={'sans-serif'}
                                color={colorText}
                                mb={10}
                            >
                                Note: The images used is from the demo version of the project.
                            </Text>

                        </Box>
                    ))}
                </Container>
            </Box>
        </>
    )
}

export default JobDetail;