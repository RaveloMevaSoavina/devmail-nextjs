import React , {useState , useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/Inbox';
import GroupIcon from '@material-ui/icons/Group';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import StarBorderIcon from '@material-ui/icons/StarBorder';


import email from '../../settings/email.json'
import reseausociaux from '../../settings/reseausociaux.json'
import promo from '../../settings/promo.json'


const MailRow = ({id,from , subject , content , date , read , navigation}) => {

    const toSlug = (text) => text.toLowerCase().split(" ").join("-")

    const url = `mail/${toSlug(navigation)}/${id}`

    return(
        <Link href={url}>
            <Row read={read} >
                    <Left>
                        <input type="checkbox"/>
                        <StarBorderIcon/>
                        <h3>{from}</h3>
                    </Left>
                    <Center>
                        <div style={{ width : "680px",textOverflow: "ellips" , whiteSpace: "nowrap", overflow: "hidden" }}>
                            <span >{subject}</span> - {content}
                        </div>
                        <div>{date.split(" ")[3]}</div>
                    </Center>
            </Row>
        </Link>
    )
}

function Home() {
    const [navigation , setNavigation] = useState("Principale")
    const [listEmail ,setListEmail] = useState(email);
    const [checkAll ,setCheckAll] = useState(false);
    
    // let history = useHistory()
    
    useEffect(() => {
        switch(navigation){
            case "Reseau sociaux":
                setListEmail(reseausociaux)
                break;
            case "Promotion":
                setListEmail(promo)
                break;
            default :
                setListEmail(email)
                break;
        }
    },[navigation])

    
    return (
            <MainContainer>
                <Head>
                    <title>{navigation} | Boîte aux lettres</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
             <ActionContainer>
                <LeftAction>
                    <div>
                        <input type="checkbox" checked={checkAll} onChange={()=>setCheckAll(true)}/>
                        <ArrowDropDownIcon className='special'/>
                    </div>
                    <RefreshIcon/>
                    <MoreVertIcon/>
                </LeftAction>
                <RightAction>
                    <div>{listEmail.length} sur {listEmail.length}</div>
                    <ChevronLeftIcon/>
                    <ChevronRightIcon/>
                </RightAction>
            </ActionContainer>
            <NavigationContainer>
                <NavigationItem id="principale" onClick={()=>setNavigation("Principale")} active={navigation}>
                    <InboxIcon/>
                    <div>Principale</div>
                </NavigationItem>
                <NavigationItem id="reseau" onClick={()=>setNavigation("Reseau sociaux")} active={navigation}>
                    <GroupIcon/>
                    <div>Réseaux sociaux</div>
                </NavigationItem>
                <NavigationItem id="promo" onClick={()=>setNavigation("Promotion")} active={navigation}>
                    <LocalOfferIcon/>
                    <div>Promotions</div>
                </NavigationItem>
            </NavigationContainer>
            <MailList>
                {listEmail.map((item, index)=> 
                    <MailRow 
                        key={index}
                        id={item.id}
                        from={item.from} 
                        subject={item.subject} 
                        content={item.content}
                        date={item.date}
                        read={item.status}
                        navigation={navigation}
                    />)}
            </MailList>
        </MainContainer>
        // </HelmetProvider>
    )
}

export default Home

const MainContainer = styled.div`
    // border-bottom : 1px solid rgba(0,0,0,0.09);
    flex-grow: 100;
`
const ActionContainer = styled.div`
    display : flex ;
    justify-content : space-between;
    align-items : center;
    border-bottom : 1px solid rgba(0,0,0,0.09);
    height : 48px;
    padding : 0 10px;
    svg{
        fill : rgba(0,0,0,0.6);
        width : 30px;
        height :30px;
        cursor : pointer;
        padding : 5px;
        &:hover{
            background-color : rgba(0,0,0,0.09);
            border-radius : 100%;
            
        }
    }
`

const LeftAction = styled.div`
    display : flex ;
    align-items : center;
    div{
        display : flex ;
        align-items : center;
    }

`
const RightAction = styled.div`
    display : flex ;
    align-items : center;
    svg{
        fill : rgba(0,0,0,0.6);
        width : 30px;
        height :30px;
        cursor : pointer;
        padding : 5px;
        &:hover{
            background-color : rgba(0,0,0,0.09);
            border-radius : 100%;
            
        }
    }
    div{
        font-size: 13px;
        margin-right : 20px;
    }
`

const NavigationContainer = styled.div`
    display : flex ;
    align-items : center;
    border-bottom : 1px solid rgba(0,0,0,0.09);
    height : 56px;
`

const NavigationItem = styled.div`
    color : ${props => (
        props.active === "Principale" && props.id === "principale"
        ? 
        "rgb(222,45,58)"
        : 
        props.active === "Reseau sociaux" && props.id === "reseau"
        ?
        "rgb(24,117,225)"
        : 
        props.active === "Promotion" && props.id === "promo"
        ?
        "rgb(0,84,43)"
        :
        "rgb(0,0,0,0.7)"
        )};
    display : flex ;
    align-items : center;
    width : 241px;
    height : 56px;
    padding : 0 10px;
    cursor : pointer;
    border-bottom : ${props => (
        props.active === "Principale" && props.id === "principale"
        ? 
        "4px solid rgb(222,45,58)"
        : 
        props.active === "Reseau sociaux" && props.id === "reseau"
        ?
        "4px solid rgb(24,117,225)"
        : 
        props.active === "Promotion" && props.id === "promo"
        &&
        "4px solid rgb(0,84,43)"

    )};
    &:hover{
        background-color : rgba(0,0,0,0.03);
    }
    svg{
        width : 20px;
        
    }
    div{
        margin-left : 10px;
        font-size : 14px;
        font-weight : 600;
    }
`
const MailList = styled.div`
    display : flex ;
    flex-direction : column;
`

const Row = styled.div`
    background-color : ${props => (!props.read ? "rgba(0,0,0,0.04)"  : "none")};
    color : rgba(0,0,0,0.8);
    cursor : pointer;
    font-size : 14px;
    height : 40px;
    display : flex ;
    align-items : center;
    border-bottom : 1px solid rgba(0,0,0,0.09);
    padding : 0 10px;
    input , svg{
        margin-right : 10px;
    }
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
`

const Left = styled.div`
    
    display : flex;
    align-items : center;
    width : 241px;
    padding : 0 20px 0 0;
    h3{
        font-size : 14px;
    }
    svg{
        fill : rgba(0,0,0,0.1);
    }
`

const Center = styled.div`
    flex-grow : 100;
    display : flex;
    align-items : center;
    justify-content : space-between;
    span{
        font-weight : ${props => (!props.read ? "700"  : "none")};
    }
`