import { styled } from 'styled-components';
import { getUserInfo, getTokenInfo } from 'lib/util/userInfo';

const Block = styled.div`
    height: auto;
`

const PortfolioList = () => {

    const asdf = () => {
        const userInfo = getUserInfo();
        console.log(getTokenInfo());
        
    }
    return (
        <Block>
            <button onClick={asdf}>버튼</button>
        </Block>
    );
};

export default PortfolioList;