// src/components/WebScrapingStatus.js
import React from "react";

export default function WebScrapingStatus({ scrapedPages }) {
  return (
    <div className="mb-3">
      <h5>Scraped Web Pages</h5>
      <div className="list-group">
        {scrapedPages.map((page, index) => (
          <div key={index} className="list-group-item d-flex justify-content-between">
            <span>{page.page}</span>
            <span className={`badge bg-${page.status === "scraped" ? "success" : "warning"}`}>
              {page.status}
            </span>
            {page.status === "scraped" && (
              <button
                type="button"
                className="btn btn-link"
                onClick={() => alert(`Showing data chunks for ${page.page}`)}
              >
                View Chunks
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
