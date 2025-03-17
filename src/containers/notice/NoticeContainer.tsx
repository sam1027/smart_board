import { useState } from "react";
import { TColumn, TContent, TSampleData } from "./notice";
import styled from "styled-components";
import NoticeTableComponent from "components/template/table/notice-table";
import NoticeModalContainer from "./NoticeModalContainer";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getList, insertNotice } from "api/notice/noticeApi";

interface ButtonProps {
    danger?: boolean;
}

const Column:TColumn[] = [
    { key: 'no', label: 'No' },
    { key: 'title', label: '제목' },
    { key: 'writer', label: '작성자' },
    { key: 'date', label: '작성일' },
];

const NoticeContainer = () => {
    const queryClient = useQueryClient();
    const {data:noticeList, isLoading, error} = useQuery({
        queryKey: ["noticeList"],
        queryFn: () => getList(),
    });

    const mutation = useMutation({
        mutationFn: (params:TContent) => insertNotice(params),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["noticeList"] });
        }
    });

    // 공지사항 저장
    const handleSave = (content:TContent) => {
        mutation.mutate(content);
    }

    const [showModal, isShowModal] = useState(false);

    const showModalFn =() => {
        isShowModal(true);
    };

    const closeModalFn = () => {
        isShowModal(false);
    };

    return (
        <>
            {/* 공지목록 상단 */}
            <TopDiv>
                <Button onClick={showModalFn}>글쓰기</Button>
                <Button danger={true}>삭제</Button>
            </TopDiv>

            {/* 공지 목록 */}
            <ListDiv>
                <NoticeTableComponent
                    list={noticeList}
                    column={Column}
                />
            </ListDiv>

            {/* 공지 등록/수정 모달 */}
            <NoticeModalContainer
                isOpen={showModal}
                closeModalFn={closeModalFn}
                save={handleSave}
            />
        </>
    );
};

export default NoticeContainer;

const TopDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 20px;
`;

const Button = styled.button<ButtonProps>`  // ⬅️ 여기서 제네릭 타입 설정
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    background-color: ${({ danger }) => (danger ? "#dc3545" : "#007bff")};
    color: white;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: ${({ danger }) => (danger ? "#c82333" : "#0056b3")};
    }
`;

const ListDiv = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

