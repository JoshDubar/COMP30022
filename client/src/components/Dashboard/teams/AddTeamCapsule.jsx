import { AddIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const AddTeamCapsule = () => {
    const router = useRouter()
    return (
        <Flex
            w="100%"
            h="70px"
            borderRadius="999px"
            border="2px solid grey"
            pos="relative"
            cursor="pointer"
            transition="box-shadow 0.8s ease"
            _hover={{
                boxShadow: '0 5px 10px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.12);',
            }}
            bg="greyBg"
            onClick={() => router.push('/dashboard/teams/create')}
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
                onClick={{ router }}
            >
                <AddIcon fontSize="1.25rem" color="greyBg" />
            </Flex>

            <Text pos="absolute" top="50%" left="5rem" transform="translateY(-50%)" color="white">
                CREATE A NEW TEAM
            </Text>
        </Flex>
    )
}

export default AddTeamCapsule
