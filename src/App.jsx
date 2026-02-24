import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutZenith from './components/AboutZenith'
import About from './components/About'
import Programs from './components/Programs'
import Faculties from './components/Faculties'
import Results from './components/Results'
import DemoForm from './components/DemoForm'
import WhyChoose from './components/WhyChoose'
import LearningJourney from './components/LearningJourney'
import ToolsTechnologies from './components/ToolsTechnologies'
import SuccessStories from './components/SuccessStories'
import CareerImpact from './components/CareerImpact'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import LeadPopup from './components/LeadPopup'
import ContactSection from './components/ContactSection'
import BookSession from './components/BookSession'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
    return (
        <div className="font-sans text-white bg-black">
            <Header />
            <main>
                <Hero />
                <AboutZenith />
                <About />
                <Programs />
                <Faculties />
                <Results />
                <DemoForm />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default App
