import NoticeContainer from "containers/notice/NoticeContainer";
import { Helmet } from "react-helmet-async";


const Notice = () => {
    return (
        <>
            <Helmet>
                <title>공지 | Portli</title>
            </Helmet>

            <NoticeContainer />
        </>
    );
};

export default Notice;