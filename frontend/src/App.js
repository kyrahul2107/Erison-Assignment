import React, { useEffect, useState } from "react";
import { fetchContacts, createContact, updateContact, deleteContact } from "./api";
import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    const getContacts = async () => {
      const { data } = await fetchContacts();
      setContacts(data);
    };
    getContacts();
  }, []);

  const handleSave = async (contact) => {
    if (editingContact) {
      await updateContact(editingContact._id, contact);
    } else {
      await createContact(contact);
    }

    const { data } = await fetchContacts();
    setContacts(data);
    setEditingContact(null); 
  };

  const handleEdit = (contact) => setEditingContact(contact);

  const handleDelete = async (id) => {
    await deleteContact(id);
    setContacts(contacts.filter((contact) => contact._id !== id));
  };

  return (
    <div className="mainBodyClass">
      <h1>Contact Management System</h1>
      <ContactForm onSave={handleSave} editingContact={editingContact} />
      <h1 className="contactListClass">All Contact List</h1>
      <ContactTable contacts={contacts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
