import React from 'react'
import styled from 'styled-components';
import Header from './Head/Head'
import Sidebar from './Sidebar/Sidebar'

function Layout({children}) {
    return (
        <LayoutContainter>
            <Header/>
            <Content>
                <Sidebar/>
                {children}
            </Content>
        </LayoutContainter>
    )
}

export default Layout


const LayoutContainter = styled.div`
    width : 100vw;
    height: 100vh;
    background-color : rgba(255,255,255,0.7);
    display:flex;
    flex-direction : column;
    font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
`
const Content = styled.div`
    display: flex;
    flex-grow : 1;
`