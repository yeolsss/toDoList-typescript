import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/storeConfig';

export const useCustomDispatch: () => AppDispatch = useDispatch;
