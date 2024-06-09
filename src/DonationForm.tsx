// src/DonationForm.tsx
import React, { useState } from 'react';
import './DonationForm.css';

interface DonationFormState {
  name: string;
  email: string;
  phone: string;
  donationType: string;
  amount: string;
  clothes: string;
  food: string;
  firstAid: string;
  other: string;
}

const DonationForm: React.FC = () => {
  const [formState, setFormState] = useState<DonationFormState>({
    name: '',
    email: '',
    phone: '',
    donationType: '',
    amount: '',
    clothes: '',
    food: '',
    firstAid: '',
    other: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/donations/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        console.log('Donation submitted successfully');
      } else {
        console.error('Failed to submit donation');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
    
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formState.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formState.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" name="phone" value={formState.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Donation Type:</label>
          <select name="donationType" value={formState.donationType} onChange={handleChange} required>
            <option value="" disabled>Select an option</option>
            <option value="money">Money</option>
            <option value="clothes">Clothes</option>
            <option value="food">Food</option>
            <option value="firstAid">First Aid</option>
            <option value="other">Other</option>
          </select>
        </div>
        {formState.donationType === 'money' && (
          <div className="form-group">
            <label>Amount:</label>
            <input type="number" name="amount" value={formState.amount} onChange={handleChange} required />
          </div>
        )}
        {formState.donationType === 'clothes' && (
          <div className="form-group">
            <label>Clothes:</label>
            <input type="text" name="clothes" value={formState.clothes} onChange={handleChange} required />
          </div>
        )}
        {formState.donationType === 'food' && (
          <div className="form-group">
            <label>Food:</label>
            <input type="text" name="food" value={formState.food} onChange={handleChange} required />
          </div>
        )}
        {formState.donationType === 'firstAid' && (
          <div className="form-group">
            <label>First Aid:</label>
            <input type="text" name="firstAid" value={formState.firstAid} onChange={handleChange} required />
          </div>
        )}
        {formState.donationType === 'other' && (
          <div className="form-group">
            <label>Other:</label>
            <input type="text" name="other" value={formState.other} onChange={handleChange} required />
          </div>
        )}
        <button type="submit">Donate</button>
      </form>
    </div>
    </div>
  );
};

export default DonationForm;
