import React from "react";

export default function IntegrationSuccess() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-lg p-4 rounded fade-in text-center">
            <h3 className="heading text-center mb-3">Integration Successful!</h3>

            <p>Congratulations! Your chatbot integration was successful.</p>

            <div className="d-grid gap-2">
              <button className="btn btn-primary" onClick={() => window.location.href = "/admin-panel"}>
                Explore Admin Panel
              </button>
              <button className="btn btn-secondary" onClick={() => window.location.href = "/chat"}>
                Start talking to your chatbot
              </button>
            </div>

            <div className="social-buttons mt-3">
              <button className="btn btn-outline-primary me-2">Share on Facebook</button>
              <button className="btn btn-outline-info">Share on Twitter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
