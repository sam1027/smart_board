import {Routes, Route} from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { SigninContainer} from "containers/auth/index";

const Siginin = () => {
    return (
        <>
            <Helmet>
                <title>Portli | Sigin In</title>
            </Helmet>
            <SigninContainer />
        </>
    )
}



const AuthPage = () => {
    return (
        <Routes>
            <Route path="/" element={<Siginin/>} />
        </Routes>
    );
};

export default AuthPage;