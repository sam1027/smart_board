import { fallBackSessionStorage } from 'lib/util/storage';
import moment from 'moment';
import { ChangeEvent } from "react";


/**
 * 숫자 두자리로
 * @param value 
 * @returns 
 */
export const leftPad = (value:number) =>{
    if (value >= 10) {
        return value;
    }

    return `0${value}`;
}

/**
 * 시간 -> YYYY-MM-DD
 * @param source 
 * @param delimiter 
 * @returns 
 */
export const onToStringByFormatting = (source:Date, delimiter = '-') => {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
}

export const padNumber =(num:number, length:number) => {
    return String(num).padStart(length, '0');
}


export const parseYYYYMMDDToDate = (yyyymmdd:string) => {
    return new Date(moment(yyyymmdd).format('YYYY-MM-DD'));
}

export const formatDateToString = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
    const day = String(date.getDate()).padStart(2, '0'); // 날짜가 한 자릿수일 경우 앞에 0 추가
    return `${year}${month}${day}`;
}

export const getCurrentTimeHHMM = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); // 시: 두 자리 숫자
    return `${hours}00`;
}

export const  containsSubstring = (str:string, substring:string) => {
    const regex = new RegExp(substring);
    return regex.test(str);
}

export const convertDateTime = (date:string, format:string) => {
    if(date === null){
        return null;
    }else{
        const datetime = moment(date);
        return datetime.format(format);
    }
}

export const handleInputChange = (e: ChangeEvent<HTMLInputElement> ) => {
    const inputValue = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(inputValue)) {
        return inputValue
    }
};

export const handleInputStringChange = (value: string) => {
    const inputValue = value;
    // Allow only numbers
    if (/^\d*$/.test(inputValue)) {
        if(inputValue === ''){
            return 0;
        }else{
            return parseInt(inputValue)
        }
    }
};