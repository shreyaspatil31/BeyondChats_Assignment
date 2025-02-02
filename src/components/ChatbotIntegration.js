import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ChatbotIntegration.css";

export default function ChatbotIntegration() {
  const navigate = useNavigate();
  const [integrationSuccess, setIntegrationSuccess] = useState(null);

  const handleTestIntegration = () => {
    setIntegrationSuccess(Math.random() > 0.3);
  };

  return (
    <div className="container-fluid chatbot-container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-lg p-4 rounded fade-in">
            <h3 className="heading text-center mb-3">Chatbot Integration & Testing</h3>

            <div className="topbar text-center">
              <p>
                Chatbot not working as intended?{" "}
                <a href="/feedback">Share feedback</a>
              </p>
            </div>

            <div className="text-center">
              <div className="d-grid gap-2">
                <button
                  className="btn btn-primary"
                  onClick={() => window.open("https://example.com", "_blank")}
                >
                  Test Chatbot
                </button>

                <button className="btn btn-secondary">Integrate on your website</button>
              </div>

              <div className="instructions text-left mt-4">
                <p>
                  <strong>Option 1:</strong> Copy-paste the following script inside{" "}
                  <code>&lt;head&gt;</code> of your website:
                </p>
                <pre>{`<script src="https://example.com/chatbot.js"></script>`}</pre>
                <p>
                  <strong>Option 2:</strong>{" "}
                  <button className="btn btn-info">Mail instructions to developer</button>
                </p>
              </div>

              <button className="btn btn-success mt-3" onClick={handleTestIntegration}>
                Test Integration
              </button>
            </div>
          </div>

          {integrationSuccess !== null && (
            <div className="result-ui mt-4">
              {integrationSuccess ? (
                <div className="success-ui text-center">
                  <h3>🎉 Integration Successful! 🎉</h3>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" onClick={() => navigate("/admin-panel")}>
                      Explore Admin Panel
                    </button>
                    <button className="btn btn-secondary" onClick={() => navigate("/chat")}>
                      Start Talking to Your Chatbot
                    </button>
                  </div>
                  <div className="social-buttons mt-3">
                    <button className="btn btn-outline-primary">Share on Facebook</button>
                    <button className="btn btn-outline-info">Share on Twitter</button>
                  </div>
                </div>
              ) : (
                <div className="failure-ui text-center">
                  <h3>⚠️ Integration Not Detected</h3>
                  <p>Please ensure the chatbot script is correctly added and try again.</p>
                  <button className="btn btn-warning" onClick={handleTestIntegration}>
                    Retry
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
