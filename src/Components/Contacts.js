import React, { useState, useEffect } from 'react';
import ContactsTable from './ContactTable';
import ContactForm from './ContactForm';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setContacts(data);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const saveContact = () => {
    const newContact = {
      id: contacts.length + 1,
      name: name,
      username: username,
      phone: phone
    };

    setContacts([...contacts, newContact]);
    setName('');
    setUsername('');
    setPhone('');
    setShowForm(false);
  };

  const cancelContact = () => {
    setName('');
    setUsername('');
    setPhone('');
    setShowForm(false);
  };

  return (
    <div className='contacts-container'>
      <h1 className='contacts-header'>Contacts List</h1>
      <ContactsTable contacts={contacts} deleteContact={deleteContact} />

      {showForm ? (
        <ContactForm
          name={name}
          username={username}
          phone={phone}
          setName={setName}
          setUsername={setUsername}
          setPhone={setPhone}
          saveContact={saveContact}
          cancelContact={cancelContact}
        />
      ) : (
        <button onClick={() => setShowForm(true)}>Add contact</button>
      )}
    </div>
  );
};

export default Contacts;