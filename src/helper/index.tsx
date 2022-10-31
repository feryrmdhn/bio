import { FC } from "react";
import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";

const Helper: FC = () => {
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
                        Helpers
                    </Heading>
                </Container>
            </Box>
        </>
    )
}

export default Helper;