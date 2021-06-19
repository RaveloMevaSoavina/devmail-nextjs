import React from 'react'
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import DuoRoundedIcon from '@material-ui/icons/DuoRounded'; //tsy mbola tena izy
import CancelScheduleSendRoundedIcon from '@material-ui/icons/CancelScheduleSendRounded'; //tsy mbola tena izy
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelIcon from '@material-ui/icons/Label';
import GroupIcon from '@material-ui/icons/Group';
import ErrorIcon from '@material-ui/icons/Error';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import email from '../../../settings/email.json'

export const navigation = [
    {
        id : 1,
        label : "Boîte aux lettres",
        Icon : <InboxIcon/>,
        badge : email?.filter(mail => mail.status === false).length
    },
    {
        id : 2,
        label : "Messages suivis",
        Icon : <StarIcon/>,
        badge : ""
    },
    {
        id : 3,
        label : "En attente",
        Icon : <WatchLaterRoundedIcon/>,
        badge : ""
    },
    {
        id : 4,
        label : "Messages envoyés",
        Icon : <SendIcon/>,
        badge : ""
    },
    {
        id : 5,
        label : "Brouillons",
        Icon : <InsertDriveFileRoundedIcon/>,
        badge : ""
    },
    {
        id : 6,
        label : "Plus",
        Icon : <ExpandMoreIcon/>,
        badge : ""
    },
    {
        id : 7,
        label : "Moins",
        Icon : <ExpandLessIcon/>,
        badge : ""
    },
    {
        id : 8,
        label : "Important",
        Icon : <LabelImportantIcon/>,
        badge : ""
    },
    {
        id : 9,
        label : "Touts les chats",
        Icon : <DuoRoundedIcon/>,
        badge : ""
    },
    {
        id : 10,
        label : "Planifiés",
        Icon : <CancelScheduleSendRoundedIcon/>,
        badge : ""
    },
    {
        id : 11,
        label : "Toutes les messages",
        Icon : <EmailRoundedIcon/>,
        badge : ""
    },
    {
        id : 12,
        label : "Spam",
        Icon : <ReportIcon/>,
        badge : ""
    },
    {
        id : 13,
        label : "Corbeille",
        Icon : <DeleteIcon/>,
        badge : ""
    },
    {
        id : 14,
        label : "Catégories",
        Icon : <LabelIcon/>,
        badge : "",
        sous : [
            {
                label : "Réseaux sociaux",
                Icon : <GroupIcon/>,
                badge : ""
            },
            {
                label : "Notifications",
                Icon : <ErrorIcon/>,
                badge : ""
            },
            {
                label : "Forums",
                Icon : <ForumIcon/>,
                badge : ""
            },
            {
                label : "Promotions",
                Icon : <LocalOfferIcon/>,
                badge : ""
            },

        ]
    },
    {
        id : 15,
        label : "Gérer les libéllés",
        Icon : <SettingsIcon/>,
        badge : ""
    },
    {
        id : 16,
        label : "Créer un libéllé",
        Icon : <AddIcon/>,
        badge : ""
    },

]

export const meet =[
    {
        label : "Nouvelle réunion",
        Icon : <VideocamIcon/>,
        badge : ""
    },
    {
        label : "Rejoindre une réunion",
        Icon : <KeyboardIcon/>,
        badge : ""
    },
] 