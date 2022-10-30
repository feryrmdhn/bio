import { FC } from "react";
import { Box, Button, Container, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';
import '../assets/style/index.css'
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link as Links } from 'react-router-dom';

const Home: FC = () => {
    const colorText = useColorModeValue('black', 'white')

    return (
        <>
            <Flex
                px="30px"
                pt="90px"
                minH="calc(100vh - 90px)"
                flexDirection="column"
            >
                <Container maxW='container.sm' minH='100%' display={'flex'} justifyContent={'center'} alignItems={'center'} color={useColorModeValue('gray.600', '#d1d100')}>
                    <Box mt={170}>
                        <Typewriter
                            options={{
                                strings: ['Welcome.. ', 'Selamat Datang.. '],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: 'typewriter-text',
                                // cursorClassName: 'typewriter-cursor'
                            }}
                        />
                        <div className="fadeInUp">
                            <Text
                                fontSize={18}
                                fontFamily={'monospace'}
                                color={colorText}
                            >
                                Hello I'm <b>Fery</b> a programmer
                                from Indonesia who focuses on developing web interface it called Front-end.
                            </Text>
                            <Flex justifyContent={'right'}>
                                <Links to='/about'>
                                    <Button
                                        w={100}
                                        mt={4}
                                        background={'none'}
                                        border={'2px'}
                                        borderStyle={'solid'}
                                        borderRadius={0}
                                        rightIcon={<ArrowForwardIcon />}
                                        className="btn-go"
                                    >
                                        Go
                                    </Button>
                                </Links>
                            </Flex>
                        </div>
                    </Box>
                </Container>
            </Flex>
        </>
    )
}

export default Home;