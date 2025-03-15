import React from 'react';
import { styled } from 'styled-components';
import {  getAuthKakao, test } from 'api/auth/authApi';
const Block = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const KakaoButton = styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
        cursor: pointer;
        &:hover {
            opacity: .7;
        }
    }
`

const SigninContainer = () => {

    const KAKAO_CLIENT_ID ="8b6e7ca05c548b94f01f4ac4bec1f291";
    const KAKAO_REDIRECT_URI = "http://localhost:3001/auth/kakao/callback";
    const KakaoLoginAPI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

    const openKakaoLogin = () => {
        window.open(KakaoLoginAPI, "_self");
    };

    const asdf = async () => {
        const asdf = await test();
        console.log(asdf)
    }
    return (
        <Block>
            <KakaoButton>
                <img src={require('lib/resources/images/kakao_login.png')} onClick={openKakaoLogin}/>
            </KakaoButton>
        </Block>
    );
};

export default SigninContainer;