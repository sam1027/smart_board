import { useState } from "react";
import { TColumn, TContent, TSampleData } from "./notice";
import styled from "styled-components";
import NoticeTableComponent from "components/template/table/notice-table";
import NoticeModalContainer from "./NoticeModalContainer";

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
    const [showModal, isShowModal] = useState(false);
    const [sampleList, setSampleList] = useState<TSampleData[]>([
        {
            id: 1,
            title: '공지1',
            writer: '유성은',
            date: '2022-01-01',
        },
        {
            id: 2,
            title: '공지2',
            writer: '김종원',
            date: '2022-01-02',
        },
    ]);

    const showModalFn =() => {
        isShowModal(true);
    };

    const closeModalFn = () => {
        isShowModal(false);
    };

    const save = (content:TContent) => {
        const newNotice = {...content, id: sampleList.length + 1};
        setSampleList([...sampleList, newNotice]);
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
                    list={sampleList}
                    column={Column}
                />
            </ListDiv>

            {/* 공지 등록/수정 모달 */}
            <NoticeModalContainer
                isOpen={showModal}
                closeModalFn={closeModalFn}
                save={save}
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

