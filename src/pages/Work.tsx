import { FC } from "react";
import { Box, Container, Flex, Grid, GridItem, Heading, Text, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { myJob, skillTools } from "../utils/mockData";
import CardJobs from "../components/Card";

const Work: FC = () => {
    const colorText = useColorModeValue('black', 'white')

    return (
        <>
            <Box h={'full'} py={75} px={4}>
                <Container maxW='container.lg' px={6} color={useColorModeValue('gray.600', '#d1d100')}>
                    <Heading
                        as='h2'
                        mb={4}
                        fontFamily={'sans-serif'}
                        color={useColorModeValue('gray.600', '#d1d100')}
                    >
                        Works
                    </Heading>
                    <div className="fadeInUp">
                        <Text
                            fontSize={18}
                            fontFamily={'monospace'}
                            color={colorText}
                            mb={5}
                        >
                            Here you can see an example of a project that I have made, can't be visited because most of it is confidential.
                        </Text>
                        <Grid
                            mb={6}
                            templateColumns={[null, null, 'repeat(4, 1fr)']}
                            gap={6}
                        >
                            {myJob.map(item => (
                                <GridItem key={item.id}>
                                    <CardJobs
                                        name={item.name}
                                        href={item.href}
                                    />
                                </GridItem>
                            ))}
                        </Grid>
                        <Heading
                            as='h4'
                            textAlign={'center'}
                            mb={4}
                            fontFamily={'sans-serif'}
                            fontSize='2xl'
                            color={useColorModeValue('gray.600', '#d1d100')}
                        >
                            Skill/Tools
                        </Heading>
                        <Box>
                            <Text
                                fontSize={14}
                                fontFamily={'monospace'}
                                color={colorText}
                                textAlign={'center'}
                                mb={10}
                            >
                                This is the stack I usually use to develop.
                            </Text>
                            <Flex justifyContent={'center'} wrap={'wrap'} px={10}>
                                {skillTools.map(data => (
                                    <Tooltip key={data.id} label={data.text} placement='top'>
                                        <Box textAlign={'center'} w='40px' mx={3} mb={8}>
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