import {useState} from 'react';

const RegisterFunction = () => {
  const errorState = {error: ''};
  const [error, setError] = useState(errorState);

  const registerButton = () => {
    setError({error: 'error'});
  };

  const handleChange = event => {
    console.log(event);
  };

  const validationInput = event => {
    console.log(event);
  };

  return {
    registerButton,
    error,
    validationInput,
    handleChange,
  };
};

export default RegisterFunction;
