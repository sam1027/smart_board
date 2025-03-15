import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import PrivateRoute from 'components/base/PrivateRoute';
import ErrorRender from 'components/base/ErrorRender';
import { MainPage, Menu1, PortfolioPage } from 'page'; 
import Notice from 'page/Notice';



const Router = () => {
    return (
        <ErrorBoundary fallback= {<ErrorRender/>}>
        <Routes>
            <Route path="/" element={<PrivateRoute/>}>
                <Route path="/" element={<MainPage />}  />
                <Route path="/menu1" element={<Menu1 />}  />
                <Route path="/notice" element={<Notice />}  />
            </Route>
        </Routes>
    </ErrorBoundary>
    );
};

export default Router;