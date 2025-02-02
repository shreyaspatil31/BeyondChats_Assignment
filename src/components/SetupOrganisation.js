import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WebScrapingStatus from "./WebScrapingStatus";
import "../styles/SetupOrganisation.css";

export default function SetupOrganisation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    websiteUrl: "",
    description: "",
    metaDescription: "",
  });

  const [scrapedPages, setScrapedPages] = useState([]);
  const [scrapingStarted, setScrapingStarted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchMetaDescription = async () => {
    const dummyMetaDescription = "This is a meta description for the company.";
    setFormData({ ...formData, metaDescription: dummyMetaDescription });
  };

  const handleScrapeWebsite = () => {
    setScrapingStarted(true);
    // Simulate scraping process with dummy data
    setTimeout(() => {
      setScrapedPages([
        { page: "Home", status: "scraped", chunks: 3 },
        { page: "About Us", status: "scraped", chunks: 2 },
        { page: "Contact", status: "scraped", chunks: 1 },
      ]);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/chatbot-integration");
  };

  return (
    <div className="container">
      <div className="card shadow-lg p-4 rounded fade-in">
        <h3 className="heading text-center mb-3">Setup Organisation</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="companyName" className="form-label">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="form-control"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="websiteUrl" className="form-label">Website URL</label>
            <input
              type="url"
              id="websiteUrl"
              name="websiteUrl"
              className="form-control"
              value={formData.websiteUrl}
              onChange={handleChange}
              required
              onBlur={fetchMetaDescription}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="metaDescription" className="form-label">Meta Description</label>
            <textarea
              id="metaDescription"
              name="metaDescription"
              className="form-control"
              value={formData.metaDescription}
              readOnly
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Company Description</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          {!scrapingStarted ? (
            <button type="button" className="btn btn-secondary w-100 mb-3" onClick={handleScrapeWebsite}>
              Scrap Website
            </button>
          ) : (
            <WebScrapingStatus scrapedPages={scrapedPages} />
          )}

          {scrapedPages.length > 0 && (
            <button type="submit" className="btn btn-primary w-100">Next</button>
          )}
        </form>
      </div>
    </div>
  );
}