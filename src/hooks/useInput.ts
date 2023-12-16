import { useState } from 'react';
import { useCustomModal } from './useCustomModal';

export interface IInputParams {
  e: React.ChangeEvent<HTMLInputElement>;
  validDataConfig: {
    maxLength: number;
    message: string;
  };
}

const useInput = (): [
  string,
  ({ e, validDataConfig }: IInputParams) => Promise<void>,
  () => void,
] => {
  const [state, setState] = useState('');

  const { handleOpenModal } = useCustomModal();

  async function truncateText(
    text: string,
    maxLength: number,
    message: string,
  ): Promise<string> {
    if (text.length > maxLength) {
      await handleOpenModal(message, 'alert');
      return text.substring(0, maxLength);
    }
    return text;
  }

  const handler = async ({ e, validDataConfig }: IInputParams) => {
    setState(
      await truncateText(
        e.target.value,
        validDataConfig.maxLength,
        validDataConfig.message,
      ),
    );
  };

  const resetState = () => {
    setState('');
  };
  return [state, handler, resetState];
};

export default useInput;
