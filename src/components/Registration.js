// src/components/Registration.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleLogo from "../assets/google-logo.png";
import "../styles/Registration.css";

export default function Registration() {
    const navigate = useNavigate(); // Initialize useNavigate hook for navigation
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming registration is successful, navigate to the SetupOrganisation page
        navigate("/setup-organisation"); // Redirect to SetupOrganisation page
    };

    return (
        <div className="container">
            <div className="card shadow-lg p-4 rounded fade-in">
                <h3 className="heading text-center mb-3">Register</h3>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="form-control"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Register</button>

                    <button className="sgbtn btn btn-light google-btn d-flex align-items-center justify-content-center rounded-4">
                        <img src={googleLogo} alt="Google" className="google-icon" />
                        <span className="ms-2">Continue with Google</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
