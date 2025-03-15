import { styled, css } from 'styled-components';

const Block = styled.div<{$size?:'small' | 'medium' | 'large', $color?:'success' | 'error' | 'secondary',}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.theme.spaces.spxs};
    width: 90px; 
    height: 35px;
    font-size : ${(props) => props.theme.fontSizes.sm};
    ${(props) => props.$size  === 'small' &&  css`width: 70px; height: 20px;font-size : ${props.theme.fontSizes.xsm};`};
    ${(props) => props.$size  === 'medium' &&  css`width: 90px; height: 30px;font-size : ${props.theme.fontSizes.sm};`};
    ${(props) => props.$size  === 'large' &&  css`width: 120px; height: 40px;font-size : ${props.theme.fontSizes.md};`};
    
    button {
        background-color : ${(props) => props.theme.mode.point.point1};
        ${(props) => props.$color  === 'success' &&  css`background-color : ${props.theme.mode.success}; `};
        ${(props) => props.$color  === 'error' &&  css`background-color : ${props.theme.mode.error}; `};
        ${(props) => props.$color  === 'secondary' &&  css`background-color : ${props.theme.mode.secondary}; `};
        width : 100%;
        height : 100%;
        cursor: pointer;
        border : none;
        color : #fff;
        font-family: "general-m";
        &:hover {
            opacity : .7;
        }
    }
`

interface IProps {
    onClick : () => void,
    size? : 'small' | 'medium' | 'large',
    type? : "submit" | "reset" | "button",
    color? : 'success' | 'error' | 'secondary',
    text : string,
}
const CommonButton = (props:IProps) => {
    return (
        <Block $size={props.size} $color={props.color}>
            <button type={typeof props.type === 'undefined' ? 'button' : props.type} onClick={props.onClick}>{props.text}</button>
        </Block>
    );
};

export default CommonButton;