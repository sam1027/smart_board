import { useEffect } from 'react';
import queryString from 'query-string';
import { getAuthKakao } from 'api/auth/authApi';
import { useNavigate } from 'react-router-dom';

import { setUserInfo, setTokenInfo } from 'lib/util/userInfo';

const AuthHandlerKakao = () => {
    const query = queryString.parse(window.location.search);

    useEffect(() => {
        if (query.code) {
            //2.인가코드를 추출할 변수 생성. 현재 url 주소를 가지고 있다. 
            const url = new URL(window.location.href);
            //3.위에서 만든 URL 에서 code=  라고 써진 키값을 찾아서 벨류를 반환받음.
            getKakaoTokenHandler(query.code.toString())
        }
    },[])

    const navigate = useNavigate();
    const getKakaoTokenHandler = async (code:string) => {
        const result = await getAuthKakao(code);
        setTokenInfo(result.token);
        setUserInfo(result.userInfo)
        // 유저 최초 가입 시 이메일을 입력 하는 페이지로 이동
        if(result.userInfo === null){
            navigate(`user/set-info`);
        }else{
            navigate(`/port/list`);
        }   
    }

    return (
        <div>
            
        </div>
    );
};

export default AuthHandlerKakao;