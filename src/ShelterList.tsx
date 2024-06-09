import React from 'react';
import './ShelterList.css';

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

interface ShelterListProps {
  shelters: Shelter[];
}

const ShelterList: React.FC<ShelterListProps> = ({ shelters }) => {
  return (
    <div className="shelter-list-container">
      <h3>List of Shelters</h3>
      {shelters.map((shelter, index) => (
        <div key={index} className="shelter-card">
          <h4>{shelter.shelterName}</h4>
          <p><strong>Address:</strong> {shelter.shelterAddress}</p>
          <p><strong>Number of People:</strong> {shelter.numberOfPeople}</p>
          <p><strong>Contact Name:</strong> {shelter.contactName}</p>
          <p><strong>Contact Phone:</strong> {shelter.contactPhone}</p>
          <p><strong>Volunteer Name:</strong> {shelter.volunteerName}</p>
          <p><strong>Volunteer Email:</strong> {shelter.volunteerEmail}</p>
          <p><strong>Volunteer Phone:</strong> {shelter.volunteerPhone}</p>
        </div>
      ))}
    </div>
  );
};

export default ShelterList;