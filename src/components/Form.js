import React from 'react';
import Button from './Button';
import './Form.css';
import Input from './Input';

const Form = ({ handleSubmit }) => {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <Input placeholder='City' name='city' />
      <Input placeholder='Country' name='country' />
      <Button>Show</Button>
    </form>
  );
};

export default Form;
