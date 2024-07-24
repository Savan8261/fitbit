import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-dark text-secondary px-5 mt-5">
                <div className="row gx-5">
                    <div className="col-lg-8 col-md-6">
                        <div className="row gx-5">
                            <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                <h4 className="text-uppercase text-light mb-4">Get In Touch</h4>
                                <div className="d-flex mb-2">
                                    <i className="bi bi-geo-alt text-primary me-2"></i>
                                    <p className="mb-0">123 Street, New York, USA</p>
                                </div>
                                <div className="d-flex mb-2">
                                    <i className="bi bi-envelope-open text-primary me-2"></i>
                                    <p className="mb-0"><a href="mailto:info@example.com">info@example.com</a></p>
                                </div>
                                <div className="d-flex mb-2">
                                    <i className="bi bi-telephone text-primary me-2"></i>
                                    <p className="mb-0">+012 345 67890</p>
                                </div>
                                <div className="d-flex mt-4">
                                    <Link className="btn btn-primary btn-square rounded-circle me-2" to="#"><i className="bi bi-twitter"></i></Link>
                                    <Link className="btn btn-primary btn-square rounded-circle me-2" to="#"><i className="bi bi-facebook"></i></Link>
                                    <Link className="btn btn-primary btn-square rounded-circle me-2" to="#"><i className="bi bi-linkedin"></i></Link>
                                    <Link className="btn btn-primary btn-square rounded-circle" to="#"><i className="bi bi-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <h4 className="text-uppercase text-light mb-4">Quick Links</h4>
                                <div className="d-flex flex-column justify-content-start">
                                    <Link className="text-secondary mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                                    <Link className="text-secondary mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                                    <Link className="text-secondary mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Class Schedule</Link>
                                    <Link className="text-secondary mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Trainers</Link>
                                    <Link className="text-secondary mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</Link>
                                    <Link className="text-secondary" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <h4 className="text-uppercase text-light mb-4">Popular Links</h4>
                                <div className="d-flex flex-column justify-content-start">
                                    <Link className="text-secondary mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                                    <Link className="text-secondary mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                                    <Link className="text-secondary mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Class Schedule</Link>
                                    <Link className="text-secondary mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Trainers</Link>
                                    <Link className="text-secondary mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</Link>
                                    <Link className="text-secondary" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-5">
                            <h4 className="text-uppercase text-white mb-4">Newsletter</h4>
                            <h6 className="text-uppercase text-white">Subscribe Our Newsletter</h6>
                            <p className="text-light">Amet justo diam dolor rebum lorem sit stet sea justo kasd</p>
                            <form action="">
                                <div className="input-group">
                                    <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                                    <button className="btn btn-dark">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-4 py-lg-0 px-5" style={{ background: "#111111" }}>
                <div className="row gx-5">
                    <div className="col-lg-8">
                        <div className="py-lg-4 text-center">
                            <p className="text-secondary mb-0">&copy; <Link className="text-light fw-bold" to="#">Your Site Name</Link>. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="py-lg-4 text-center credit">
                            <p className="text-light mb-0">Designed by <Link className="text-light fw-bold" to="https://htmlcodex.com">HTML Codex</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
