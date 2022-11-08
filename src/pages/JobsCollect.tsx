import { FC, useState } from "react";
import { Box, Button, Center, Container, Grid, GridItem, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import CardJobs from "../components/Card";
import { myJob } from "../data/mockData";
import { useParams } from "react-router-dom";
import { Jobs } from "../types";

const JobsCollect: FC = () => {
    const { slug } = useParams<string>()
    const [limit, setLimit] = useState<number>(3)
    const colorText = useColorModeValue('black', 'white')

    let arrJob: Array<Jobs> = myJob.filter(job => job.category === slug)
    let limitData: number = arrJob.length

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
                        Project Collection
                    </Heading>
                    <div className="fadeInUp">
                        <Text
                            fontSize={18}
                            fontFamily={'monospace'}
                            color={colorText}
                            mb={5}
                        >
                            Here is a collection of {slug} projects.
                        </Text>
                        <Grid
                            mb={8}
                            templateColumns={[null, null, 'repeat(3, 1fr)']}
                            gap={6}
                        >
                            {arrJob.slice(0, limit).map(item => (
                                <GridItem key={item.id}>
                                    <CardJobs name={item.name} href={item.href} category={item.category} />
                                </GridItem>
                            ))}
                        </Grid>
                        <Center>
                            {arrJob.slice(0, limit).length === limitData ?
                                null
                                :
                                <Button variant={'outline'} size={'sm'} mb={10} onClick={() => setLimit(limit + 3)}>Load More...</Button>
                            }
                        </Center>
                    </div>
                </Container>
            </Box>
        </>
    )
}

export default JobsCollect;