import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Navigation from "./Navigation";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";

const FAQs = () => {
  const [faqs, setFaqs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const localUrl = "http://localhost:8000/faqs";
      // const deployedUrl = "https://fitbit-agxw.onrender.com/faqs";
      try {
        setError(null);
        const res = await fetch(localUrl);
        const data = await res.json();
        if (res.ok) {
          setFaqs(data);
        } else {
          console.error("Error : ", data);
          setError(data.message);
        }
      } catch (error) {
        console.error("Error : ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navigation />
      {loading === true ? (
        <div className="container my-5 text-center">
          <Spinner animation="border" role="status" />
        </div>
      ) : (
        <>
          {error ? (
            <div className="my-5 text-center">
              <h2>{error}</h2>
            </div>
          ) : (
            <>
              {faqs?.length > 0 ? (
                <div className="my-5 mx-5">
                  <h2 className="text-center mb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="accordion" id="faqAccordion">
                    {faqs.map((faq) => (
                      <div
                        className="accordion-item"
                        key={faq.id}
                        style={{
                          marginBottom: "1rem",
                          border: "none",
                          borderRadius: "0.5rem",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <h2
                          className="accordion-header"
                          id={`heading${faq.id}`}
                        >
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${faq.id}`}
                            aria-expanded="true"
                            aria-controls={`collapse${faq.id}`}
                            style={{
                              backgroundColor: "#3d3d3d",
                              color: "#fff",
                              border: "none",
                              borderRadius: "0.5rem",
                              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                              fontSize: "1.1rem",
                              fontWeight: "bold",
                              position: "relative",
                            }}
                          >
                            {faq.question}
                            <style>
                              {`
                        .accordion-button::after {
                          filter: invert(1); /* Ensure icon is white */
                        }
                      `}
                            </style>
                          </button>
                        </h2>
                        <div
                          id={`collapse${faq.id}`}
                          className="accordion-collapse collapse"
                          aria-labelledby={`heading${faq.id}`}
                          data-bs-parent="#faqAccordion"
                        >
                          <div
                            className="accordion-body"
                            style={{
                              backgroundColor: "#b6babe",
                              color: "#212529",
                              borderRadius: "0.5rem",
                              padding: "1rem",
                              fontSize: "1rem",
                            }}
                          >
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="my-5 text-center">
                  <h2>No questions avalible yet</h2>
                </div>
              )}
            </>
          )}
        </>
      )}

      <Footer />
    </>
  );
};

export default FAQs;
