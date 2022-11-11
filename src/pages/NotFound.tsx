import { FC, useEffect } from "react";
import { Box, Center, Container, Heading, useColorModeValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";

const NotFound: FC = () => {

    useEffect(() => {
        document.title = 'Fery Ramadhan | Not Found';
    }, [])

    return (
        <>
            <Box h='full' pt={5}>
                <Container maxW='container.lg' px={6} color={useColorModeValue('gray.600', '#d1d100')}>
                    <Center my={5}>
                        <FontAwesomeIcon icon={faBan} size={'5x'} />
                    </Center>
                    <Heading
                        as='h2'
                        mt={6}
                        textAlign='center'
                        fontFamily='sans-serif'
                        color={useColorModeValue('gray.600', '#d1d100')}
                    >
                        Not Found
                    </Heading>
                </Container>
            </Box>
        </>
    )
}

export default NotFound;