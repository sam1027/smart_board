import React, { useState, ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactDOM from "react-dom";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Popup = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

interface IProps {
    onClose: () => void;
    children: React.ReactNode, // Popup contents can be any React element (like a component, a string, or a fragment)
}
const PopOverTop = (props:IProps) => {


    return ReactDOM.createPortal(
        <Overlay onClick={props.onClose}>
            <Popup onClick={(e) => e.stopPropagation()}>
                {props.children}
            </Popup>
        </Overlay>
        ,
        document.body
    );
};

export default PopOverTop