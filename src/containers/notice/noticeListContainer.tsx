import { useState } from 'react';
import styled from 'styled-components';
import { TColumn, TSampleData } from './notice';
import NoticeTableComponent from 'components/template/table/notice-table';

const Column:TColumn[] = [
    { key: 'no', label: 'No' },
    { key: 'title', label: '제목' },
    { key: 'writer', label: '작성자' },
    { key: 'date', label: '작성일' },
];

interface IProps {
    sampleList: TSampleData[];
};

const NoticeListContainer = (props:IProps) => {
    return (
        <Container>
            <NoticeTableComponent
                list={props.sampleList}
                column={Column}
            />
        </Container>
    );
};

export default NoticeListContainer;

const Container = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

