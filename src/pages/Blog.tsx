import { FC, useEffect, useState } from "react";
import { Box, Button, Center, Container, Heading, Link, List, ListItem, Text, useColorModeValue } from "@chakra-ui/react";
import { Articles } from "../types";

const article: Array<Articles> = [
    {
        id: 1,
        title: 'Perbedaan Javascript dan Typescript',
        date: 'Nov 5, 2022',
        href: 'https://medium.com/@feryramadhanc_/perbedaan-javascript-dan-typescript-9586c9f2773b'
    },
    {
        id: 2,
        title: 'Easy! Cara menghubungkan Metamask wallet dengan React',
        date: 'May 29, 2022',
        href: 'https://medium.com/@feryramadhanc_/easy-cara-menghubungkan-metamask-wallet-dengan-react-6450aa8cd575'
    },
    {
        id: 3,
        title: 'Zustand React Tutorial — Pengganti Redux (?)',
        date: 'Feb 20, 2022',
        href: 'https://medium.com/@feryramadhanc_/zustand-react-tutorial-pengganti-redux-abc0e384bbbe'
    }
]

const Blog: FC = () => {
    const [limit, setLimit] = useState<number>(5)
    const colorText = useColorModeValue('black', 'white')
    const borderColor = useColorModeValue('#0a0a0a2b', '#ffffff29')

    useEffect(() => {
        document.title = 'Fery Ramadhan | Blog';
    }, [])

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
                        Blogs
                    </Heading>
                    <div className="fadeInUp">
                        <Text
                            fontSize={18}
                            fontFamily='monospace'
                            color={colorText}
                            mb={7}
                        >
                            I also wrote some articles that might help some people, especially in the field of web development.
                        </Text>
                        <List mb={10}>
                            {article.slice(0, limit).map((list) => (
                                <ListItem key={list.id} mb={6} pb={3} borderBottom={`1px solid ${borderColor}`}>
                                    <Link
                                        href={list.href}
                                        fontSize={20}
                                    >
                                        {list.title}
                                    </Link>
                                    <Text
                                        color={colorText}
                                        fontSize={14}
                                        pt={3}
                                        fontStyle='italic'
                                    >
                                        {list.date}
                                    </Text>
                                </ListItem>
                            ))}
                        </List>
                        <Center>
                            {article.length > 5 ?
                                <Button variant='outline' size='sm' onClick={() => setLimit(limit + 2)}>Load More...</Button>
                                :
                                null
                            }
                        </Center>
                    </div>
                </Container>
            </Box>
        </>
    )
}

export default Blog;