import {create} from "zustand";
import { persist } from 'zustand/middleware';
import { TTheme,  } from "type/globalState";

interface IThemeState {
    mode : TTheme,
    setMode : (param:TTheme) => void,
}

/**
 * 테마 관련 store
 */
export const useThemeStore = create<IThemeState>()(
    persist(
        (set,get) => ({
            mode : 'light',
            setMode : (param:TTheme) => set((state) => ({mode : param}))
        }),
        {
            name : 'mode-storage',
        }
    )
)

type TToken = {
    accessToken : string,
    expiresIn:number, 
    refreshToken : string,
    refreshTokenExpiresIn : number,
}

type TUserInfo = {
    id : number,
    profileImg : string,
    userEmail : string,
    userName : string,
    userNickname : string,
}

interface IUserInfoState {
    token : TToken,
    userInfo : TUserInfo,
    isLogin : boolean,
    setToken : (token : TToken ) => void,
    setUserInfo : (userInfo:TUserInfo) => void,
    init : () => void,
}

export const useUserInfoStore = create<IUserInfoState>()(
    persist(
        (set,get) => ({
            token : {
                accessToken : '',
                expiresIn:0, 
                refreshToken : '',
                refreshTokenExpiresIn : 0,
            },
            userInfo : {
                id : 0,
                profileImg : '',
                userEmail : '',
                userName : '',
                userNickname : '',
            },
            isLogin : false,
            setToken : (token) => set((state) => ({token : token})),
            setUserInfo : (userInfo) => set((state) => ({userInfo : userInfo, isLogin : true})),
            init : () => set((state) => ({
                token : {
                    accessToken : '',
                    expiresIn:0, 
                    refreshToken : '',
                    refreshTokenExpiresIn : 0,
                },
                userInfo : {
                    id : 0,
                    profileImg : '',
                    userEmail : '',
                    userName : '',
                    userNickname : '',
                },
                isLogin : false,
            }))
        }),
        {
            name : 'user-info-storage',
        }
    )
)