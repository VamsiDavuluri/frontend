import React, { useState } from 'react';
import './ReportForm.css';

const ReportForm: React.FC = () => {
  const [incidentType, setIncidentType] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');
  const [reporterName, setReporterName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [peopleAffected, setPeopleAffected] = useState('');
  const [injuries, setInjuries] = useState('');
  const [fatalities, setFatalities] = useState('');
  const [immediateNeeds, setImmediateNeeds] = useState<string[]>([]);
  const [attachments, setAttachments] = useState<FileList | null>(null);

  const handleNeedsChange = (need: string) => {
    setImmediateNeeds(prevNeeds => 
      prevNeeds.includes(need) 
        ? prevNeeds.filter(n => n !== need) 
        : [...prevNeeds, need]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(e.target.files);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="report-page">
      <header className="report-header">
        <h1>Sahay</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/report">Report an Incident</a></li>
            <li><a href="/donate">Donate</a></li>
            <li><a href="/shelters">Shelters</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>
      <div className="form-container">
        <div className="report-form">
          <h2>Report an Incident</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Type of Incident</label>
              <select value={incidentType} onChange={e => setIncidentType(e.target.value)} required>
                <option value="">Select an incident type</option>
                <option value="Fire">Fire</option>
                <option value="Flood">Flood</option>
                <option value="Earthquake">Earthquake</option>
                <option value="Accident">Accident</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea value={description} onChange={e => setDescription(e.target.value)} required></textarea>
            </div>
            <div className="form-group">
              <label>Date and Time of Incident</label>
              <input type="datetime-local" value={dateTime} onChange={e => setDateTime(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" value={location} onChange={e => setLocation(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" value={reporterName} onChange={e => setReporterName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input type="tel" value={contactNumber} onChange={e => setContactNumber(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Role</label>
              <select value={role} onChange={e => setRole(e.target.value)} required>
                <option value="">Select your role</option>
                <option value="Victim">Victim</option>
                <option value="Witness">Witness</option>
                <option value="Official">Official</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="form-group">
              <label>Number of People Affected</label>
              <input type="number" value={peopleAffected} onChange={e => setPeopleAffected(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Injuries</label>
              <input type="number" value={injuries} onChange={e => setInjuries(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Fatalities</label>
              <input type="number" value={fatalities} onChange={e => setFatalities(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Immediate Needs</label>
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" checked={immediateNeeds.includes('Medical Assistance')} onChange={() => handleNeedsChange('Medical Assistance')} />
                  Medical Assistance
                </label>
                <label>
                  <input type="checkbox" checked={immediateNeeds.includes('Food')} onChange={() => handleNeedsChange('Food')} />
                  Food
                </label>
                <label>
                  <input type="checkbox" checked={immediateNeeds.includes('Shelter')} onChange={() => handleNeedsChange('Shelter')} />
                  Shelter
                </label>
                {/* Add more checkboxes as needed */}
              </div>
            </div>
            <div className="form-group">
              <label>Attachments</label>
              <input type="file" multiple onChange={handleFileChange} />
            </div>
            <button type="submit" className="submit-button">Submit Report</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
