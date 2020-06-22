import {useState} from 'react';

const LoginFunction = () => {
  const errorState = {error: 'lorem'};
  const [error, setError] = useState(errorState);

  const handleChange = event => {};
  
  return {
    handleChange,
    error,
  };
};

export default LoginFunction;
