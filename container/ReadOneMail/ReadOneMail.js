import React , {useState} from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/router'
import Head from 'next/head'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import email from '../../settings/email'
import reseausociaux from '../../settings/reseausociaux.json'
import promo from '../../settings/promo.json'


import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded'; //tsy izy
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LabelIcon from '@material-ui/icons/Label';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import ReplyIcon from '@material-ui/icons/Reply';
import ForwardIcon from '@material-ui/icons/Forward';

import PrintIcon from '@material-ui/icons/Print';


function Contact({type , idOfMail}) {

    const match = [
        {
            name : email,
            slug : 'principale'
        },
        {
            name : reseausociaux,
            slug : 'reseau-sociaux'
        },
        {
            name : promo,
            slug : "promotion"
        }
    ]
    const router = useRouter()
    const [listEmail] = useState(match.filter(m=> m.slug === type)[0].name)
    const [emailToRead] = useState(listEmail?.filter(list => list.id === parseInt(idOfMail))[0]);


    console.log(emailToRead)

    return (
            <ReadContainer>  
                <Head>
                    <title>{emailToRead.from} | Boîte aux lettres</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
            <ActionContainer>
                    <LeftAction>
                        <ArrowBackIcon onClick={() => router.back()}/>
                        <ArchiveIcon/>
                        <InfoIcon/>
                        <DeleteIcon/>
                        <div>
                        <MarkunreadIcon/>
                        <WatchLaterIcon/>
                        <PostAddRoundedIcon/>
                        </div>
                        <InsertDriveFileIcon/>
                        <LabelIcon/>
                        <MoreVertIcon/>
                    </LeftAction>
                    <RightAction>
                        <div>1 sur {listEmail?.length}</div>
                        <ChevronLeftIcon/>
                        <ChevronRightIcon/>
                    </RightAction>
            </ActionContainer>
            <ContentContainer>
                <HeaderContent>
                    <h2>{emailToRead?.subject}</h2>
                    <PrintIcon/>
                </HeaderContent>
                <AboutContent>
                    <Author>   
                        <Avatar variant="circular"/>
                        <div>
                            <span><strong>{emailToRead?.from}</strong> &lt;{emailToRead?.emailADR}&gt;</span>
                            <span>A moi</span>
                        </div>
                    </Author>

                    <DateAndActions>
                        <span>{emailToRead?.date}</span>
                        <StarOutlineIcon/>
                        <ReplyIcon/>
                        <MoreVertIcon/>
                    </DateAndActions>
                </AboutContent>
            </ContentContainer>
                <Text>
                    {emailToRead?.content}
                </Text>
            <BottomActions>
                <Button>
                    <ReplyIcon/>
                    Répondre
                </Button>
                <Button>
                    <ForwardIcon/>
                    Transferer
                </Button>
            </BottomActions>
        </ReadContainer>
        // </HelmetProvider>
    )
}

export default Contact

const ReadContainer = styled.div`
flex-grow: 100;
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
    border-left : 1px solid rgba(0,0,0,0.09);
    border-right : 1px solid rgba(0,0,0,0.09);
    margin : 0 5px;

}
svg{
    margin : 0 7px;
}
`

const RightAction = styled.div`
display : flex ;
align-items : center;
svg{
    fill : rgba(0,0,0,0.6);
    width : 25px;
    height :25px;
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
const ContentContainer = styled.div`
    color : rgba(0,0,0,0.8);
    margin-left : 20px;
`


const HeaderContent = styled.div`
    margin-left : 100px;
    margin-right : 20px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    h2{
        font-weight : 400;
        font-size : 19px;
    }
`

const AboutContent = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`

const Author = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    div{
        display : flex;
        flex-direction : column;
        align-items : start;
        span{
            font-size : 14px;
            margin-left : 20px;
        }
    }

`

const DateAndActions = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    span{
        font-size : 13px;
        color : rgba(0,0,0,0.7);
        margin-right : 20px;
}

`

const Text = styled.div`
    width : 600px;
    margin : 80px auto;
    background-color : #FFF;
    font-size : 15px;
    line-height: 2.5;
`

const BottomActions  = styled.div`
    display : flex;
    align-items : center;
    margin-left : 50px;    
`

 
const Button = styled.button`
    border : 1px solid rgba(0,0,0,0.09);
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 5px 10px;
    background-color : #FFF;
    border-radius : 3px;
    margin : 0 10px;  
    cursor : pointer;
    svg{
        &:hover{
            background-color : #FFF;
        }
    }

`