import { AddIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import EditButton from 'components/Dashboard/League/EditButton'

const CreateCapsule = ({ heading, borderRadius }) => {
    const router = useRouter()
    return (
        <Box
            display="grid"
            gridTemplateColumns="12fr 1fr"
            w="100%"
        >
            <Flex
                w="100%"
                h="70px"
                borderRadius={borderRadius}
                border="2px solid grey"
                pos="relative"
                cursor="pointer"
                transition="box-shadow 0.8s ease"
                _hover={{
                    boxShadow: '0 5px 10px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.12);',
                }}
                bg="greyBg"
                onClick={() => router.push(window.location.pathname + '/create')}
            >
                <Flex
                    pos="absolute"
                    top="50%"
                    left="0.5rem"
                    transform="translateY(-50%)"
                    borderRadius="50%"
                    bg="white"
                    h="50px"
                    w="50px"
                    alignItems="center"
                    justifyContent="center"
                >
                    <AddIcon fontSize="1.25rem" color="greyBg" />
                </Flex>

                <Text pos="absolute" top="50%" left="5rem" transform="translateY(-50%)" color="white">
                    {heading}
                </Text>
            </Flex>
            <div style={{visibility: "hidden" }}>
                <EditButton />
            </div>
        </Box>
    )
}

export default CreateCapsule
