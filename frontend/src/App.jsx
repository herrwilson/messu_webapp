import React, { useState } from 'react';
import PassForm from './components/passForm';
import PassList from './components/passList';

const App = () => {
  // state to store submitted passes
  const [submittedPasses, setSubmittedPasses] = useState([]);

  // function to handle pass submission
  const handlePassSubmit = (formData) => {
    setSubmittedPasses([...submittedPasses, formData]);
  };

  // function to handle pass deletion
  const handleDeletePass = (index) => {
    const updatedPasses = submittedPasses.filter((pass, i) => i !== index);
    setSubmittedPasses(updatedPasses);
  };

  // render PassForm and PassList components
  return (
    <div>
      <PassForm onPassSubmit={(formData) => {
        handlePassSubmit(formData);
      }} />
      <PassList passes={submittedPasses} onDeletePass={handleDeletePass} />
    </div>
  );
};

export default App;