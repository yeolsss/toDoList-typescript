import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  bgColor: '#2f3640',
  cardColor: '#353b48',
  textColor: '#dcdde1',
  borderColor: 'rgba(220, 221, 225, 0.5)', // 0.5 is the opacity
  cancelColor: '#b33939',
  doneColor: '#00b894',
};

export const lightTheme: DefaultTheme = {
  bgColor: '#dcdde1',
  cardColor: '#f5f6fa',
  textColor: '#2f3640',
  borderColor: 'rgba(45, 52, 54, 0.5)', // 0.5 is the opacity
  cancelColor: '#ffb8b8',
  doneColor: '#55efc4',
};
