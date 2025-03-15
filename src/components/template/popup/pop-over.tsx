import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

let highestZIndex = 1000; // z-index 관리 변수

const PopupContainer = styled.div<{ $isVisible: boolean; $isMaximized: boolean; $zIndex: number }>`
    display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
    position: fixed;
    top: ${(props) => (props.$isMaximized ? '0' : '50%')};
    left: ${(props) => (props.$isMaximized ? '0' : '50%')};
    width: ${(props) => (props.$isMaximized ? '100%' : 'auto')};
    height: ${(props) => (props.$isMaximized ? '100%' : 'auto')};
    max-height: ${(props) => (props.$isMaximized ? '100%' : '90vh')};
    transform: ${(props) => (props.$isMaximized ? 'translate(0%, 0%)' : 'translate(-50%, -50%)')};
    background-color: white;
    box-shadow: ${(props) => (props.$isMaximized ? 'none' : '0 4px 8px rgba(0, 0, 0, 0.1)')};
    border-radius: 10px;
    z-index: ${(props) => props.$zIndex}; /* 동적으로 변경되는 z-index */
    overflow-y: auto;
    .content-popup {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const Overlay = styled.div<{ $isVisible: boolean; $zIndex: number }>`
    display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(213, 213, 213, 0.5);
    z-index: ${(props) => props.$zIndex - 1}; /* 팝업보다 한 단계 아래 */
`;

const ButtonBarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    padding: 4px;
    background-color: #f3f3f3;
    border-bottom: 1px solid #ccc;
    position: sticky;
    top: 0;
    z-index: 2;
`;

const Button = styled.button<{ bgColor?: string }>`
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.bgColor || '#e0e0e0'};
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    &:hover {
        background-color: ${(props) => props.bgColor || '#d6d6d6'};
    }
    &:active {
        background-color: ${(props) => props.bgColor || '#c2c2c2'};
    }
`;

const MinimizeButton = styled(Button)`
    &::after {
        content: '-';
        display: block;
        font-size: 18px;
        line-height: 18px;
    }
`;

const MaximizeButton = styled(Button)<{ $isMaximized: boolean }>`
    &::after {
        content: '${(props) => (props.$isMaximized ? "⬜" : "🔲")}';
        display: block;
        font-size: 12px;
        line-height: 12px;
    }
`;

const CloseButton = styled(Button)`
    background-color: #f44336;
    color: white;
    &:hover {
        background-color: #e53935;
    }
    &:active {
        background-color: #d32f2f;
    }
    &::after {
        content: '×';
        display: block;
        font-size: 16px;
        line-height: 16px;
    }
`;

interface IProps {
    isVisible: boolean;
    hasClose: boolean;
    hasMinimize?: boolean;
    hasMaximize?: boolean;
    onMinimize?: () => void;
    onClose: () => void;
    children: React.ReactNode;
}

const PopOver = (props: IProps) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const [zIndex, setZIndex] = useState(highestZIndex); // 개별 팝업의 z-index

    useEffect(() => {
        if (props.isVisible) {
            highestZIndex += 1; // 새로운 팝업이 열릴 때 z-index 증가
            setZIndex(highestZIndex);
        }
    }, [props.isVisible]);

    const toggleMaximize = () => {
        setIsMaximized((prev) => !prev);
    };

    return (
        <>
            <Overlay $isVisible={props.isVisible} $zIndex={zIndex} onClick={props.onClose} />
            <PopupContainer $isVisible={props.isVisible} $isMaximized={isMaximized} $zIndex={zIndex}>
                <ButtonBarContainer>
                    {props.hasMinimize && <MinimizeButton onClick={props.onMinimize} />}
                    {props.hasMaximize && <MaximizeButton $isMaximized={isMaximized} onClick={toggleMaximize} />}
                    {props.hasClose && <CloseButton onClick={props.onClose} />}
                </ButtonBarContainer>
                <div className="content-popup">{props.children}</div>
            </PopupContainer>
        </>
    );
};

export default PopOver;
