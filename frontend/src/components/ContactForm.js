import React, { useEffect, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import './ContactForm.css';

const ContactForm = ({ onSave, editingContact }) => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    jobTitle: "",
  });

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact); 
    } else {
      setContact({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        company: "",
        jobTitle: "",
      });
    }
  }, [editingContact]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(contact); 
    setContact({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      company: "",
      jobTitle: "",
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <div className="formContainer">
        <div className="mainContainer">
          <div className="leftCol">
            <TextField 
              name="firstName" 
              label="First Name" 
              value={contact.firstName} 
              onChange={handleChange} 
              required 
            />
            <TextField 
              name="lastName" 
              label="Last Name" 
              value={contact.lastName} 
              onChange={handleChange} 
              required 
            />
            <TextField 
              name="email" 
              label="Email" 
              value={contact.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="rightCol">
            <TextField 
              name="phoneNumber" 
              label="Phone Number" 
              value={contact.phoneNumber} 
              onChange={handleChange} 
              required 
            />
            <TextField 
              name="company" 
              label="Company" 
              value={contact.company} 
              onChange={handleChange} 
            />
            <TextField 
              name="jobTitle" 
              label="Job Title" 
              value={contact.jobTitle} 
              onChange={handleChange} 
            />
          </div>
        </div>
        <Button type="submit" className="saveButton">
          {editingContact ? "Update" : "Save"}
        </Button>
      </div>
    </Box>
  );
};

export default ContactForm;
