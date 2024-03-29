import { SimpleGrid, GridItem } from '@chakra-ui/react'
import React from 'react'
import AssociationCard from 'components/AssociationPage/AssociationCard'

const AssociationGrid = ({ leagues, inSeason, upcomingSeason }) => {
    // determine leagues to render based on which checkboxes are ticked
    const displayLeagues = React.useMemo(() => {
        return leagues?.filter(({ seasons }) => {
            let valid = false
            if (inSeason && seasons.some((season) => season.status === 'active')) {
                valid = true
            }
            if (upcomingSeason && seasons.some((season) => season.status === 'upcoming'))
                return true
            return (!inSeason && !upcomingSeason) || valid
        })
    }, [leagues, inSeason, upcomingSeason])
    return (
        <SimpleGrid
            columns={[1, 2, 3]}
            gridRowGap={['1.5rem', '3.5rem']}
            width="100%"
            justifyContent="center"
            columnGap={'2rem'}
        >
            {displayLeagues?.map(({ name, organisation, seasons, _id, creator }) => (
                <GridItem key={_id} display="flex" alignItems="center" justifyContent="center">
                    <AssociationCard
                        name={name}
                        org={organisation}
                        activeSeasons={
                            seasons.filter((season) => season.status === 'active').length
                        }
                        id={_id}
                        creator={creator}
                    />
                </GridItem>
            ))}
        </SimpleGrid>
    )
}

export default AssociationGrid
