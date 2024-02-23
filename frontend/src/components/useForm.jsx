import { useState } from 'react';
import axios from 'axios';

function useForm(endpoint) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(endpoint, { data: inputValue }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Response:', response);
      setInputValue('');
      setError('');
      setIsLoading(false);
      return response;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else if (error.request) {
        setError('Network Error: Unable to reach the server.');
      } else {
        setError('An error occurred. Please try again later.');
      }
      console.error('Error:', error);
      setIsLoading(false);
      return null; // エラーの場合はnullを返す
    }
  };
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return {
    inputValue,
    error,
    isLoading,
    handleSubmit,
    handleInputChange,
  };
}

export default useForm;
