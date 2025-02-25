import React from 'react';
import HomePage from "./HomePage";
import AboutUs from "./AbouScreen";
import AIProcess from './AIProcess';
import AiSolutions from './AISolutions';
import AISolutionsDesign from './AISolutionsDesign';

const DashboardPage = () => {
    return (
        <>
            <HomePage />
            <AIProcess />
            <AboutUs />
            <AiSolutions />
            {/* <AISolutionsDesign /> */}
        </>
    )
}

export default DashboardPage