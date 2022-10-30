import { FC } from "react";
import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";

const Blog: FC = () => {
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
                        Blogs
                    </Heading>
                </Container>
            </Box>
        </>
    )
}

export default Blog;