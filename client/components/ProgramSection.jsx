import React from 'react';
import { Link } from 'react-router-dom';

const programData = [
    {
        iconClass: '../public/img/body.png',
        title: "Body Building",
        description: "Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet"
    },
    {
        iconClass: "../public/img/weightlifting.png",
        title: "Weight Lifting",
        description: "Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet"
    },
    {
        iconClass: "../public/img/arm.png",
        title: "Muscle Building",
        description: "Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet"
    }
];

const ProgramSection = () => {
    return (
        <div className="container-fluid programe position-relative px-5 mt-5" style={{ marginBottom: '135px' }}>
            <div className="row g-5 gb-5">
                {programData.map((program, index) => (
                    <ProgramCard
                        key={index}
                        iconClass={program.iconClass}
                        title={program.title}
                        description={program.description}
                    />
                ))}
                <div className="col-lg-12 col-md-6 text-center">
                    <h1 className="text-uppercase text-light mb-4">30% Discount For This Summer</h1>
                    <Link href="" className="btn btn-primary py-3 px-5">Become A Member</Link>
                </div>
            </div>
        </div>
    );
}

const ProgramCard = ({ iconClass, title, description }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="bg-light rounded text-center p-5">
                <img src={iconClass} style={{ height: "80", width: "80px" }} alt='body'></img>
                <h3 className="text-uppercase my-4">{title}</h3>
                <p>{description}</p>
                <Link className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></Link>
            </div>
        </div>
    );
}

export default ProgramSection;
