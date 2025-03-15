import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import Cookie from "js-cookie";
import moment from 'moment';
import { isLogin, getTokenInfo, init } from "lib/util/userInfo";

// const navigate = useNavigate();

const authRefresh = async ( config: InternalAxiosRequestConfig<any> ): Promise<InternalAxiosRequestConfig<any>> => {
    // 로그인 상태 일 경우
    if(isLogin){
        const tokenInfo = getTokenInfo();
        // 리프레시 토큰이 만료된 경우 그냥 로그아웃
        if(tokenInfo.refreshTokenExpiresIn < 0){
            init();
            return config;
        }
        try{

        }catch(e){
            refreshErrorHandler(e);
        }
    }else{
        // 로그인이 안되어 있으면 로그인 페이지로
        // navigate('/signin');
        
    }

    

    return config;
}

const refreshErrorHandler = (err:any) => {
    init();
}


export { authRefresh, refreshErrorHandler };