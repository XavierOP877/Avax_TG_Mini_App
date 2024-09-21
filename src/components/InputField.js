import React from 'react';
import { FormGroup, Label, Input } from '../styles/GlobalStyle';

const InputField = ({ label, type, value, onChange, placeholder }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </FormGroup>
  );
};

export default InputField;
