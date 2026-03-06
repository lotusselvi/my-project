import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Lab from './components/Lab';
import Results from './components/Results';
import History from './components/History';
import Report from './components/Report';

// API URL removed for standalone frontend
// const API_BASE = 'http://localhost:8000';

function App() {
    const [user, setUser] = useState(null);
    const [currentPage, setCurrentPage] = useState('login'); // login, dashboard, lab, results, history, report
    const [patients, setPatients] = useState([]);
    const [lastAnalysis, setLastAnalysis] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [patientMetadata, setPatientMetadata] = useState(null);

    useEffect(() => {
        if (user && currentPage === 'dashboard') {
            fetchPatients();
        }
    }, [user, currentPage]);

    const fetchPatients = async () => {
        // Mocking patients data for frontend-only version
        setPatients([
            { id: 1, name: "John Doe", diagnosis: "Healthy" },
            { id: 2, name: "Jane Smith", diagnosis: "Pending Review" }
        ]);
    };

    const handleLogin = async (userData) => {
        // Mock login for frontend-only
        if (userData.username === 'admin' && userData.password === 'admin') {
            setUser({ username: 'admin', role: 'admin' });
            setCurrentPage('dashboard');
        } else {
            alert('Invalid credentials (try admin/admin)');
        }
    };

    const handleLogout = () => {
        setUser(null);
        setCurrentPage('login');
    };

    const handleAnalyze = async (formData, imagePreview) => {
        setUploadedImage(imagePreview);

        // Extract metadata for the report
        const metadata = {
            age: formData.get('age'),
            location: formData.get('location'),
            duration: formData.get('duration')
        };
        setPatientMetadata(metadata);
        
        // Mocking analysis for frontend-only
        setTimeout(() => {
            setLastAnalysis({
                predicted_class: 'Benign Keratosis-like Lesions',
                confidence: 94.5,
                details: 'Simulated analysis indicating benign characteristics.'
            });
            setCurrentPage('results');
        }, 1500); // simulate network delay
    };

    const navigateToLab = () => {
        setCurrentPage('lab');
    };

    const navigateToDashboard = () => {
        setCurrentPage('dashboard');
    };

    const navigateToHistory = () => {
        setCurrentPage('history');
    };

    const navigateToReport = () => {
        setCurrentPage('report');
    };

    return (
        <div className="App">
            {currentPage === 'login' && <Login onLogin={handleLogin} />}

            {currentPage === 'dashboard' && (
                <Dashboard
                    user={user}
                    patientsList={patients}
                    onLogout={handleLogout}
                    onNavigateToLab={navigateToLab}
                    onNavigateToHistory={navigateToHistory}
                    onNavigateToReport={navigateToReport}
                />
            )}

            {currentPage === 'lab' && (
                <Lab
                    onBack={navigateToDashboard}
                    onAnalyze={handleAnalyze}
                />
            )}

            {currentPage === 'results' && (
                <Results
                    onBack={navigateToDashboard}
                    onNavigateToReport={navigateToReport}
                    analysisData={lastAnalysis}
                    uploadedImage={uploadedImage}
                />
            )}

            {currentPage === 'history' && (
                <History onBack={navigateToDashboard} />
            )}

            {currentPage === 'report' && (
                <Report
                    onBack={navigateToDashboard}
                    analysisData={lastAnalysis}
                    uploadedImage={uploadedImage}
                    metadata={patientMetadata}
                />
            )}
        </div>
    );
}

export default App;
