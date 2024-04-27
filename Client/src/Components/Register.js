import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    // Send OTP logic here (can be an API call)
    // For demo purposes, let's just set otpSent to true
    setOtpSent(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Verify OTP logic here (can be an API call)
    // For demo purposes, let's just compare the OTP entered with a hardcoded value
    const correctOtp = '123456'; // Example OTP, replace with your logic
    if (otp === correctOtp) {
      // Register user logic here (can be an API call)
      // For demo purposes, let's just set isRegistered to true
      setIsRegistered(true);
      console.log('User registered successfully!');
    } else {
      console.log('Incorrect OTP!');
    }
  };

  return (
    <div style={styles.container}>
      {!isRegistered ? (
        <div>
          <form onSubmit={handleSendOtp}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Name:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
                style={styles.input}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Phone Number:</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter your phone number"
                style={styles.input}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email (optional):</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>Send OTP</button>
          </form>
          {otpSent && (
            <form onSubmit={handleRegister}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>OTP:</label>
                <input
                  type="text"
                  value={otp}
                  onChange={handleOtpChange}
                  placeholder="Enter OTP"
                  style={styles.input}
                  required
                />
              </div>
              <button type="submit" style={styles.button}>Register</button>
            </form>
          )}
        </div>
      ) : (
        <div style={styles.successMessage}>User registered successfully!</div>
      )}
    </div>
  );
}

export default Register;

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    
    borderRadius: '8px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: 'rgb(3, 192, 180)',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid rgb(3, 192, 180)',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'rgb(3, 192, 180)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  successMessage: {
    backgroundColor: 'rgb(3, 192, 180)',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
  },
};
