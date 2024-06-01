import React, { useState } from 'react';
import axios from 'axios';

const PassForm = ({ onPassSubmit }) => {
  const [formData, setFormData] = useState({
    userID: '',
    companyID: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/pass', formData)
      .then((response) => {
        console.log(response.data); // log the response from creating a new pass
        onPassSubmit(formData); // pass the form data to the parent component
        setFormData({ userID: '', companyID: '' }); // clear the form
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-container">
        <label htmlFor="userID">User ID:</label>
        <input
          type="text"
          id="userID"
          name="userID"
          value={formData.userID}
          onChange={handleChange}
          style={{ width: '10%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
      </div>
      <div className="input-container">
        <label htmlFor="companyID">Company ID:</label>
        <input
          type="text"
          id="companyID"
          name="companyID"
          value={formData.companyID}
          onChange={handleChange}
          style={{ width: '10%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
      </div>
      <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}>Create Pass</button>
    </form>    
  );
};

export default PassForm;
