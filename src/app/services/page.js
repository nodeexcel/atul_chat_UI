'use client'
import ContactForm from '@/components/about-us/ContactForm'
import AnimatedSection from '@/components/animatedWrapper/AnimatedWrapper'
import Footer from '@/components/FooterScreen'
import AIAutomation from '@/components/services/AIAutomation'
import AIChatBotServices from '@/components/services/AIChatbotServices'
import AIPerfect from '@/components/services/AIPerfect'
import ChatbotSolutions from '@/components/services/ChatbotSolutions'
import EmpoweringBusiness from '@/components/services/EmpoweringBusiness'
import GenerativeAISolutions from '@/components/services/GenerativeAISolutions'
import GenerativeServices from '@/components/services/GenerativeServices'
import LearningSolutions from '@/components/services/LearningSolutions'
import MachineLearningServices from '@/components/services/MachineLearningServices'
import NLPServices from '@/components/services/NLPServices'
import NLPSolutions from '@/components/services/NLPSolutions'
import ServicesCategories from '@/components/services/ServicesCategories'
import React from 'react'

const page = () => {
    return (
        <>
            <AnimatedSection><EmpoweringBusiness /></AnimatedSection>
            <AnimatedSection><AIPerfect /></AnimatedSection>
            <AnimatedSection><ServicesCategories /></AnimatedSection>
            <AnimatedSection><AIAutomation /></AnimatedSection>
            <AnimatedSection><GenerativeServices /></AnimatedSection>
            <AnimatedSection><GenerativeAISolutions /></AnimatedSection>
            <AnimatedSection><MachineLearningServices /></AnimatedSection>
            <AnimatedSection><LearningSolutions /></AnimatedSection>
            <AnimatedSection><NLPServices /></AnimatedSection>
            <AnimatedSection><NLPSolutions /></AnimatedSection>
            <AnimatedSection><AIChatBotServices /></AnimatedSection>
            <AnimatedSection><ChatbotSolutions /></AnimatedSection>
            <AnimatedSection><ContactForm /></AnimatedSection>


        </>

    )
}

export default page