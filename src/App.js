// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import SetupOrganisation from "./components/SetupOrganisation";
import ChatbotIntegration from "./components/ChatbotIntegration"; 
import IntegrationSuccess from "./components/IntegrationSuccess"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/setup-organisation" element={<SetupOrganisation />} />
        <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
        <Route path="/integration-success" element={<IntegrationSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
