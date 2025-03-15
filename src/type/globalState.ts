export type TTheme = 'light' | 'dark';

export type TToken = {
    accessToken? : string,
    expiresIn?:number, 
    refreshToken? : string,
    refreshTokenExpiresIn? : number,
}

export type TUserInfo = {
    id : number,
    profileImg? : string,
    userEmail? : string,
    userName? : string,
    userNickname? : string,
}
