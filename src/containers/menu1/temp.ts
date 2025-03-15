export const DATA = {
    "columns": [
      { "key": "rowId", "label": "ID" },
      { "key": "name", "label": "이름" },
      { "key": "email", "label": "이메일" },
      { "key": "status", "label": "상태" },
      { "key": "action_btn", "label": "액션" }
    ],
    "rows": [
      { "rowId": "1", "name": "김철수", "email": "chulsoo@example.com", "status": "Active", "action_btn": "Edit" },
      { "rowId": "2", "name": "이영희", "email": "younghee@example.com", "status": "Inactive", "action_btn": "Edit" },
      { "rowId": "3", "name": "박지성", "email": "jisung@example.com", "status": "Pending", "action_btn": "Edit" },
      { "rowId": "4", "name": "손흥민", "email": "heungmin@example.com", "status": "Active", "action_btn": "Edit" },
      { "rowId": "5", "name": "정우성", "email": "woosung@example.com", "status": "Banned", "action_btn": "Edit" }
    ]
}

export interface ITableColumn {
    key: string;  // 데이터 키
    label: string; // 테이블 헤더에 표시될 이름
}

// 행 데이터 타입
export interface ITableRowData {
    rowId: string;  // 각 행의 고유 ID
    [key: string]: any; // 동적 키 지원 (name, email 등)
}

// 전체 테이블 데이터 타입
export interface ITableData {
    columns: ITableColumn[]; // 컬럼 리스트
    rows: ITableRowData[]; // 행 리스트
}