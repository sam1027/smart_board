import styled, { keyframes, css } from 'styled-components';

const Block = styled.div`
    width: 100%;
    height: 100%;
    top : 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`

const Container = styled.div`
    position: relative;
    /* width: 50px;
    height: 50px; */
    padding: auto 10px;
    display: grid;
    grid-template-columns: repeat(3, 10px);
    justify-content: center;
    justify-items: center;
    align-items: center;
`

const CircleAnimation = keyframes`
    0% {
        opacity: 0;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        background: #48af5e;
        transform: scale(1.3);
    }
    100% {
        opacity: 0;
        transform: scale(0.4);
    }
`

const CircleCell = styled.div`
    &:nth-child(1){
        animation: ${CircleAnimation} 2s cubic-bezier(0.38, 0.08, 0.25, 1.08) infinite -0.6s;
    }
    &:nth-child(2){
        animation: ${CircleAnimation} 2s cubic-bezier(0.38, 0.08, 0.25, 1.08) infinite -0.3s;
    }
    &:nth-child(3){
        animation: ${CircleAnimation} 2s cubic-bezier(0.38, 0.08, 0.25, 1.08) infinite;
    }
    width: 5px;
    height: 5px;
    background: white;
    border-radius: 50%;
`

interface IProps {
}

const LoadingDot = () => {
    return (
        <Block>
            <Container>
            <CircleCell />
            <CircleCell />
            <CircleCell />
            </Container>
        </Block>
    );
};

export default LoadingDot;

