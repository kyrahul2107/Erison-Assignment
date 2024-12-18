# Erison-Assignment

# Overview
The Contact Management feature is designed to help users manage and track important contact information for customers and clients. It provides a seamless interface to add, view, update, and delete contacts, ensuring all data is well-organized and easily accessible. This tool is a critical component of CRM systems, aiding users in maintaining strong relationships through efficient contact management.

# Use Cases
Add a New Contact: Capture essential details such as name, email, phone number, company, and job title.
View Contacts: Display a list of all contacts with options for sorting and pagination.
Edit Contact Information: Update contact details to ensure accuracy and relevance.
Delete Contacts: Remove outdated or duplicate entries to maintain a clean contact list.

# Specifications / Requirements
# Frontend Technology: ReactJS with Material UI (MUI) Components

Contact Form

Fields: First Name, Last Name, Email, Phone Number, Company, Job Title.
All elements styled using Material UI components.
Contacts Table

Display contact details in an MUI Table component.
Features:
Columns for all contact attributes.
Action buttons for editing and deleting contacts.
Pagination and sorting for usability.
Backend
Technology: NodeJS

API Endpoints

POST /contacts: Add a new contact.
GET /contacts: Retrieve all contacts.
PUT /contacts/:id: Update a contact.
DELETE /contacts/:id: Remove a contact.
Error Handling

Field validation for required inputs.
Prevention of duplicate entries.
Appropriate error messages on failure

Installation
Clone the repository:

bash
Copy code
cd contact-management-crm
Setup Backend:

Install dependencies:
bash
Copy code
cd backend
npm install
Configure database: Update database credentials in the .env file.
Run the server:
bash
Copy code
npm start
Setup Frontend:

Navigate to the frontend folder:
bash
Copy code
cd frontend
Install dependencies:
bash
Copy code
npm install
Run the application:
bash
Copy code
npm start


