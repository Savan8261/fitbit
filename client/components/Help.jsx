import React, { useState } from "react";
import { Collapse, Card, Button } from "react-bootstrap";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Help = () => {
  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const helps = [
    {
      id: 1,
      title: "Getting Started",
      description: "This guide helps you get started with the application.",
      file: "path/to/getting-started.pdf",
      file_type: 1, // e.g., 1 for PDF
    },
    {
      id: 2,
      title: "Frequently Asked Questions",
      description: "Find answers to the most common questions here.",
      file: "path/to/faq.pdf",
      file_type: 1, // e.g., 1 for PDF
    },
    {
      id: 3,
      title: "Troubleshooting",
      description: "Solutions for common issues you might encounter.",
      file: "path/to/troubleshooting.pdf",
      file_type: 1, // e.g., 1 for PDF
    },
  ];

  return (
    <div>
      <Navigation />
      <div className="container my-5">
        <h2 className="text-center mb-4">Help Center</h2>
        <div className="accordion" id="helpAccordion">
          {helps.map((help) => (
            <Card key={help.id} className="mb-3 border-dark shadow-lg">
              <Card.Header className="bg-dark text-light rounded-top">
                <Button
                  className="btn btn-link text-light w-100 text-start fs-5"
                  onClick={() => handleToggle(help.id)}
                  aria-expanded={open === help.id}
                  aria-controls={`help${help.id}`}
                >
                  {help.title}
                </Button>
              </Card.Header>
              <Collapse in={open === help.id}>
                <Card.Body
                  id={`help${help.id}`}
                  style={{ background: "#403c3c", color: "white" }}
                >
                  <p className="mb-2">{help.description}</p>
                  <a href={help.file} download className="btn btn-primary">
                    Download {help.file_type === 1 ? "PDF" : "File"}
                  </a>
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

export default Help;
