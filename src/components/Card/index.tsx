import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Jobs } from "../../types";

const CardJobs: FC<Jobs> = ({ name, href }) => {
    const textHover = useColorModeValue('black', '#d1d100')
    const textColor = useColorModeValue('gray.600', 'white')
    const borderColor = useColorModeValue('#0a0a0a2b', '#ffffff29')

    return (
        <Box maxW='sm' border={`1px solid ${borderColor}`} h={120} borderRadius='lg' overflow='hidden'>
            <Link to={`/work/${href as string}`}>
                <Center
                    h='120px'
                    color={textColor}
                    fontSize={14}
                    fontStyle={'italic'} p={3}
                    _hover={{
                        color: textHover,
                        transition: '0.3s',
                    }}
                >
                    {name}
                </Center>
            </Link>
        </Box>
    )
}

export default CardJobs;