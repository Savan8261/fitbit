import React, { useState } from "react";
import { Collapse, Card, Button } from "react-bootstrap";
import Footer from "./Footer";
import Navigation from "./Navigation";

const LegalAgreements = () => {
  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const legalAgreements = [
    {
      id: 1,
      title: "Privacy Policy",
      content:
        "This is the privacy policy content. It explains how user data is collected and used.",
      type: "1", // 1: Privacy Policies
    },
    {
      id: 2,
      title: "Terms and Conditions",
      content:
        "These are the terms and conditions. They outline the rules and guidelines for using our service.",
      type: "2", // 2: Terms & Conditions
    },
    {
      id: 3,
      title: "About Us",
      content: "This section provides information about our company and team.",
      type: "3", // 3: About Us
    },
  ];

  return (
    <div>
      <Navigation />
      <div className="container my-5">
        <h2 className="text-center mb-4">Legal Agreements</h2>
        <div className="accordion" id="legalAccordion">
          {legalAgreements.map((agreement) => (
            <Card key={agreement.id} className="mb-3 border-dark shadow-lg">
              <Card.Header className="bg-dark text-light rounded-top">
                <Button
                  className="btn btn-link text-light w-100 text-start fs-5"
                  onClick={() => handleToggle(agreement.id)}
                  aria-expanded={open === agreement.id}
                  aria-controls={`agreement${agreement.id}`}
                >
                  {agreement.title}
                </Button>
              </Card.Header>
              <Collapse in={open === agreement.id}>
                <Card.Body
                  id={`agreement${agreement.id}`}
                  style={{ background: "#403c3c", color: "white" }}
                >
                  <p className="mb-0">{agreement.content}</p>
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

export default LegalAgreements;
