import { LogIn } from 'components/Modal/Modals/LogIn/LogIn';
import { Modal } from 'components/Modal/Modal';
import { Registration } from 'components/Modal/Modals/Registration/Registration';
import React from 'react';

export const Modals = ({
  openModalLogIn,
  setOpenModalLogIn,
  openModalRegistration,
  setOpenModalRegistration,
}) => {
  return (
    <>
      {openModalLogIn && (
        <Modal openModal={setOpenModalLogIn}>
          <LogIn />
        </Modal>
      )}

      {openModalRegistration && (
        <Modal openModal={setOpenModalRegistration}>
          <Registration />
        </Modal>
      )}
    </>
  );
};
