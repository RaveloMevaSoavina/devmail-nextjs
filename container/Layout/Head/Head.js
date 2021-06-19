import React from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Avatar from '../../../components/UI/Avatar/Avatar'

function Header() {
    return (
        <HeaderContainer>
            <LeftContainer>
                <MenuIcon/>
                <Logo src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="gmail logo"/>
            </LeftContainer>
            <InputSearch placeholder="Rechercher dans les messages"/>
            <RightContainer>
                <HelpOutlineIcon/>
                <SettingsOutlinedIcon/>
                <svg className="gb_Ve" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
                <Avatar src="assets/images/IMG_0387.jpg" alt="avatar"/>
            </RightContainer>
            
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    position: relative;
    width : 100vw;
    padding :8px 0;
    display : flex ;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    border-bottom : 1px solid rgba(0,0,0,0.09);
    svg{
        fill : #0009;
        width : 30px;
        height : 30px;
        margin : 0 5px;
        cursor : pointer;
        padding : 5px;
        &:hover{
            background-color : rgba(0,0,0,0.09);
            border-radius : 100%;
            
        }
    }
`

const LeftContainer = styled.div`
    display : flex ;
    flex-direction : row;
    margin-left : 40px;
    align-items : center;

`

const RightContainer = styled.div`
    display : flex ;
    flex-direction : row;
    margin-right : 20px;
    align-items : center;
    justify-content : space-around;
`

const Logo = styled.img`
    width: 109px;
    height :40px;
    margin-left : 20px;
`

const InputSearch = styled.input`
    width : 568px;
    height : 46px;
    margin :auto;
    border : none;
    padding : 0 10px;
    border-radius : 5px;
    background-color : rgba(0,0,0,0.09);
    outline : none;
`