import React, { useState } from "react";
import { Link } from "react-router-dom";

const scheduleData = [
    { day: "Monday", details: [
        { time: "6.00am - 8.00am", className: "Power Lifting", instructor: "John Deo" },
        { time: "8.00am - 10.00am", className: "Body Building", instructor: "James Taylor" },
        { time: "10.00am - 12.00pm", className: "Cardio Program", instructor: "Jack Sparrow" },
        { time: "12.00pm - 2.00pm", className: "Weight Loss", instructor: "Robert Smith" },
        { time: "2.00pm - 4.00pm", className: "Fitness Program", instructor: "Adam Phillips" },
        { time: "4.00pm - 6.00pm", className: "Crossfit Class", instructor: "James Alien" },
        { time: "6.00pm - 8.00pm", className: "Muscle Building", instructor: "Peter John" },
        { time: "8.00pm - 10.00pm", className: "Yoga Class", instructor: "Jessy Reo" },
    ]},
    { day: "Tuesday", details: [
        { time: "6.00am - 8.00am", className: "Yoga Class", instructor: "Anna Bell" },
        { time: "8.00am - 10.00am", className: "Boxing", instructor: "David Kim" },
        { time: "10.00am - 12.00pm", className: "Zumba", instructor: "Lucy Brown" },
        { time: "12.00pm - 2.00pm", className: "Pilates", instructor: "Emily White" },
        { time: "2.00pm - 4.00pm", className: "Spin Class", instructor: "Sarah Green" },
        { time: "4.00pm - 6.00pm", className: "HIIT", instructor: "Chris Black" },
        { time: "6.00pm - 8.00pm", className: "Swimming", instructor: "Pat Blue" },
        { time: "8.00pm - 10.00pm", className: "Tai Chi", instructor: "Lee Gray" },
    ]},
    { day: "Wednesday", details: [
        { time: "6.00am - 8.00am", className: "Running", instructor: "Tom Smith" },
        { time: "8.00am - 10.00am", className: "Cycling", instructor: "Harry Kane" },
        { time: "10.00am - 12.00pm", className: "Crossfit", instructor: "Alex Martin" },
        { time: "12.00pm - 2.00pm", className: "Gymnastics", instructor: "Laura Wilson" },
        { time: "2.00pm - 4.00pm", className: "Dance", instructor: "Michael Clark" },
        { time: "4.00pm - 6.00pm", className: "Aerobics", instructor: "Samantha Davis" },
        { time: "6.00pm - 8.00pm", className: "Rowing", instructor: "George Thomas" },
        { time: "8.00pm - 10.00pm", className: "Meditation", instructor: "Nina Roberts" },
    ]},
    { day: "Thursday", details: [
        { time: "6.00am - 8.00am", className: "Kickboxing", instructor: "Diana Lee" },
        { time: "8.00am - 10.00am", className: "Yoga", instructor: "Mark Young" },
        { time: "10.00am - 12.00pm", className: "Pilates", instructor: "Olivia Evans" },
        { time: "12.00pm - 2.00pm", className: "Barre", instructor: "Mason Scott" },
        { time: "2.00pm - 4.00pm", className: "TRX", instructor: "Sophia Adams" },
        { time: "4.00pm - 6.00pm", className: "Step Class", instructor: "James Parker" },
        { time: "6.00pm - 8.00pm", className: "Strength Training", instructor: "Ava Ramirez" },
        { time: "8.00pm - 10.00pm", className: "Tai Chi", instructor: "Ella Gonzalez" },
    ]},
    { day: "Friday", details: [
        { time: "6.00am - 8.00am", className: "Body Attack", instructor: "Liam Martinez" },
        { time: "8.00am - 10.00am", className: "Power Yoga", instructor: "Noah Anderson" },
        { time: "10.00am - 12.00pm", className: "Aqua Aerobics", instructor: "Emma Hernandez" },
        { time: "12.00pm - 2.00pm", className: "Cardio Blast", instructor: "Charlotte Wilson" },
        { time: "2.00pm - 4.00pm", className: "Boot Camp", instructor: "Lucas Moore" },
        { time: "4.00pm - 6.00pm", className: "Core Conditioning", instructor: "Mia Martinez" },
        { time: "6.00pm - 8.00pm", className: "Stretch and Tone", instructor: "Benjamin Clark" },
        { time: "8.00pm - 10.00pm", className: "Yin Yoga", instructor: "Amelia Lee" },
    ]},
    { day: "Saturday", details: [
        { time: "6.00am - 8.00am", className: "Boxing", instructor: "Elijah Lewis" },
        { time: "8.00am - 10.00am", className: "Functional Training", instructor: "Avery Walker" },
        { time: "10.00am - 12.00pm", className: "Kettlebell Training", instructor: "Harper Hall" },
        { time: "12.00pm - 2.00pm", className: "Body Pump", instructor: "Ethan Allen" },
        { time: "2.00pm - 4.00pm", className: "Yoga", instructor: "Mila Young" },
        { time: "4.00pm - 6.00pm", className: "Cardio Dance", instructor: "Jacob King" },
        { time: "6.00pm - 8.00pm", className: "Strength Training", instructor: "Lucas Wright" },
        { time: "8.00pm - 10.00pm", className: "Pilates", instructor: "Sophia Lopez" },
    ]},
    { day: "Sunday", details: [
        { time: "6.00am - 8.00am", className: "Crossfit", instructor: "Mason Scott" },
        { time: "8.00am - 10.00am", className: "TRX", instructor: "Sophia Adams" },
        { time: "10.00am - 12.00pm", className: "Step Class", instructor: "James Parker" },
        { time: "12.00pm - 2.00pm", className: "Strength Training", instructor: "Ava Ramirez" },
        { time: "2.00pm - 4.00pm", className: "Tai Chi", instructor: "Ella Gonzalez" },
        { time: "4.00pm - 6.00pm", className: "Power Lifting", instructor: "John Deo" },
        { time: "6.00pm - 8.00pm", className: "Body Building", instructor: "James Taylor" },
        { time: "8.00pm - 10.00pm", className: "Yoga Class", instructor: "Jessy Reo" },
    ]}
];


const ClassSchedule = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="container-fluid p-5">
            <div className="mb-5 text-center">
                <h5 className="text-primary text-uppercase">Class Schedule</h5>
                <h1 className="display-3 text-uppercase mb-0">Working Hours</h1>
            </div>
            <div className="tab-class text-center">
                <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5">
                    {scheduleData.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <Link
                                className={`nav-link rounded-pill text-white ${index === activeTab ? "active" : ""}`}
                                onClick={() => setActiveTab(index)}
                                to={`#tab-${index}`}
                            >
                                {item.day}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="tab-content">
                    {scheduleData.map((item, index) => (
                        <div
                            id={`tab-${index}`}
                            className={`tab-pane fade p-0 ${index === activeTab ? "show active" : ""}`}
                            key={index}
                        >
                            <div className="row g-5">
                                {item.details.map((detail, detailIndex) => (
                                    <div className="col-lg-3 col-md-4 col-sm-6" key={detailIndex}>
                                        <div className="bg-dark rounded text-center py-5 px-3">
                                            <h6 className="text-uppercase text-light mb-3">{detail.time}</h6>
                                            <h5 className="text-uppercase text-primary">{detail.className}</h5>
                                            <p className="text-uppercase text-secondary mb-0">{detail.instructor}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClassSchedule;
