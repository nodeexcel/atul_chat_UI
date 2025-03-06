'use client'
import ContactForm from '@/components/about-us/ContactForm';
import EmpoweringSection from '@/components/about-us/EmpoweringBusiness';
import PartnersIntegrations from '@/components/about-us/PartnersIntegrations';
import VisionMission from '@/components/about-us/VisionMisson';
import AnimatedSection from '@/components/animatedWrapper/AnimatedWrapper';
import React from 'react'

const AboutUs = () => {
    return (
        <>
            <AnimatedSection> <EmpoweringSection /></AnimatedSection>
            <AnimatedSection> <VisionMission /></AnimatedSection>
            <AnimatedSection>  <PartnersIntegrations /></AnimatedSection>
            <AnimatedSection> <ContactForm /></AnimatedSection>
        </>
    )
}

export default AboutUs;