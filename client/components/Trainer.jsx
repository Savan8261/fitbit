
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const teamData = [
    {
        name: 'John Deo',
        role: 'Trainer',
        imgSrc: '../public/img/team-1.jpg',
    },
    {
        name: 'James Taylor',
        role: 'Trainer',
        imgSrc: '../public/img/team-2.jpg',
    },
    {
        name: 'Adam Phillips',
        role: 'Trainer',
        imgSrc: '../public/img/team-3.jpg',
    }
];
const TeamMember = ({ name, role, imgSrc }) => (
    <div className="col-lg-4 col-md-6">
        <div className="team-item position-relative">
            <div className="position-relative overflow-hidden rounded">
                <img className="img-fluid w-100" src={imgSrc} alt="" />
                <div className="team-overlay">
                    <div className="d-flex align-items-center justify-content-start">
                        <Link className="btn btn-light btn-square rounded-circle mx-1" href="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                        <Link className="btn btn-light btn-square rounded-circle mx-1" href="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
                        <Link className="btn btn-light btn-square rounded-circle mx-1" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    </div>
                </div>
            </div>
            <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
                style={{ background: 'rgba(34, 36, 41, .9)' }}>
                <h5 className="text-uppercase text-light">{name}</h5>
                <p className="text-uppercase text-secondary m-0">{role}</p>
            </div>
        </div>
    </div>
);

const Trainer = () => (
    <div className="container-fluid p-5">
        <div className="mb-5 text-center">
            <h5 className="text-primary text-uppercase">The Team</h5>
            <h1 className="display-3 text-uppercase mb-0">Expert Trainers</h1>
        </div>
        <div className="row g-5">
            {teamData.map((member, index) => (
                <TeamMember key={index} name={member.name} role={member.role} imgSrc={member.imgSrc} />
            ))}
        </div>
    </div>
);

export default Trainer;
