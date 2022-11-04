import { FC } from "react";
import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";

const NotFound: FC = () => {
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
                        NotFounds
                    </Heading>
                </Container>
            </Box>
        </>
    )
}

export default NotFound;