import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PassList = ({ onDeletePass }) => {
  const [passes, setPasses] = useState([]);

  useEffect(() => {
    // fetch passes from backend when component mounts
    axios.get('http://localhost:5000/api/pass')
      .then((response) => {
        setPasses(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); // empty dependency array to ensure effect runs only once

  const handleDeletePass = (passId) => {
    // make DELETE request to backend to delete pass
    axios.delete(`http://localhost:5000/api/pass/${passId}`)
      .then((response) => {
        // remove deleted pass from state
        setPasses(passes.filter(pass => pass._id !== passId));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      {passes.map((pass, index) => (
        <div key={pass._id} className="pass-box">
          <button className="delete-btn" onClick={() => handleDeletePass(pass._id)} style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}>Delete</button>
          <h2>Submitted Pass {index + 1}:</h2>
          <p>User ID: {pass.userID}</p>
          <p>Company ID: {pass.companyID}</p>
        </div>
      ))}
    </div>
  );
};

export default PassList;