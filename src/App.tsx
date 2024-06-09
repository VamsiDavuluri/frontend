import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MessageList from './MessageList';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import ReportForm from './ReportForm';
import DonationForm from './DonationForm';
import ShelterForm from './ShelterForm';
import ShelterList from './ShelterList';

import './App.css';

interface Shelter {
  shelterName: string;
  shelterAddress: string;
  numberOfPeople: number;
  contactName: string;
  contactPhone: string;
  volunteerName: string;
  volunteerEmail: string;
  volunteerPhone: string;
}

const App: React.FC = () => {
  const [shelters, setShelters] = useState<Shelter[]>([]);

  const addShelter = (shelter: Shelter) => {
    setShelters([...shelters, shelter]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/incidents" element={<MessageList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/report" element={<ReportForm />} />
        <Route path="/donate" element={<DonationForm />} />
        <Route 
          path="/shelters" 
          element={
            <div className="shelter-page">
              <ShelterForm addShelter={addShelter} />
              <ShelterList shelters={shelters} />
            </div>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
