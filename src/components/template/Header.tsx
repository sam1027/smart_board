import { styled, css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const Block = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: solid 1px ${(props) => props.theme.mode.point.point2} ;
`

const Wrap = styled.div<{$isPc:boolean}>`
    width: 1060px;
    ${(props) => !props.$isPc  &&  css `width:95%;`};
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const ImgBlock = styled.div`

`

const ProfileBlock = styled.div`
   
`

const Avatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color:${(props) => props.theme.mode.point.point2};
    svg {
        color : white;
    }
`

const Header = () => {
    const navigate = useNavigate();

    const handleGoPage =(url : string) => {
        navigate(`/${url}`); 
    }

    return (
        <Block>
            <Wrap $isPc={useMediaQuery({query : "(min-width:1060px)"})}>
                <ImgBlock>
                    <img src={require('lib/resources/images/portli-logo.png')} onClick={()=>{navigate('')}}/>
                </ImgBlock>
                <div>
                    <button onClick={()=>{navigate('menu1')}} >메뉴1</button>
                    <button onClick={()=>{navigate('notice')}} >Notice</button>
                </div>
                <ProfileBlock>
                    <Avatar>
                        {/* <BsPersonFill size={30} /> */}
                        {/* <img src={require('lib/resources/images/avatar.svg')} /> */}
                    </Avatar>
                </ProfileBlock>
            </Wrap>
        </Block>
    );
};

export default Header;