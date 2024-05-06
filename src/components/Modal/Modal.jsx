import { useEffect } from 'react';
import { MStyledModal } from './Modal.styled';
import { ReactComponent as ExitIcon } from '../../images/icon/exit.svg';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { animateModal, animateOverlay } from '../../services/animate';

export const Modal = ({ children, openModal }) => {
  const authentication = useSelector(state => state.auth.token);

  useEffect(() => {
    if (authentication) {
      openModal(false);
    }
  }, [authentication, openModal]);

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
  }, [openModal]);

  return (
    <MStyledModal {...animateOverlay} onClick={handleClickModal}>
      <motion.div {...animateModal} className="modal__body">
        <button onClick={() => openModal(false)} className="modal__exit-icon">
          <ExitIcon />
        </button>
        {children}
      </motion.div>
    </MStyledModal>
  );
};
