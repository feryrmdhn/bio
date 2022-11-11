import { Box, Button, Flex, HStack, Text, useBreakpointValue, useColorModeValue, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { Socmed } from "../../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ReusableModal from "../Modal";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Footer: FC = () => {
    const isMobile = useBreakpointValue({ base: true, md: false }, { ssr: false })

    const footerSocmed: Array<Socmed> = [
        {
            label: "LinkedIn",
            icon: <FontAwesomeIcon icon={faLinkedin} />,
            href: 'https://www.linkedin.com/in/fery-ramadhan-c-323167150/'
        },
        {
            label: "Github",
            icon: <FontAwesomeIcon icon={faGithub} />,
            href: 'https://github.com/feryrmdhn'
        },
        {
            label: "Medium",
            icon: <FontAwesomeIcon icon={faMedium} />,
            href: 'https://medium.com/@feryramadhanc_   '
        }
    ]

    return (
        <Box as="footer" bottom={0} px={10} py={4}>
            <Flex justify={{ base: 'space-between' }} wrap={'wrap'}>
                {isMobile ?
                    <Box my='auto'>
                        <ReusableModal
                            titleOpen={<FontAwesomeIcon icon={faEllipsis} size='lg' />}
                            closeModal={false}
                            element={
                                <>
                                    <VStack spacing={5} my={4}>
                                        {footerSocmed.map((data, i) => (
                                            <div key={i}>
                                                <Button
                                                    as='a'
                                                    py={3}
                                                    w='150px'
                                                    variant='link'
                                                    background='none'
                                                    href={data.href}
                                                    color='white'
                                                    border={'1px solid'}
                                                    borderRadius={0}
                                                    leftIcon={data.icon}
                                                    _groupHover={{
                                                        background: 'none',
                                                        textDecoration: 'none',
                                                    }}
                                                >
                                                    {data.label}
                                                </Button>
                                            </div>
                                        ))}
                                    </VStack>
                                </>
                            }
                            submitModal={false}
                        />
                    </Box>
                    :
                    <HStack spacing='24px'>
                        {footerSocmed.map((data, i) => (
                            <div key={i}>
                                <Button
                                    as='a'
                                    variant='link'
                                    background='none'
                                    href={data.href}
                                    leftIcon={data.icon}
                                    _groupHover={{
                                        background: 'none',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {data.label}
                                </Button>
                            </div>
                        ))}
                    </HStack>
                }
                <Text
                    fontFamily='monospace'
                    lineHeight='80px'
                    fontSize={14}
                    color={useColorModeValue('black', '#d1d100')}
                >
                    &copy; feryramadhanc
                </Text>
            </Flex>
        </Box>
    )
}

export default Footer;