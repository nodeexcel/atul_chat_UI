import React from 'react';
import HomePage from "./HomePage";
import AboutUs from "./AbouScreen";
import AIProcess from './AIProcess';
import AiSolutions from './AISolutions';
import AISolutionsDesign from './AISolutionsDesign';
import ExpertiseTech from './ExpertiseTechnologies';
import LeadingPlatforms from './LeadingPlatform';
import ClientSuccessStories from './ClientSuccessStories';
import TransformedBusiness from './TransformedBusiness';
import WaveXAI from './WhyWaveX';

const DashboardPage = () => {
    return (
        <>
            <HomePage />
            <AIProcess />
            <AboutUs />
            <AiSolutions />
            <AISolutionsDesign />
            <ExpertiseTech />
            <LeadingPlatforms />
            <ClientSuccessStories />
            <TransformedBusiness />
            <WaveXAI />
        </>
    )
}

export default DashboardPage