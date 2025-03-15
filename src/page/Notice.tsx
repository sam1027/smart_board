import { TContent, TSampleData } from "containers/notice/notice";
import NoticeListContaienr from "containers/notice/noticeListContainer";
import NoticeModalContainer from "containers/notice/noticeModalContainer";
import NoticeTopContainer from "containers/notice/noticeTopContainer";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const Notice = () => {
    const [showModal, isShowModal] = useState(false);
    const [sampleList, setSampleList] = useState<TSampleData[]>([
        {
            id: 1,
            title: '공지1',
            writer: '유성은',
            date: '2022-01-01',
        },
        {
            id: 2,
            title: '공지2',
            writer: '김종원',
            date: '2022-01-02',
        },
    ]);

    const showModalFn =() => {
        isShowModal(true);
    };

    const closeModalFn = () => {
        isShowModal(false);
    };

    const save = (content:TContent) => {
        const newNotice = {...content, id: sampleList.length + 1};
        setSampleList([...sampleList, newNotice]);
    };

    return (
        <>
            <Helmet>
                <title>공지 | Portli</title>
            </Helmet>

            {/* 공지목록 상단 */}
            <NoticeTopContainer 
                showModalFn={showModalFn}
            />

            {/* 공지 목록 */}
            <NoticeListContaienr 
                sampleList={sampleList}
            />

            {/* 공지 등록/수정 모달 */}
            <NoticeModalContainer 
                isOpen={showModal}
                closeModalFn={closeModalFn}
                save={save}
            />
        </>
    );
};

export default Notice;