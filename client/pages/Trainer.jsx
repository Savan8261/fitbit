import React from 'react'
import Navigation from '../components/Navigation'
import Trainer from '../components/Trainer'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function TrainerPage() {
    return (
        <>
            <Navigation />
            <div className="container-fluid bg-primary p-5 bg-hero mb-5">
                <div className="row py-5">
                    <div className="col-12 text-center">
                        <h1 className="display-2 text-uppercase text-white mb-md-4">Trainers</h1>
                        <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
                        <Link to="/trainers" className="btn btn-light py-md-3 px-md-5">Trainers</Link>
                    </div>
                </div>
            </div>
            <Trainer />
            <Footer />
        </>
    )
}

export default TrainerPage