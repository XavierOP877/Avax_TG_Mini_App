import React from 'react';
import InputField from './InputField';

const Form = ({ privateKey, setPrivateKey, amount, setAmount, address, setAddress }) => {
  return (
    <form>
      <InputField
        label="Private Key"
        type="text"
        value={privateKey}
        onChange={(e) => setPrivateKey(e.target.value)}
        placeholder="Enter your private key"
      />

      <InputField
        label="Amount (in AVAX)"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter the amount"
      />

      <InputField
        label="Recipient Address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter recipient address"
      />
    </form>
  );
};

export default Form;
