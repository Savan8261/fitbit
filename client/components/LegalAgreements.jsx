import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const LegalAgreements = () => {
  const { id } = useParams();
  const [agreement, setAgreement] = useState(null);
  const [loading, setLoading] = useState(true);

  //just a sample of string type which will be fetched from database (ex.agreement.content)
  const content =
    "<p><strong>Introduction</strong></p><p>[Your Company Name] (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [website URL], use our services, or interact with us. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.</p><p><strong>Information We Collect</strong></p><p>We may collect and process the following data about you:</p><ol><li><strong>Personal Identification Information:</strong> Name, email address, phone number, etc.</li><li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li><li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li><li><strong>Marketing and Communications Data:</strong> Your preferences in receiving marketing from us and your communication preferences.</li></ol><p><strong>How We Use Your Information</strong></p><p>We use the information we collect in the following ways:</p><ol><li><strong>To provide and maintain our service</strong>, including to monitor the usage of our service.</li><li><strong>To manage your account:</strong> to manage your registration as a user of the service.</li><li><strong>To contact you:</strong> To contact you by email, telephone calls, SMS, or other equivalent forms of electronic communication regarding updates or informative communications related to functionalities, products, or contracted services.</li></ol>";

  useEffect(() => {
    const fetchAgreement = async () => {
      const localUrl = `http://localhost:8000/legalagreement/${id}`;
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
        <p>Loading...</p>
      ) : agreement ? (
        <div>
          <h2 className="text-center my-5">{agreement.title}</h2>
          <div className="mx-5">
            <p>
              <strong>Last updated:</strong> {agreement.updatedAt}
            </p>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      ) : (
        <p>No agreement found</p>
      )}
      <Footer />
    </div>
  );
};

export default LegalAgreements;
