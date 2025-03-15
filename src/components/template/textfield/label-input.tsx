import React from 'react';
import styled from 'styled-components';

export interface ILabelInputFieldProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    isPassword?: boolean;
    onKeyDown? : (event: React.KeyboardEvent<HTMLInputElement>) => void;
  }

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: ${(props) => props.theme.mode.pointColor.gray};
    width: 100%;
    justify-content: space-between;
    &:first-child {
        border-bottom: 1px solid  ${(props) => props.theme.mode.backgrounds.background};
    }
`;

const Label = styled.label`
    font-weight: bold;
    font-size: 1rem;
    color: #ffffff;
    white-space: nowrap;
    width : 100px;
`;

const Input = styled.input`
    flex: 1;
    padding: 8px;
    font-size: 1rem;
    color: #333;
    border: none;
    border-radius: 8px;
    background-color:  ${(props) => props.theme.mode.backgrounds.background};
    margin-right: 1rem;
    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;
const LabelInput = ({ label, value, onChange, placeholder,isPassword, onKeyDown } : ILabelInputFieldProps) => {
    return (
        <Container>
            <Label>{label}</Label>
            <Input value={value} onChange={onChange} placeholder={placeholder} type={isPassword && 'password'} onKeyDown={(e) => {onKeyDown && onKeyDown(e)}} />
        </Container>
    );
};

export default LabelInput;