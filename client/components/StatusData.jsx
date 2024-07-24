import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUsers, faCheck, faMugHot } from '@fortawesome/free-solid-svg-icons';

const statsData = [
    { icon: faStar, title: 'Experience', count: 12345 },
    { icon: faUsers, title: 'Our Trainers', count: 12345 },
    { icon: faCheck, title: 'Complete Project', count: 12345 },
    { icon: faMugHot, title: 'Happy Clients', count: 12345 }
];


const StatsCard = ({ icon, title, count }) => (
    <div className="col-lg-3 col-md-6">
        <div className="d-flex">
            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <FontAwesomeIcon icon={icon} className="fs-4 text-white" />
            </div>
            <div className="ps-4">
                <h5 className="text-secondary text-uppercase">{title}</h5>
                <h1 className="display-5 text-white mb-0" data-toggle="counter-up">{count}</h1>
            </div>
        </div>
    </div>
);

const StatsSection = () => (
    <div className="container-fluid bg-dark facts p-5 my-5">
        <div className="row gx-5 gy-4 py-5">
            {statsData.map((stat, index) => (
                <StatsCard key={index} icon={stat.icon} title={stat.title} count={stat.count} />
            ))}
        </div>
    </div>
);

export default StatsSection;
