import apiClient from "api/apiClient";
import axios from "axios";


export const getKakaoToken = async (param:string) => {
    const data = axios.post('https://kauth.kakao.com/oauth/token', param,{
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    })
    return data
}

export const getAuthKakao = async (code:string) => {
    const data = await apiClient.get(`/auth/kakao?code=${code}`);
    return data.data;
}


export const test = async () => {
    const data = await apiClient.get(`/auth/test`);
    return data.data;
}


export const test2 = async (page:number) => {
    const data = await apiClient.get(`/medic/medic-list`,{params : {row : 10, page:page}});
    return data.data;
}

export const test3 = async (page:number) => {
    const data = await apiClient.post(`/medic/medic-list`,{test:page});
    return data.data;
}