import React, { useState } from 'react';

const CheckboxForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
    setSubmitted(false); // Reset the submission state when changing options
  };

  const handleSubmit = () => {
    if (selectedOption === 'accept') {
      setSubmitted(true); // Set submitted to true when "Submit" is clicked
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {!submitted ? (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '10px' }}>
              <input
                type="checkbox"
                checked={selectedOption === 'accept'}
                onChange={() => handleCheckboxChange('accept')}
              />
              <label style={{ marginLeft: '10px' }}>I Accept</label>
            </div>

            <div style={{ marginBottom: '10px' }}>
              <input
                type="checkbox"
                checked={selectedOption === 'notAccept'}
                onChange={() => handleCheckboxChange('notAccept')}
              />
              <label style={{ marginLeft: '10px' }}>I Don’t Accept</label>
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <button
              disabled={selectedOption !== 'accept'}
              style={{ cursor: selectedOption === 'accept' ? 'pointer' : 'not-allowed' }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <h2>Welcome to My APP</h2>
        </div>
      )}
    </div>
  );
};

export default CheckboxForm;
