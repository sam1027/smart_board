import {Routes, Route} from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { PortfolioListContainer } from "containers/portfolio";

const PortfolioList = () => {
    return (
        <>
            <Helmet>
                <title>Portli | Sigin In</title>
            </Helmet>
            <PortfolioListContainer />
        </>
    )
}

const PortfolioPage = () => {
    return (
        <Routes>
            <Route path="/list" element={<PortfolioList/>} />
        </Routes>
    );
};

export default PortfolioPage;