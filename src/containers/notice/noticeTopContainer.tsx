import styled from "styled-components";

interface ButtonProps {
    danger?: boolean;
}

interface IProps {
    showModalFn: () => void;
};

const NoticeTopContainer = (props:IProps) => {
    return (
        <Container>
            <Button onClick={props.showModalFn}>글쓰기</Button>
            <Button danger={true}>삭제</Button>
        </Container>
    );
};

export default NoticeTopContainer;

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 20px;
`;

const Button = styled.button<ButtonProps>`  // ⬅️ 여기서 제네릭 타입 설정
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    background-color: ${({ danger }) => (danger ? "#dc3545" : "#007bff")};
    color: white;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: ${({ danger }) => (danger ? "#c82333" : "#0056b3")};
    }
`;
