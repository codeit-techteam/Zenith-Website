import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutZenith from './components/AboutZenith'
import About from './components/About'
import Programs from './components/Programs'
import Faculties from './components/Faculties'
import Results from './components/Results'
import DemoForm from './components/DemoForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import OnlineGroupClasses from './components/OnlineGroupClasses'
import OneOnOneMentorship from './components/OneOnOneMentorship'
import PerformanceTracking from './components/PerformanceTracking'

function HomePage() {
    return (
        <>
            <Hero />
            <AboutZenith />
            <About />
            <Programs />
            <Faculties />
            <Results />
            <DemoForm />
        </>
    )
}

function App() {
    return (
        <div className="font-sans text-white bg-black">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/programs/online-group-classes" element={<OnlineGroupClasses />} />
                    <Route path="/programs/one-on-one-mentorship" element={<OneOnOneMentorship />} />
                    <Route path="/programs/performance-tracking" element={<PerformanceTracking />} />
                </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default App
