import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

function LegalAgreements() {
  const { id } = useParams();
  const [agreement, setAgreement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgreement = async () => {
      const localUrl = `http://localhost:8000/legalagreement/${id}`;
      const deployedUrl = `https://fitbit-agxw.onrender.com/legalagreement/${id}`;
      try {
        const res = await fetch(localUrl);
        const data = await res.json();
        setAgreement(data);
        console.log(data);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchAgreement();
  }, [id]);
  return (
    <div>
      <Navigation />
      {loading ? (
        <div className="container my-5 text-center">
          <Spinner animation="border" role="status" />
        </div>
      ) : agreement ? (
        <div>
          <h2 className="text-center my-5">{agreement.title}</h2>
          <div className="mx-5">
            <p>
              <strong>Last updated:</strong> {agreement.updatedAt}
            </p>
            <div dangerouslySetInnerHTML={{ __html: agreement.content }} />
          </div>
        </div>
      ) : (
        <p>No agreement found</p>
      )}
      <Footer />
    </div>
  );
}

export default LegalAgreements;
