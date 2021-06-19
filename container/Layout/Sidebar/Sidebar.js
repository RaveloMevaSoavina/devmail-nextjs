import React , {useState} from 'react'
import styled from 'styled-components';
import {navigation, meet} from './SideMenuItems'
import Avatar from '../../../components/UI/Avatar/Avatar'
import AddIcon from '@material-ui/icons/Add';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';



const NavigationItems = ({ id , label , Icon, badge, appendAllItems , srinkItems}) => {


    const handleClick = (id) => {
        console.log(id)
        if(id === 6){
            appendAllItems()
        }else if (id === 7){
            srinkItems()
        }
    }

    return(
        <ItemContainer id={id} onClick={()=>handleClick(id)}>
            <IconContainer>
            {Icon}
            </IconContainer>
            <Label id={id}>{label}</Label>
            <Badge id={id}>{badge}</Badge>
        </ItemContainer>
    )
}

function Sidebar() {
    const [allItems ,] = useState(navigation);
    const [allMeet ,] = useState(meet);

    const appendAllItems = () => {
        console.log(allItems.filter(item => item.id !== 6))
    }
    const srinkItems = () => {
        console.log(allItems.filter(item => item.id < 7))
    }


    return (
        <SidebarContainer>
            <NewMessage>
                <button>
                    <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" alt="icon plus"/>
                    <div>Nouveau message</div>
                </button>
            </NewMessage>
            <GeneralNavigation>
                {allItems?.map(item => 
                <NavigationItems 
                    id={item.id} 
                    appendAllItems={appendAllItems} 
                    srinkItems={srinkItems} 
                    key={item.label} 
                    label={item.label} 
                    Icon={item.Icon} 
                    badge={item.badge}
                />)}
            </GeneralNavigation>
            <Meet>
                <h3>Meet</h3>
                {allMeet?.map(item => 
                <NavigationItems 
                    key={item.label} 
                    label={item.label} 
                    Icon={item.Icon} 
                    badge={item.badge}
                />)}
            </Meet>
            <Hangouts>
                    <h3>Hangouts</h3>
                    <div>
                        <span>
                            <Avatar src="assets/images/IMG_0387.jpg" alt="avatar"/>
                            <p>RAVELO</p>
                        </span>
                        <AddIcon/>
                    </div>
            </Hangouts>
            <Libre>
                <p>Pas de chat récent</p>
                <a href="e">Demarrer un nouveau chat</a>
            </Libre>
            <Footer>
                <button>
                    <PersonIcon/>
                </button>
                <button>
                    <div></div>
                </button>
                <button>
                    <PhoneIcon/>
                </button>
            </Footer>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    width : 256px;
    display : flex;
    flex-direction : column;
`
const NewMessage = styled.div`
    width : 100%;
    margin-top : 20px;

    button{
        cursor : pointer;
        border : none;
        margin-left : 20px;
        padding :5px 20px;
        border-radius : 50px;
        background-color : #FFF;
        display : flex;
        flex-direction : row;
        align-items : center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        div{
            margin-left : 10px;
        }
    }
`

const GeneralNavigation = styled.div`
    display : flex;
    flex-direction : column;
    margin-top : 20px;
    height : 200px;
    overflow-y : hidden;
    border-bottom : 1px solid rgba(0,0,0,0.09);
    padding-right : 10px;

`
const Meet = styled.div`
border-bottom : 1px solid rgba(0,0,0,0.09);
h3{
    font-size : 15px;
    margin : 15px 20px;
}
padding-bottom : 10px;
`
const Hangouts= styled.div`
h3{
    font-size : 15px;
    margin : 15px 20px;
}
div{
    display : flex;
    justify-content : space-between;
    margin : 0 20px;
    padding-bottom : 10px;
    align-items : center;
    border-bottom : 1px solid rgba(0,0,0,0.09);
    svg{
        fill : rgba(0,0,0,0.6);
        width : 20px;
        height :20px;
        cursor : pointer;
        padding : 5px;
        &:hover{
            background-color : rgba(0,0,0,0.09);
            border-radius : 100%;
            
        }
    }
    span{
        display : flex;
        justify-content : space-between;
        align-items : center;
        p{
            margin-left : 10px;
            font-size : 12px;
        }
    }
}
`
const Footer = styled.div`
    position : relative;
    bottom : 0;
    border-top : 1px solid rgba(0,0,0,0.09);
    text-align:center;
    display : flex;
    align-items : center;
    justify-content:center;
    button{
        border : none;
        background:none;
        cursor : pointer;
        div{
            background: no-repeat url(https://ssl.gstatic.com/mail/sprites/hangouts_black-734a4722bcd0d29f1eba9aaa722c7c76.png) 0 -150px;
            width: 28px;
            height: 29px;
            background-color :rgba(0,0,0,0.09);
        }
    }
`


const ItemContainer = styled.div`
cursor : pointer;
display : flex;
flex-direction : row;
align-items : center;
color : rgba(0,0,0,0.8);
padding : 2.5px 20px;
border-radius : 0 10px 10px 0;
background-color : ${props => (props.id === 1 && "rgba(222,45,58,0.1)")};
color : ${props => (props.id === 1 && "rgb(222,45,58)")};

&:hover {
    background-color : ${props => (props.id === 1 ? "rgba(222,45,58,0.1)" : "rgba(0,0,0,0.07)")}
}
svg{
    fill : ${props => (props.id === 1 ? "rgb(222,45,58)" : "rgba(0,0,0,0.6)")};
    width : 20px;
    height :20px;
    cursor : pointer;
}

`

const IconContainer = styled.div`
    margin : 0 10px;
`

const Label = styled.div`
    font-size : 13px;
    font-weight : ${props => (props.id === 1 && "700")}
    
`

const Badge = styled.div`
    font-size : 13px;
    margin-left : 30px;
    font-weight : ${props => (props.id === 1 && "700")}
`

const Libre = styled.div`
margin : auto;
p{
    font-size : 12px;
    text-align : center;
    display :block;
    margin : 0;
}
a{
    font-size : 12px;
    text-align : center;
    color : #1155cc;
    cursor : pointer;
}

`