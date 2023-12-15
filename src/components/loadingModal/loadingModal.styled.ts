import { motion } from 'framer-motion';
import styled from 'styled-components';

// 로딩 스피너 스타일 정의
// 모달 배경 스타일 정의
export const ModalBackground = styled.div<{ $IsLoading: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--modalBgColor);
  opacity: ${({ $IsLoading }) => ($IsLoading ? 1 : 0)};
  z-index: ${({ $IsLoading }) => ($IsLoading ? 100 : -1)};
`;
export const LoadingSpinner = styled(motion.div)`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
