import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(11, 11, 11, 0.6);
  z-index: 5;

  .modal__body {
    position: relative;

    padding: 64px;

    background-color: #fbfbfb;
    border-radius: 30px;

    .modal__exit-icon {
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      top: 20px;
      right: 20px;

      :focus,
      :hover {
        path {
          transition: all 0.3s;
          stroke: #f03f3b;
        }
      }
    }
  }
`;

export const MStyledModal = motion(StyledModal);
