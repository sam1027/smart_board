import { Helmet } from 'react-helmet-async';

const ErrorRender = () => {
    return (
        <>
            <Helmet>
                <title>DOMM - Error</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <div>
                ERROR
            </div>
        </>
    );
};

export default ErrorRender;