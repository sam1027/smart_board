import React from 'react';
import { styled, css } from 'styled-components';
import Header from './Header';
import { useMediaQuery } from 'react-responsive';
interface IProps {
    children : React.ReactNode,
}

const Block = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Wrap = styled.div<{$isPc:boolean}>`
    width: 1060px;
    ${(props) => !props.$isPc  &&  css`width:95%;`};
`

const Content = styled.div`
    width: 100%;
    height: calc(100vh - 61px);
`

const DefaultTemplate = ({children}:IProps) => {

    return (
        <Block>
            <Header />
            <Wrap $isPc={useMediaQuery({query : "(min-width:1060px)"})}>
                <Content>
                    {children}
                </Content>
            </Wrap>
        </Block>
    );
};

export default DefaultTemplate;