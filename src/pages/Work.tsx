import { FC, useState } from "react";
import { Box, Button, Center, Container, Flex, Grid, Heading, Link, List, ListItem, Text, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { myCerfitiface, skillTools } from "../data/mockData";
import { Link as Links } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faCircleExclamation, faFolderClosed } from "@fortawesome/free-solid-svg-icons";

const Work: FC = () => {
    const [limitCertify, setLimitCertify] = useState<number>(5)
    const colorText = useColorModeValue('black', 'white')
    const borderColor = useColorModeValue('#0a0a0a2b', '#ffffff29')
    const iconCertifColor = useColorModeValue('gray.600', 'white')

    return (
        <>
            <Box h='full' pt={5}>
                <Container maxW='container.lg' px={6} color={useColorModeValue('gray.600', '#d1d100')}>
                    <Heading
                        as='h2'
                        mb={4}
                        fontFamily='sans-serif'
                        color={useColorModeValue('gray.600', '#d1d100')}
                    >
                        Works
                    </Heading>
                    <div className="fadeInUp">
                        <Text
                            fontSize={18}
                            fontFamily='monospace'
                            color={colorText}
                            mb={5}
                        >
                            Here you can see the projects I have made, some can't be visited because most of them are confidential.
                        </Text>
                        <Grid
                            mb={10}
                            templateColumns={[null, null, 'repeat(2, 1fr)']}
                            gap={6}
                        >
                            <Box py={5} px={7} border={`1px solid ${borderColor}`}>
                                <Flex>
                                    <Box my='auto' pr={7}>
                                        <FontAwesomeIcon icon={faCircleExclamation} size={'xl'} />
                                    </Box>
                                    <div>
                                        <Links to='/work/category/company'>
                                            <Heading
                                                as='h3'
                                                mb={3}
                                                fontFamily='sans-serif'
                                                fontSize='lg'
                                            >
                                                Company Project
                                            </Heading>
                                            <Text fontSize={15} color={colorText} mb={5}>
                                                There is only a brief attachment regarding the project description and does not have a link to visit.
                                            </Text>
                                        </Links>
                                    </div>
                                </Flex>
                            </Box>
                            <Box py={5} px={7} border={`1px solid ${borderColor}`}>
                                <Flex>
                                    <Box my='auto' pr={7}>
                                        <FontAwesomeIcon icon={faFolderClosed} size={'xl'} />
                                    </Box>
                                    <div>
                                        <Links to='/work/category/personal'>
                                            <Heading
                                                as='h3'
                                                mb={3}
                                                fontFamily='sans-serif'
                                                fontSize='lg'
                                            >
                                                Personal Project
                                            </Heading>
                                            <Text fontSize={15} color={colorText} mb={5}>
                                                The projects created for learning purposes or sharing knowledge that can be used for beginners.
                                            </Text>
                                        </Links>
                                    </div>
                                </Flex>
                            </Box>
                        </Grid>
                        <Heading
                            as='h4'
                            textAlign='center'
                            mb={4}
                            fontFamily='sans-serif'
                            fontSize='2xl'
                            color={useColorModeValue('gray.600', '#d1d100')}
                        >
                            Certify
                        </Heading>
                        <Text
                            fontSize={14}
                            fontFamily='monospace'
                            color={colorText}
                            textAlign='center'
                            mb={10}
                        >
                            I have received several awards in the form of certificates.
                        </Text>
                        <List mb={5}>
                            {myCerfitiface.slice(0, limitCertify).map((list) => (
                                <Flex key={list.id}>
                                    <FontAwesomeIcon icon={faAward} size='2x' color={iconCertifColor} />
                                    <ListItem mb={6} ml={6} pb={3} w='100%' borderBottom={`1px solid ${borderColor}`}>
                                        <Link href={list.href} fontSize={20}>
                                            {list.title}
                                        </Link>
                                        <Flex pt={2}>
                                            <Text
                                                color={colorText}
                                                fontSize={14}
                                                fontWeight='bold'
                                            >
                                                {list.award}
                                            </Text>
                                            &nbsp; &bull; &nbsp;
                                            <Text
                                                color={colorText}
                                                fontSize={14}
                                            >
                                                {list.date}
                                            </Text>
                                        </Flex>
                                    </ListItem>
                                </Flex>
                            ))}
                        </List>
                        <Center>
                            {myCerfitiface.length > 5 ?
                                <Button variant='outline' size='sm' mb={10} onClick={() => setLimitCertify(limitCertify + 2)}>Load More...</Button>
                                :
                                null
                            }
                        </Center>
                        <Heading
                            as='h4'
                            textAlign='center'
                            mb={4}
                            fontFamily='sans-serif'
                            fontSize='2xl'
                            color={useColorModeValue('gray.600', '#d1d100')}
                        >
                            Skill/Tools
                        </Heading>
                        <Box mb={5}>
                            <Text
                                fontSize={14}
                                fontFamily='monospace'
                                color={colorText}
                                textAlign='center'
                                mb={10}
                            >
                                This is the stack I usually use to develop.
                            </Text>
                            <Flex justifyContent='center' wrap='wrap' px={10}>
                                {skillTools.map(data => (
                                    <Tooltip key={data.id} label={data.text} placement='top'>
                                        <Box textAlign='center' w='40px' mx={3} mb={8}>
                                            <img src={data.icon} alt={`icon-${data.text}`} />
                                        </Box>
                                    </Tooltip>
                                ))}
                            </Flex>
                        </Box>
                    </div>
                </Container>
            </Box>
        </>
    )
}

export default Work;