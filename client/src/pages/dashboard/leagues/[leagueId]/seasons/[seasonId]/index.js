import React from 'react'
import Head from 'next/head'
import { useGetAllLeagueSeasons, useUserDetails } from 'hooks'
import { Template, CreateCapsule } from 'components/Dashboard'
import { Box, VStack } from '@chakra-ui/react'
import { Container, InfoContainer } from 'components'
import { getLeagueFromUser } from 'utils'
import EditButton from 'components/Dashboard/League/EditButton'

/**
 * TODO: /season page. This should be the one to view grades. I only set this page up to test the new URL
 */
const index = () => {
    const { seasons } = useGetAllLeagueSeasons()
    const { user } = useUserDetails()
    const league = getLeagueFromUser(user)

    return (
        <Template>
            <Head>
                <title>Dribblr | {league?.name || 'League'}</title>
            </Head>
            <Container league={league?.season}>
                <VStack spacing="1.25rem">
                    <CreateCapsule heading="ADD A NEW GRADE" />
                    {seasons?.map((season) => {
                        return (
                            <Box
                                key={season._id}
                                display="grid"
                                gridTemplateColumns="12fr 1fr"
                                w="100%"
                            >
                                <InfoContainer season={season} path={season._id} />
                                <EditButton name={season?._id} />
                            </Box>
                        )
                    })}
                </VStack>
            </Container>
        </Template>
    )
}

export default index
