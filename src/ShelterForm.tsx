import React, { useState } from 'react';
import './ShelterForm.css';

interface ShelterFormProps {
  addShelter: (shelter: ShelterFormState) => void;
}

interface ShelterFormState {
  shelterName: string;
  shelterAddress: string;
  numberOfPeople: number;
  contactName: string;
  contactPhone: string;
  volunteerName: string;
  volunteerEmail: string;
  volunteerPhone: string;
}

const ShelterForm: React.FC<ShelterFormProps> = ({ addShelter }) => {
  const [formState, setFormState] = useState<ShelterFormState>({
    shelterName: '',
    shelterAddress: '',
    numberOfPeople: 0,
    contactName: '',
    contactPhone: '',
    volunteerName: '',
    volunteerEmail: '',
    volunteerPhone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: name === 'numberOfPeople' ? Number(value) : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addShelter(formState);
    setFormState({
      shelterName: '',
      shelterAddress: '',
      numberOfPeople: 0,
      contactName: '',
      contactPhone: '',
      volunteerName: '',
      volunteerEmail: '',
      volunteerPhone: ''
    });
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
            <li><a href="/volunteers">Volunteer</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>
      
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Shelter Name:</label>
          <input type="text" name="shelterName" value={formState.shelterName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Shelter Address:</label>
          <textarea name="shelterAddress" value={formState.shelterAddress} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Number of People:</label>
          <input type="number" name="numberOfPeople" value={formState.numberOfPeople} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Contact Name:</label>
          <input type="text" name="contactName" value={formState.contactName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Contact Phone:</label>
          <input type="tel" name="contactPhone" value={formState.contactPhone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Volunteer Name:</label>
          <input type="text" name="volunteerName" value={formState.volunteerName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Volunteer Email:</label>
          <input type="email" name="volunteerEmail" value={formState.volunteerEmail} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Volunteer Phone:</label>
          <input type="tel" name="volunteerPhone" value={formState.volunteerPhone} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ShelterForm;