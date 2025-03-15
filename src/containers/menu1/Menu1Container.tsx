import React, { useEffect,useState } from 'react';
import { styled, css } from 'styled-components';
import { DATA, ITableRowData } from './temp';
import { CommonTable } from 'components/template/table';
import { ITableData } from 'components/template/table/common-table';
import { BaseButton, SimpleButton } from 'components/template/button';
import { PopOver } from 'components/template/popup';
import InsertContainer from './InsertContainer';
import { useImmer } from 'use-immer';
import { TTableRow } from 'type/menuType';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`

const ButtonBlock = styled.div`

`

const Menu1Container = () => {
    const [ tableData, setTableData ] = useState<ITableRowData[]>([]);
    const [ isPopOpen, setIsPopOpen ] = useState<boolean>(false);
    const [ insertRow, setInsertRow ] = useImmer<TTableRow>({
        rowId : '',
        name :'',
        email :'',
        status :'',
        action_btn : '',
    })
 

    const handleClick = (row:any) => {
        console.log(row)
    }

    const handleInsertRow = () => {
        setIsPopOpen(true);
    }

    const handleSave = () => {
        setTableData([...tableData, insertRow]);
        setIsPopOpen(false);
    }

    useEffect(() => {
        setTableData(DATA.rows);
    },[])

    useEffect(() =>{
        if(!isPopOpen){
            // 닫히면 초기화
            setInsertRow({
                rowId :'',
                name :'',
                email :'',
                status :'',
                action_btn : '',
            })
        }
    },[isPopOpen])
    return (
        <Wrap>
            <ButtonBlock>
                <BaseButton 
                     label='추가'
                     bgColor='black'
                     txtColor='white'
                     onClick={handleInsertRow}
                />

                <SimpleButton 
                    label='ADD' 
                    bgColor='#d8d8d8'
                    color='#000000'
                    onClick={handleInsertRow}
                 />
            </ButtonBlock>
            {
                tableData && 
                <CommonTable 
                    data={
                        {
                            columns :DATA.columns,
                            rows :tableData
                        }
                    }
                    cellOnClick={handleClick}
                />
            }
            <PopOver
                   isVisible={isPopOpen}
                   onClose={()=>{setIsPopOpen(false)}}
                   hasMaximize
                   hasClose
            >

                {/* 여기서 구현해도 되고 Conatiner로 나누어도되고 */}
                <InsertContainer 
                    data={insertRow}
                    setInsertRow={setInsertRow}
                    onSave={handleSave}
                />
            </PopOver>
        </Wrap>
    );
};

export default Menu1Container;