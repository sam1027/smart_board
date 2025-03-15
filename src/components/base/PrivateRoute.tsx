import {Navigate, Outlet} from 'react-router-dom'
// import isLogin from '../../lib/util/isLogin';
import BaseTemplate from 'components/template/BaseTemplate';

const PrivateRoute = () => {
    return (
        true ?  <BaseTemplate > <Outlet /> </BaseTemplate> : <Navigate to='/signin' />

    );
};

export default PrivateRoute;