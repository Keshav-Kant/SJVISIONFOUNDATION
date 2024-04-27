import React, { useState, useEffect } from 'react';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let timer;
    if (otpSent) {
      // Start countdown timer
      setCountdown(10);
      timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [otpSent]);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    // Check if OTP has already been sent
    if (!otpSent) {
      // Send OTP logic here (can be an API call)
      // For demo purposes, let's just set otpSent to true
      setOtpSent(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Verify OTP logic here (can be an API call)
    // For demo purposes, let's just compare the OTP entered with a hardcoded value
    const correctOtp = '123456'; // Example OTP, replace with your logic
    if (otp === correctOtp) {
      setIsAuthenticated(true);
      console.log('User logged in successfully!');
    } else {
      console.log('Incorrect OTP!');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={otpSent ? handleLogin : handleSendOtp}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter phone number"
            style={styles.input}
          />
          {otpSent ? (
            <div style={styles.countdown}>{countdown} sec</div>
          ) : (
            <div
              style={styles.sendOtpButton}
              onClick={handleSendOtp}
            >
              Send OTP
            </div>
          )}
        </div>
          <div style={{ marginBottom: 15 }}>
            <label style={styles.label}>OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              placeholder="Enter OTP"
              style={styles.input}
            />
          </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
      {isAuthenticated && (
        <div style={styles.successMessage}>User logged in successfully!</div>
      )}
    </div>
  );
}

export default Login;

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
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
  sendOtpButton: {
    textAlign: 'right',
    color: 'rgb(3, 192, 180)',
    cursor: 'pointer',
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
  countdown: {
    marginTop: '10px',
    textAlign: 'right',
    color: 'rgb(3, 192, 180)',
  },
};
