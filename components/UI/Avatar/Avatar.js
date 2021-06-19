import React from 'react'
import styled from 'styled-components';

function Avatar({src, alt}) {
    return (
        <AvatarContainer src={src} alt={alt}/>
    )
}

export default Avatar

const AvatarContainer = styled.img`
    width : 40px;
    height : 40px;
    border-radius : 100%;
    cursor : pointer;
`