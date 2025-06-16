import React, { useState } from 'react';

const OccppOperations = () => {
  const [formData, setFormData] = useState({
    chargerId: '',
    connectorId: '',
    operation: '',
  });

  const operations = ['Start', 'Stop', 'Reset', 'Unlock'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  const containerStyle = {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom right, #e0f2fe, #dbeafe)',
    padding: '16px',
  };

  const formStyle = {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#fff',
    padding: '32px',
    borderRadius: '24px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#4B5563',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    border: '1px solid #D1D5DB',
    borderRadius: '12px',
    fontSize: '14px',
    outline: 'none',
  };

  const selectStyle = {
    ...inputStyle,
    backgroundColor: '#fff',
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#2563EB',
    color: '#fff',
    fontWeight: '600',
    padding: '12px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ fontSize: '24px', fontWeight: '800', textAlign: 'center', color: '#1F2937' }}>
          Charger Operation
        </h2>

        <div>
          <label style={labelStyle}>Charger ID</label>
          <input
            type="text"
            name="chargerId"
            value={formData.chargerId}
            onChange={handleChange}
            style={inputStyle}
            placeholder="e.g., CHG12345"
            required
          />
        </div>

        <div>
          <label style={labelStyle}>Connector ID</label>
          <input
            type="text"
            name="connectorId"
            value={formData.connectorId}
            onChange={handleChange}
            style={inputStyle}
            placeholder="e.g., CNX67890"
            required
          />
        </div>

        <div>
          <label style={labelStyle}>Operation</label>
          <select
            name="operation"
            value={formData.operation}
            onChange={handleChange}
            style={selectStyle}
            required
          >
            <option value="" disabled>
              Select an operation
            </option>
            {operations.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1D4ED8')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2563EB')}
        >
          Submit Operation
        </button>
      </form>
    </div>
  );
};

export default OccppOperations;
