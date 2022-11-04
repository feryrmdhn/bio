import { FC } from "react";
import { Box, Center, Container, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { JobDetails } from "../types";
import Carousel from "../components/Carousel";

const data: Array<JobDetails> = [
    {
        slug: 'Middleware',
        desc: 'hahahahahah',
        frontend: ['react', 'scss'],
        backend: ['nest', 'mongo'],
        image: [
            <img src="https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280" alt="" />,
            <img src="https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280" alt="" />,
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3MOrVAJiIgmph8GizT-HuXZ2v6934NcO2w&usqp=CAU" alt="" />
        ]
    },
    {
        slug: 'Kioser',
        desc: 'hihihihi',
        frontend: ['react', 'scss'],
        backend: ['nest', 'mongo'],
        image: [
            <img src="https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg?w=1280" alt="" />,
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3MOrVAJiIgmph8GizT-HuXZ2v6934NcO2w&usqp=CAU" alt="" />
        ]
    },
    {
        slug: 'Kriptoversity',
        desc: 'Cryptoversity is a platform to educate people about crypto, blockchain, NFT, web3, exchange and so on. This platform is also available in mobile applications with Android and iOS Operating System.',
        frontend: ['Javascript', 'React', 'Redux-Saga', 'Scss', 'React-Bootstrap', 'Vercel'],
        backend: ['Node', 'Typescript', 'Nest', 'Swagger', 'MySQL', 'AWS'],
        image: [
            <img src={require('../assets/img/project/Krip-1.png')} alt="krip1" />,
            <img src={require('../assets/img/project/Krip-2.png')} alt="krip2" />,
            <img src={require('../assets/img/project/Krip-3.png')} alt="krip3" />,
            <img src={require('../assets/img/project/Krip-4.png')} alt="krip4" />,
        ]
    },

]

const JobDetail: FC = () => {
    const { slug }: any = useParams()
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
                                            <Tab _selected={{ border: '1px solid' }}>Frontend</Tab>
                                            <Tab _selected={{ border: '1px solid' }}>Backend</Tab>
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
                                Note: This project is private and maybe has no url to visit, just showing some screenshot images.
                            </Text>
                        </Box>
                    ))}
                </Container>
            </Box>
        </>
    )
}

export default JobDetail;