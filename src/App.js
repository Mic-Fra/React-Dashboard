import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.js";
import Layout from "./components/layout.js";

function App() {
  return (
    <div className="bg-[#110a01]">
      <div className="justify-between max-w-[1440px] bg-[#110a01] mx-auto">
        <Router>
            <Layout>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Layout>
        </Router>
      </div>
    </div>
  );
} 

export default App;
