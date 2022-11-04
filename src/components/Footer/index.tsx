import { Box, Button, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { Socmed } from "../../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer: FC = () => {

    const footerSocmed: Array<Socmed> = [
        {
            label: "LinkedIn",
            icon: <FontAwesomeIcon icon={faLinkedin} />,
            href: 'https://www.linkedin.com/in/fery-ramadhan-c-323167150/'
        },
        {
            label: "Github",
            icon: <FontAwesomeIcon icon={faGithub} />
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
                <HStack spacing='24px'>
                    {footerSocmed.map((data, i) => (
                        <div key={i}>
                            <Button
                                as={'a'}
                                variant={'link'}
                                background={'none'}
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
                <Text
                    fontFamily={'monospace'}
                    lineHeight='80px'
                    fontSize={14}
                    color={useColorModeValue('black', '#d1d100')}
                >
                    &copy;Fery_Ramadhan
                </Text>
            </Flex>
        </Box>
    )
}

export default Footer;