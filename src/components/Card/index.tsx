import { Box, Center, Link, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { Link as Links } from "react-router-dom";
import { Jobs } from "../../types";

const CardJobs: FC<Jobs> = ({ name, href, category }) => {
    const textHover = useColorModeValue('black', '#d1d100')
    const textColor = useColorModeValue('gray.600', 'white')
    const borderColor = useColorModeValue('#0a0a0a2b', '#ffffff29')

    const ChildrenCard = () => {
        return <Center
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
    }

    return (
        <Box maxW='sm' border={`1px solid ${borderColor}`} h={120} borderRadius='lg' overflow='hidden'>
            {category !== 'personal' ?
                <Links to={`/work/${href as string}`}>
                    <ChildrenCard />
                </Links>
                :
                <Link href={href}>
                    <ChildrenCard />
                </Link>
            }
        </Box>
    )
}

export default CardJobs;