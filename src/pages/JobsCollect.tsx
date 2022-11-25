import { FC, ChangeEvent, MutableRefObject, useEffect, useRef, useState } from "react";
import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Center,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    useBreakpointValue,
    useColorModeValue
} from "@chakra-ui/react";
import CardJobs from "../components/Card";
import { myJob } from "../data/mockData";
import { useParams } from "react-router-dom";
import { Jobs } from "../types";
import { SearchIcon } from "@chakra-ui/icons";

const JobsCollect: FC = () => {
    const refs = useRef() as MutableRefObject<HTMLInputElement>
    const isMobile = useBreakpointValue({ base: true, md: false }, { ssr: false })
    const { slug } = useParams<string>()
    const [limit, setLimit] = useState<number>(3)
    const colorText = useColorModeValue('black', 'white')
    const [search, setSearch] = useState<string>('')

    useEffect(() => {
        document.title = 'Fery Ramadhan | Project Collect';
    }, [])

    let arrJob: Array<Jobs | any> = myJob.filter(job => job.category === slug)
    let limitData: number = arrJob.length
    let key: Array<string> = ["name"]

    const onchangeInput = (_e: ChangeEvent<HTMLInputElement>) => {
        setSearch(refs.current.value)
    }

    return (
        <>
            <Box h='full' pt={5}>
                <Container maxW='container.lg' px={6} color={useColorModeValue('gray.600', '#d1d100')}>
                    <Accordion allowToggle>
                        <AccordionItem border='none'>
                            <Flex justify={{ base: 'space-between' }}>
                                <Heading
                                    as='h2'
                                    mb={4}
                                    fontFamily='sans-serif'
                                    color={useColorModeValue('gray.600', '#d1d100')}
                                >
                                    Project Collection
                                </Heading>
                                {isMobile ?
                                    <AccordionButton width='50px' height='45px' borderRadius='7px'>
                                        <SearchIcon color='gray.500' />
                                    </AccordionButton>
                                    :
                                    <Box>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents='none'
                                                children={<SearchIcon color='gray.500' />}
                                            />
                                            <Input
                                                name="search"
                                                onChange={onchangeInput}
                                                ref={refs}
                                                placeholder='Search'
                                                size='md'
                                            />
                                        </InputGroup>
                                    </Box>
                                }
                            </Flex>
                            {isMobile ?
                                <AccordionPanel pb={4} px={1}>
                                    <InputGroup>
                                        <Input
                                            name="search"
                                            onChange={onchangeInput}
                                            ref={refs}
                                            placeholder='Search..'
                                            size='md'
                                        />
                                    </InputGroup>
                                </AccordionPanel>
                                :
                                null
                            }
                        </AccordionItem>
                    </Accordion>
                    <div className="fadeInUp">
                        <Text
                            fontSize={18}
                            fontFamily='monospace'
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
                            {search ?
                                <>
                                    {arrJob.filter((item) => key.some((name) => item[name].toLowerCase().includes(search))).map(data => (
                                        <GridItem key={data.id}>
                                            <CardJobs name={data.name} href={data.href} category={data.category} />
                                        </GridItem>
                                    ))}
                                </>
                                :
                                <>
                                    {arrJob.slice(0, limit).map(item => (
                                        <GridItem key={item.id}>
                                            <CardJobs name={item.name} href={item.href} category={item.category} />
                                        </GridItem>
                                    ))}
                                </>
                            }
                        </Grid>
                        <Center>
                            {arrJob.slice(0, limit).length === limitData ?
                                null
                                :
                                <Button variant='outline' size='sm' mb={10} onClick={() => setLimit(limit + 3)}>Load More...</Button>
                            }
                        </Center>
                    </div>
                </Container>
            </Box>
        </>
    )
}

export default JobsCollect;