import React, { useState } from 'react';

const useInput = (): [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  () => void,
] => {
  const [state, setState] = useState('');

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const resetState = () => {
    setState('');
  };
  return [state, handler, resetState];
};

export default useInput;
