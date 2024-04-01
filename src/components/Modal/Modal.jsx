import { useEffect } from 'react';
import { StyledModal } from './Modal.styled';
import { ReactComponent as ExitIcon } from '../../images/icon/exit.svg';

export const Modal = ({ children, openModal }) => {
  const handleClickModal = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    openModal(false);
  };

  useEffect(() => {
    const hendleKeydown = function (e) {
      if (e.key === 'Escape') {
        openModal(false);
      }
    };
    document.body.addEventListener('keydown', hendleKeydown);

    return () => document.body.removeEventListener('keydown', hendleKeydown);
  }, []);

  return (
    <StyledModal onClick={handleClickModal}>
      <div className="modal__body">
        <button onClick={() => openModal(false)} className="modal__exit-icon">
          <ExitIcon />
        </button>
        {children}
      </div>
    </StyledModal>
  );
};
