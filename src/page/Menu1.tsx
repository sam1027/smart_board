import { Helmet } from 'react-helmet-async';
import Menu1Container from 'containers/menu1/Menu1Container';

const Menu1 = () => {
    return (
        <>
            <Helmet>
                <title>메뉴1</title>
            </Helmet>
            <Menu1Container />
        </>
    );
};

export default Menu1;