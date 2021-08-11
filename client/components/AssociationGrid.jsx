import { SimpleGrid, GridItem } from '@chakra-ui/react'
import React from 'react'
import AssociationCard from 'components/AssociationCard'

const mockTeams = [
    {
        name: 'National Basketball Association',
        org: 'Basketball Victoria',
        activeSeasons: 2,
        _id: 0,
    },
    {
        name: 'National Basketball Association',
        org: 'Basketball Victoria',
        activeSeasons: 1,
        _id: 1,
    },
    {
        name: 'National Basketball Association',
        org: 'Basketball Victoria',
        activeSeasons: 0,
        _id: 2,
    },
    {
        name: 'National Basketball Association',
        org: 'Basketball Victoria',
        activeSeasons: 2,
        _id: 3,
    },
    {
        name: 'National Basketball Association',
        org: 'Basketball Victoria',
        activeSeasons: 1,
        _id: 4,
    },
    {
        name: 'National Basketball Association',
        org: 'Basketball Victoria',
        activeSeasons: 0,
        _id: 5,
    },
    {
        name: 'National Basketball Association',
        org: 'Basketball Victoria',
        activeSeasons: 2,
        _id: 6,
    },
    {
        name: 'National Basketball Association',
        org: 'Basketball Victoria',
        activeSeasons: 2,
        _id: 7,
    },
    {
        name: 'National Basketball Association',
        org: 'Basketball Victoria',
        activeSeasons: 2,
        _id: 8,
    },
    {
        name: 'National Basketball Association',
        org: 'Basketball Victoria',
        activeSeasons: 2,
        _id: 9,
    },
    {
        name: 'National Basketball Association',
        org: 'Basketball Victoria',
        activeSeasons: 2,
        _id: 10,
    },
]
const AssociationGrid = ({ teams = mockTeams }) => {
    return (
        <SimpleGrid
            columns={[1, 2, 3]}
            gridRowGap="3.5rem"
            width="100%"
            justifyContent="center"
        >
            {teams.map(({ name, org, activeSeasons, _id }) => (
                <GridItem
                    key={_id}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <AssociationCard
                        name={name}
                        org={org}
                        activeSeasons={activeSeasons}
                        icon={null}
                    />
                </GridItem>
            ))}
        </SimpleGrid>
    )
}

export default AssociationGrid
