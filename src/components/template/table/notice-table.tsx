import { TColumn, TContent } from "containers/notice/notice";
import { useState } from "react";
import styled from "styled-components";

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ddd;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
    background-color: #f4f4f4;
    padding: 12px;
    text-align: left;
    border-bottom: 2px solid #ddd;
    font-weight: bold;
`;

const Td = styled.td`
    padding: 10px;
    border-bottom: 1px solid #ddd;
`;

const Tr = styled.tr`
    &:hover {
        background-color: #f9f9f9;
    }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
    cursor: pointer;
    width: 16px;
    height: 16px;
`;

interface IProps {
    list: TContent[],
    column: TColumn[],
}

const NoticeTableComponent = (props:IProps) => {
    const {list, column} = props;
    const [checkedRows, setCheckedRows] = useState<Set<number>>(new Set());

    const handleCheckRow = (id:number) => {
        console.log(id);
    }

    return (
        <Table>
            <thead>
                <tr>
                    <Th>
                        <Checkbox />
                    </Th>
                    {column.map(item => {
                        return (
                            <Th key={item.key}>{item.label}</Th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {list && list.map((item, idx) => {
                    return (
                        <Tr key={item.id}>
                            <Td>
                                <Checkbox
                                    onChange={() => handleCheckRow(item.id)}
                                />
                            </Td>
                            <Td>{list.length - idx}</Td>
                            <Td>{item.title}</Td>
                            <Td>{item.writer}</Td>
                            <Td>{item.date}</Td>
                        </Tr>
                    )
                })}
            </tbody>
        </Table>
    );
};

export default NoticeTableComponent;