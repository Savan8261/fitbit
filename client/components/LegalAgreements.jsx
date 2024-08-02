import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

function LegalAgreements() {
  const { id } = useParams();
  const [agreement, setAgreement] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // console.log(typeof agreement);

  useEffect(() => {
    const fetchAgreement = async () => {
      const localUrl = `http://localhost:8000/legalagreement/${id}`;
      const deployedUrl = `https://fitbit-agxw.onrender.com/legalagreement/${id}`;

      try {
        setError(null);
        setLoading(true);
        const res = await fetch(deployedUrl);
        const data = await res.json();
        if (res.ok) {
          setAgreement(data);
        } else {
          console.error("Error", ":", data);
          setError(data.message);
        }
      } catch (error) {
        console.error("Error", ":", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAgreement();
  }, [id]);

  return (
    <div>
      <Navigation />

      {loading === true ? (
        <div className="container my-5 text-center">
          <Spinner animation="border" role="status" />
        </div>
      ) : (
        <>
          {error ? (
            <h1 className="text-center text-danger my-5">{error}</h1>
          ) : (
            <>
              {agreement && (
                <div>
                  <h2 className="text-center my-5">{agreement.title}</h2>
                  <div className="mx-5">
                    <p>
                      <strong>Last updated:</strong> {agreement.updatedAt}
                    </p>
                    <div
                      dangerouslySetInnerHTML={{ __html: agreement.content }}
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}

      <Footer />
    </div>
  );
}

export default LegalAgreements;
