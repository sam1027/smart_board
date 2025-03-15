import { fallBackStorage } from "./storage"; 
import { TToken, TUserInfo } from "type/globalState";

/**
 * 유저 정보 입력
 * @param param 
 */
export const setUserInfo = (param:TUserInfo) => {
    
    fallBackStorage.setItem('userId',param.id);
    if(typeof param.profileImg !== 'undefined') fallBackStorage.setItem('profileImg',param.profileImg);
    if(typeof param.userEmail !== 'undefined') fallBackStorage.setItem('userEmail',param.userEmail);
    if(typeof param.userName !== 'undefined') fallBackStorage.setItem('userName',param.userName);
    if(typeof param.userNickname !== 'undefined') fallBackStorage.setItem('userNickname',param.userNickname);
    fallBackStorage.setItem('isSignin',true);
}

/**
 * 토큰 정보 입력
 */
export const setTokenInfo = (param:TToken) => {
    if(typeof param.accessToken !== 'undefined') fallBackStorage.setItem('accessToken',param.accessToken);
    if(typeof param.expiresIn !== 'undefined') fallBackStorage.setItem('expiresIn',param.expiresIn);
    if(typeof param.refreshToken !== 'undefined') fallBackStorage.setItem('refreshToken',param.refreshToken);
    if(typeof param.refreshTokenExpiresIn !== 'undefined') fallBackStorage.setItem('refreshTokenExpiresIn',param.refreshTokenExpiresIn);
}

/**
 * 유저 정보 조회
 * @returns 
 */
export const getUserInfo = () => {
    const userId = fallBackStorage.getItem('userId');
    const userEmail = fallBackStorage.getItem('userEmail');
    const userName = fallBackStorage.getItem('userName');
    const userNickname = fallBackStorage.getItem('userNickname');

    return {
        userId,userEmail,userName,userNickname
    }
}

/**
 * 토큰 정보 조회
 * @returns 
 */
export const getTokenInfo = () => {
    const accessToken = fallBackStorage.getItem('accessToken');
    const expiresIn = fallBackStorage.getItem('expiresIn');
    const refreshToken = fallBackStorage.getItem('refreshToken');
    const refreshTokenExpiresIn = fallBackStorage.getItem('refreshTokenExpiresIn');
    return {
        accessToken, expiresIn, refreshToken, refreshTokenExpiresIn
    }
}

/**
 * 로그인 여부 확인
 * @returns 
 */
export const isLogin = ():boolean => {
    const isLogin = fallBackStorage.getItem('isSignin');
    if(typeof isLogin === 'undefined'){
        return false
    }
    return fallBackStorage.getItem('isSignin');
}

/**
 * 로그인 정보 초기화
 */
export const init = () => {
    fallBackStorage.removeItem('userId');
    fallBackStorage.removeItem('userEmail');
    fallBackStorage.removeItem('userName');
    fallBackStorage.removeItem('userNickname');
    fallBackStorage.removeItem('accessToken');
    fallBackStorage.removeItem('expiresIn');
    fallBackStorage.removeItem('refreshToken');
    fallBackStorage.removeItem('refreshTokenExpiresIn');
    fallBackStorage.removeItem('isSignin');
}