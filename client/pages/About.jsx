import React from 'react'
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'
import AboutJsx from '../components/About'
import ProgramSection from '../components/ProgramSection'
import StatsSection from '../components/StatusData'
import Footer from '../components/Footer'
function About() {
    return (
        <>
            <Navigation />
            <div className="container-fluid bg-primary p-5 bg-hero mb-5">
                <div className="row py-5">
                    <div className="col-12 text-center">
                        <h1 className="display-2 text-uppercase text-white mb-md-4">About Us</h1>
                        <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
                        <Link to="/about" className="btn btn-light py-md-3 px-md-5">About</Link>
                    </div>
                </div>
            </div>
            <AboutJsx />
            <ProgramSection />
            <StatsSection />
            <Footer />
        </>
    )
}

export default About