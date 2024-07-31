import React, { useState } from "react";
import { Collapse, Card, Button } from "react-bootstrap";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const FAQs = () => {
  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "What is the purpose of this application?",
      answer:
        "This application is designed to help users track their fitness activities and manage their health data.",
    },
    {
      id: 2,
      question: "How do I reset my password?",
      answer:
        'To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions to reset your password.',
    },
    {
      id: 3,
      question: "Can I integrate this application with other fitness devices?",
      answer:
        "Yes, the application supports integration with various fitness devices. Check the settings for available integrations.",
    },
  ];

  return (
    <div>
      <Navigation />
      <div className="container my-5">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq) => (
            <Card key={faq.id} className="mb-3 border-dark shadow-lg">
              <Card.Header
                style={{ backgroundColor: "#343a40", color: "#fff" }}
                className="rounded-top"
              >
                <Button
                  className="btn btn-link text-light w-100 text-start fs-5 d-flex justify-content-between align-items-center"
                  onClick={() => handleToggle(faq.id)}
                  aria-expanded={open === faq.id}
                  aria-controls={`faq${faq.id}`}
                  style={{ textDecoration: "none", background: "transparent" }}
                >
                  {faq.question}
                  <FontAwesomeIcon
                    icon={open === faq.id ? faChevronDown : faChevronRight}
                    style={{ transition: "transform 0.2s" }}
                  />
                </Button>
              </Card.Header>
              <Collapse in={open === faq.id}>
                <Card.Body
                  id={`faq${faq.id}`}
                  style={{ backgroundColor: "#495057", color: "#fff" }}
                >
                  <p className="mb-0">{faq.answer}</p>
                </Card.Body>
              </Collapse>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
