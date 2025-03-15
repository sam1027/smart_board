import { TColumn, TSampleData } from "containers/notice/notice";
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

interface IProps {
    list: TSampleData[],
    column: TColumn[],
}

const NoticeTableComponent = (props:IProps) => {
    const {list, column} = props;

    return (
        <Table>
            <thead>
                <tr>
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