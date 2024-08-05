import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Spinner } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Help = () => {
  const [helps, setHelps] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const helps = [
  //   {
  //     id: 1,
  //     title: "Getting Started",
  //     description: "This guide helps you get started with the application.",
  //     file: "path/to/getting-started.pdf",
  //     file_type: 1, // e.g., 1 for PDF
  //   },
  //   {
  //     id: 2,
  //     title: "Frequently Asked Questions",
  //     description: "Find answers to the most common questions here.",
  //     file: "path/to/faq.pdf",
  //     file_type: 1, // e.g., 1 for PDF
  //   },
  //   {
  //     id: 3,
  //     title: "Troubleshooting",
  //     description: "Solutions for common issues you might encounter.",
  //     file: "path/to/troubleshooting.pdf",
  //     file_type: 1, // e.g., 1 for PDF
  //   },
  // ];

  useEffect(() => {
    const fetchData = async () => {
      const localUrl = "http://localhost:8000/helps";
      const deployedUrl = "https://fitbit-agxw.onrender.com/helps";
      try {
        setError(null);
        const res = await fetch(deployedUrl);
        const data = await res.json();
        if (res.ok) {
          setHelps(data);
        } else {
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
    <div>
      <Navigation />
      {loading === true ? (
        <div className="container my-5 text-center">
          <Spinner />
        </div>
      ) : (
        <>
          {error ? (
            <h2 className="text-center mb-4 my-5 text-danger">{error}</h2>
          ) : (
            <>
              {helps?.length > 0 ? (
                <div className="container my-5">
                  <h2 className="text-center mb-4">Help Center</h2>
                  <div>
                    {helps.map((help) => (
                      <div key={help.id} className="mb-4">
                        <h3>{help.title}</h3>
                        <p>{help.description}</p>
                        <a
                          href={help.file}
                          download
                          className="btn btn-primary"
                        >
                          Download {help.file_type === 1 ? "PDF" : "File"}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <h2 className="text-center mb-4 my-5">No helps available.</h2>
              )}
            </>
          )}
        </>
      )}
      <Footer />
    </div>
  );
};

export default Help;
