import apiClient from "api/apiClient";
import axios from "axios";
import { TContent } from "containers/notice/notice";

export const getList = async () => {
    const data = await apiClient.get(`/notice`);
    return data.data;
}

export const insertNotice = async (params:TContent) => {
    const data = await apiClient.post(`/notice`, params);
    return data.data;
}

export const deleteNotice = async (ids:string[]) => {
    const data = await apiClient.put(`/notice`, ids);
    return data.data;
}