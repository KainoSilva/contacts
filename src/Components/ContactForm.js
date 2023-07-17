import React from 'react';

const ContactForm = ({ name, username, phone, setName, setUsername, setPhone, saveContact, cancelContact }) => {
  return (
    <div className='contacts-form'>
      <h2>Contact form</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <button className='save-btn' type="button" onClick={saveContact}>Save</button>
        <button className='cancel-btn' type="button" onClick={cancelContact}>Cancel</button>
      </form>
    </div>
  );
};

export default ContactForm;