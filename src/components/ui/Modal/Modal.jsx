import React from 'react';
import ReactDOM from 'react-dom';

import { Box } from '@mui/material';

import style from './style';

const ModalBackdrop = (props) => {
  return (
    <Box component='div' sx={style.backdrop} onClick={props.onClick}></Box>
  );
};

const ModalWindow = (props) => {
  return (
    <Box component='aside' sx={style.window}>
      {props.children}
    </Box>
  );
};

const portalToElement = document.getElementById('modal-root');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop onClick={props.onBackdropClick} />,
        portalToElement
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalToElement
      )}
    </>
  );
};

export default Modal;
