import React from 'react';
import AnimatedSection from './animatedWrapper/AnimatedWrapper';
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
import AIIndustrySolutions from './AIIndustriesSolutions';
import AITransformSection from './AITransformSection';
import Footer from './FooterScreen';

const DashboardPage = () => {
    return (
        <>
            <HomePage />

            <AnimatedSection><ExpertiseTech /></AnimatedSection>
            <AnimatedSection><AIProcess /></AnimatedSection>
            <AnimatedSection><AboutUs /></AnimatedSection>
            <AnimatedSection><AiSolutions /></AnimatedSection>
            <AnimatedSection><AISolutionsDesign /></AnimatedSection>
            <AnimatedSection><LeadingPlatforms /></AnimatedSection>
            <AnimatedSection><ClientSuccessStories /></AnimatedSection>
            <AnimatedSection><WaveXAI /></AnimatedSection>
            <AnimatedSection><TransformedBusiness /></AnimatedSection>
            <AnimatedSection><AIIndustrySolutions /></AnimatedSection>
            <AnimatedSection><AITransformSection /></AnimatedSection>

            <Footer />
        </>
    );
};

export default DashboardPage;
