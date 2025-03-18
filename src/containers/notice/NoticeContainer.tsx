import { useEffect, useState } from "react";
import { TColumn, TContent } from "./notice";
import styled from "styled-components";
import NoticeTableComponent from "components/template/table/notice-table";
import NoticeModalContainer from "./NoticeModalContainer";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteNotice, getList, insertNotice } from "api/notice/noticeApi";
import { isEmpty } from "lodash";

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
    const {data:noticeList, isLoading, error, refetch} = useQuery({
        queryKey: ["noticeList"],
        queryFn: () => getList(),
    });

    const insertMutation = useMutation({
        mutationFn: (params:TContent) => insertNotice(params),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["noticeList"] });
        }
    });

    // 공지사항 저장
    const handleSave = (content:TContent) => {
        insertMutation.mutate(content);
    }

    const [showModal, isShowModal] = useState(false);

    const handleShowModal =() => {
        isShowModal(true);
    };

    const handleCloseModal = () => {
        isShowModal(false);
    };

    // 체크박스 선택
    const [allCheckButton, setAllCheckButton] = useState(false);
    const [checkedRows, setCheckedRows] = useState<Set<number>>(new Set());
    const handleCheckRow = (id:number) => {
        setCheckedRows((prev) => {
            const newSet = new Set(prev);
            if(newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    }
    const handleToggleAllCheck = () => {
        setAllCheckButton(!allCheckButton);
    };
    
    useEffect(() => {
        if(allCheckButton) {
            const allSet:Set<number> = new Set(noticeList.map((item:TContent) => item.id));
            setCheckedRows(allSet);
        }else{
            setCheckedRows(new Set());
        }
    }, [allCheckButton]);

    const deleteMutation = useMutation({
        mutationFn: (ids:string[]) => deleteNotice(ids),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["noticeList"] });
        }
    });

    // 공지사항 삭제
    const handleDelete = () => {
        if(isEmpty(checkedRows)) alert("삭제할 항목을 선택해주세요.");
        deleteMutation.mutate(Array.from(checkedRows).map(String));
    }

    return (
        <>
            {/* 공지목록 상단 */}
            <TopDiv>
                <Button onClick={() => refetch()}>Refresh</Button>
                <Button onClick={handleShowModal}>글쓰기</Button>
                <Button danger={true} onClick={handleDelete}>삭제</Button>
            </TopDiv>

            {/* 공지 목록 */}
            <ListDiv>
                <NoticeTableComponent
                    list={noticeList}
                    column={Column}
                    checkedRows={checkedRows}
                    handleCheckRow={handleCheckRow}
                    handleToggleAllCheck={handleToggleAllCheck}
                />
            </ListDiv>

            {/* 공지 등록/수정 모달 */}
            <NoticeModalContainer
                isOpen={showModal}
                handleCloseModal={handleCloseModal}
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

