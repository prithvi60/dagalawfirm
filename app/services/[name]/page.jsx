import { SpecializationDetails } from '@/components/services/serviceSubPage.jsx/SpecializationDetails';
import SpecializationHero from '@/components/services/serviceSubPage.jsx/SpecializationHero';
import React from 'react'

const Page = ({ params }) => {
    const { name } = params

    return (
        <main>
            <SpecializationHero name={name} />
            <SpecializationDetails />
        </main>
    )
}

export default Page
