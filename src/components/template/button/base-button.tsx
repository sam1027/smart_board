import { styled, keyframes } from 'styled-components';

const scaleUpAndDown = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05); /* 커지는 상태 */
  }
  100% {
    transform: scale(1); /* 원래 크기로 돌아옴 */
  }
`;

const Button = styled.button<{ $bgColor: string; $txtColor:string }>`
    width: 100%;
    max-width: 200px;
    height: 40px;
    padding: 8px 16px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 8px;
    border: none;
    
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.$txtColor};
    transition: transform 0.2s ease-in-out; /* 부드러운 애니메이션 추가 */

    &:hover {
        animation: ${scaleUpAndDown} 0.3s ease-in-out; /* 애니메이션 적용 */
    }
    
    &:active {
        transform: scale(0.95); /* 원래 상태로 복구 */

    }

    @media (max-width: 1024px) {
        font-size: 1.25rem;
    }
`

interface IProps {
    label:string,
    bgColor :string,
    txtColor :string,
    onClick : () => void,
}
const BaseButton = (props:IProps) => {
    return (
        <Button $bgColor={props.bgColor} $txtColor={props.txtColor} onClick={props.onClick} >{props.label}</Button>
    );
};

export default BaseButton;