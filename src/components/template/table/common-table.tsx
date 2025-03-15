import React from 'react';
import { styled, css } from 'styled-components';
// import { containsSubstring } from 'lib/util/commonUtil';
import { containsSubstring } from 'lib/util/commonUtil';

const TableContainer = styled.div<{$hasScroll?:boolean}>`
    border: 2px solid  ${(props) => props.theme.mode.pointColor.gray};
    border-radius: 8px;
    overflow: hidden;
    width: 95%;
    margin: 1rem;
    /* margin: 1rem auto; */
    ${(props) =>props.$hasScroll && css `
      max-height: 700px; /* 스크롤 생성 조건 */
      overflow-y: auto; /* 세로 스크롤 */
    `}

`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: ${(props) => props.theme.mode.pointColor.gray};
  padding: 10px;
  font-weight: bold;
  border: 1px solid ${(props) => props.theme.mode.pointColor.gray};
  text-align: center;
  color: ${(props) => props.theme.mode.fonts.font1};
  border-right: 1px solid white; /* 헤더의 세로 보더를 흰색으로 설정 */
  &:last-child {
    border-right: none; /* 마지막 헤더는 보더 제거 */
  }
`;

const TableRow = styled.tr`
   cursor: pointer;
   &:hover {
    background-color:  ${(props) => props.theme.mode.pointColor.gray};
    opacity: .8;
    color: ${(props) => props.theme.mode.fonts.font1};
   }
`;

const TableCell = styled.td<{ hasData: boolean }>`
  padding: 10px;
  border: ${(props) => props.theme.mode.pointColor.gray};
  text-align: center;
`;


// 개별 행 데이터의 인터페이스
export interface ITableRowData {
    rowId:string;
    [key: string]: any; // 동적 키를 지원 (예: name, email, 등)
}

export interface ITableData {
    columns: { key: string; label: string }[]; // 각 컬럼의 키와 레이블 정의
    rows: any[]; // 행 데이터 배열
  }

// 테이블 컴포넌트의 props 인터페이스
interface IProps {
  data: {
    columns: { key: string; label: string }[]; // 각 컬럼의 키와 레이블 정의
    rows: any[]; // 행 데이터 배열
  },
  rowOnClick?: (id: any) => void; 
  cellOnClick?: (id: string) => void;
  hasScroll? :boolean,
}

const CommonTable = (props: IProps) => {
  const { columns, rows } = props.data;

  return (
    <TableContainer $hasScroll={props.hasScroll}>
      <Table>
        <thead>
          <tr>
            {columns.map((col) => (
              <TableHeader key={col.key}>{col.label}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex} onClick={()=>{
                if(typeof props.rowOnClick !== 'undefined'){
                    props.rowOnClick(row)
                }
                }}>
              {columns.map((col) => (
                <TableCell key={col.key} hasData={!!row[col.key]} onClick={(e) => {
                    if(containsSubstring(col.key,'btn') && typeof props.cellOnClick !== 'undefined'){
                        e.stopPropagation();
                        props.cellOnClick(row);
                    }
                }}>
                  {row[col.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default CommonTable;
