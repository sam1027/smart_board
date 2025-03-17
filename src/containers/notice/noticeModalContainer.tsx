import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TContent } from "./notice";
import { SubmitHandler, useForm } from "react-hook-form";

interface IProps {
    isOpen: boolean;
    closeModalFn: () => void;
    save: (content:TContent) => void;
};

const NoticeModalContainer = (props:IProps) => {
    const { isOpen, closeModalFn } = props;

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<TContent>();
    
    
    const handleSave:SubmitHandler<TContent> = (data) => {
        console.log(data);
        props.save(data);
        closeModalFn();
    };

    useEffect(() => {
        reset();
    }, [isOpen]);

    if(!isOpen) return null;

    return (
        <Overlay>
            <ModalContainer>
                <h2>공지사항 등록</h2>
                <Form onSubmit={handleSubmit(handleSave)}>
                    <Label>
                        제목:
                        <Input {...register("title", {required: true, maxLength: 100})} />
                        {errors.title && <span>필수 입력 항목입니다.</span>}
                    </Label>
                    <Label>
                        작성자:
                        <Input {...register("writer", {required: true, maxLength: 50})} />
                        {errors.writer && <span>필수 입력 항목입니다.</span>}
                    </Label>
                    <Label>
                        작성일:
                        <Input type="date" {...register("date", {required: true})} />
                        {errors.date && <span>필수 입력 항목입니다.</span>}
                    </Label>
                    <ButtonContainer>
                        <Button type="submit">등록</Button>
                        <Button type="button" onClick={closeModalFn}>취소</Button>
                    </ButtonContainer>
                </Form>
            </ModalContainer>
        </Overlay>
    );
};

export default NoticeModalContainer;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    text-align: left;
    font-weight: bold;
`;

const Input = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 4px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`;

const Button = styled.button`
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    font-size: 14px;
    &:hover {
        background-color: #0056b3;
    }
`;