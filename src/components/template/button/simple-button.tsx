import styled from 'styled-components';

export interface IBorderButtonProps {
  label: string;
  onClick?: () => void;
  color?: string;
  borderColor?: string;
  fontSize?: string;
  bgColor?: string;
}


const StyledButton = styled.button<{$fontSize?:string, $color?:string, $borderColor?:string, $bgColor?:string }>`
  padding: 5px 10px;
  font-size: ${(props) => props.$fontSize || '1rem'};
  color: ${(props) => props.$color || '#333'};
  border: 2px solid ${(props) => props.$borderColor || '#333'};
  border-radius: 8px;
  background-color: ${(props) => props.$bgColor || 'transparent'};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => props.$borderColor || '#333'};
    color: #fff;
  }
  margin: .5rem;
  &:active {
    transform: scale(0.95);
  }

  /* @media (max-width: 1024px) {
    font-size: 1.25rem;
  } */
    @media (max-width: 1024px) {
        font-size: .75rem;
    }
`;

const SimpleButton = ({
    label,
    onClick,
    color,
    borderColor,
    fontSize,
    bgColor,
  } :IBorderButtonProps ) => {
    return (
        <StyledButton
            onClick={onClick}
            $color={color}
            $borderColor={borderColor}
            $fontSize={fontSize}
            $bgColor={bgColor}
        >
        {label}
        </StyledButton>
    );
};

export default SimpleButton;