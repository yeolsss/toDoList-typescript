import { useState } from 'react';
import { useCustomModal } from './useCustomModal';

export interface IInputParams {
  e: React.ChangeEvent<HTMLInputElement>;
  validDataConfig: {
    maxLength: number;
    message: string;
  };
  inputRef?: React.RefObject<HTMLInputElement>;
}

const useInput = (): [
  string,
  ({ e, validDataConfig }: IInputParams) => Promise<void>,
  () => void,
] => {
  const [state, setState] = useState('');

  const { handleOpenModal } = useCustomModal();

  const handler = async ({ e, validDataConfig, inputRef }: IInputParams) => {
    let text = e.target.value;
    const { maxLength, message } = validDataConfig;

    if (text.length > maxLength) {
      inputRef?.current?.blur();
      await handleOpenModal(message, 'alert');
      setTimeout(() => {
        text = text.slice(0, maxLength);
        inputRef?.current?.focus();
        setState(text);
        return;
      }, 0);
    }
    setState(text);
  };

  const resetState = () => {
    setState('');
  };

  return [state, handler, resetState];
};

export default useInput;
