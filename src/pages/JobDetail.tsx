import { FC } from "react";
import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const JobDetail: FC = () => {
    const { slug }: any = useParams()

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
                        Job : {slug}
                    </Heading>
                </Container>
            </Box>
        </>
    )
}

export default JobDetail;