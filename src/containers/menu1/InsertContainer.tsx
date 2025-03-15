import React from 'react';
import { LabelInput } from 'components/template/textfield';
import { TTableRow } from 'type/menuType';
import { Updater } from 'use-immer';
import { SimpleButton } from 'components/template/button';

interface IProps {
    data : TTableRow,
    setInsertRow : Updater<TTableRow>,
    onSave : () =>void,
}
const InsertContainer = (props:IProps) => {
    return (
        <div>
            <LabelInput 
                label='Idx' 
                value={props.data.rowId} 
                onChange={(e)=>{
                    props.setInsertRow({
                        ...props.data,
                        rowId : e.target.value
                    })
                }} 
                placeholder='Input Group name' 
            />
            <LabelInput 
                label='Name' 
                value={props.data.name} 
                onChange={(e)=>{
                    props.setInsertRow({
                        ...props.data,
                        name : e.target.value
                    })
                }} 
                placeholder='Input Group name' 
            />
            <LabelInput 
                label='Email' 
                value={props.data.email} 
                onChange={(e)=>{
                    props.setInsertRow({
                        ...props.data,
                        email : e.target.value
                    })
                }} 
                placeholder='Input Group name' 
            />
             <LabelInput 
                label='Status' 
                value={props.data.status} 
                onChange={(e)=>{
                    props.setInsertRow({
                        ...props.data,
                        status : e.target.value
                    })
                }} 
                placeholder='Input Group name' 
            />
             <LabelInput 
                label='Action' 
                value={props.data.action_btn} 
                onChange={(e)=>{
                    props.setInsertRow({
                        ...props.data,
                        action_btn : e.target.value
                    })
                }} 
                placeholder='Input Group name' 
            />
            <SimpleButton 
                label='Save' 
                bgColor='#d8d8d8'
                color='#000000'
                onClick={props.onSave}
                />
        </div>
    );
};

export default InsertContainer;