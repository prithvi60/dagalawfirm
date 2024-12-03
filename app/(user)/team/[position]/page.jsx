import TeamHero from '@/components/team/TeamHero';
import React from 'react'
import { teamDetails } from '@/libs/data'
import { PersonDescription } from '@/components/team/personDetail/PersonDescription';

const Page = ({ params }) => {

    const { position } = params

    const FilteredList = teamDetails.filter(val => val.ref === position)

    return (
        <main>
            {/* <TeamHero /> */}
            <PersonDescription data={FilteredList[0]} />
        </main>
    )
}

export default Page
