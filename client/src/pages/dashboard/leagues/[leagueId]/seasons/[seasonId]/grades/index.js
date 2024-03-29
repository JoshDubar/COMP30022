import React from 'react'
import Head from 'next/head'
import { useGetAllSeasonGrades, useUserDetails } from 'hooks'
import { Template, CreateCapsule } from 'components/Dashboard'
import { Box, VStack, Spinner } from '@chakra-ui/react'
import { Container, GradeContainer } from 'components'
import { getSeasonFromUser, getLeagueFromUser } from 'utils'
import EditButton from 'components/Dashboard/League/EditButton'

const index = () => {
    const { grades, isLoading } = useGetAllSeasonGrades()
    const { user } = useUserDetails()
    const season = getSeasonFromUser(user)
    const league = getLeagueFromUser(user)

    return (
        <Template>
            <Head>
                <title>Dribblr | {season?.name || 'Season'} - Grades</title>
            </Head>
            <Container league={league}>
                <VStack spacing="1.25rem">
                    {isLoading ? (
                        <Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="blue.500"
                            size="xl"
                            position="absolute"
                            top="50%"
                            left="calc(50% - 1rem)"
                        />
                    ) : (
                        <>
                            <CreateCapsule
                                heading="ADD A NEW GRADE"
                                borderRadius="1rem"
                                buttonNum={1}
                            />
                            {grades?.map((grade) => {
                                return (
                                    <Box
                                        key={grade._id}
                                        display="grid"
                                        gridTemplateColumns="12fr 1fr"
                                        w="100%"
                                    >
                                        <GradeContainer grade={grade} path={grade._id} />
                                        <EditButton name={grade._id} /> {/* TODO edit grade */}
                                    </Box>
                                )
                            })}
                        </>
                    )}
                </VStack>
            </Container>
        </Template>
    )
}

export default index
