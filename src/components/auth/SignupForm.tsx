import { styled } from 'styled-components';
import { useForm } from "react-hook-form";
import { CommonButton } from 'components/base/button';
import { useNavigate } from 'react-router-dom';

const Block = styled.div`
    width: 100%;
    height: 100%;
    top : 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`

    position: relative;
    width: 300px;

    input {
        font-size: 15px;
        font-family: "general-m";
        color: #222222;
        width: 300px;
        border: none;
        border-bottom: solid #aaaaaa 1px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-top : 10px;
        position: relative;
        background: none;
        z-index: 5;

        &::placeholder { color: #aaaaaa; }
        &:focus{ outline: none; }

        &:focus ~ label, &:valid ~ label {
            font-size: 16px;
            bottom: 40px;
            color: #666;
            font-weight: bold;
        }

        &:focus ~ span, &:valid ~ span {
            width: 100%;
        }
    }

    span {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0%;  /* right로만 바꿔주면 오 - 왼 */
        /* background-color: #666; */
        width: 0;
        height: 2px;
        border-radius: 2px;
        transition: 0.5s;
    }

    label {
        font-family: "general-m";
        position: absolute;
        color: #aaa;
        left: 10px;
        font-size: 20px;
        bottom: 8px;
        transition: all .2s;
    }
`;

const ButtonBlock = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    button {
        width: 80px;
        height: 23px;
        &:first-child {
            margin-right: ${(props) => props.theme.spaces.spxs};
        }
    }
`

const ErrorBlock = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    span{
        font-size: ${(props) => props.theme.fontSizes.sm};
        color : ${(props) => props.theme.mode.error};
    }
`

const SignupForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => {
    };

    const onCancel = () => {
        navigate(`/port/list`);
    }
    return (
        <Block>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <div>
                    <span>Please Input your E-mail</span>
                </div> */}
                <Container>
                    <input placeholder='user@example.com' {...register('email',{pattern:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/})}/>
                    <label>E-mail</label>
                    <span></span>
                </Container>
                <ErrorBlock>
                    {errors.email && <span>Please format your email correctly</span>}
                </ErrorBlock>
                <ButtonBlock>
                    <CommonButton text='Save' onClick={()=>{}} size='medium' type='submit'  />
                    <CommonButton text='Cancel' onClick={onCancel} size='medium' color='error' />
                </ButtonBlock>
                
            </form>
        </Block>
    );
};

export default SignupForm;