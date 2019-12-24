import React from 'react'
import styled from 'styled-components'
import { Jumbotron } from 'react-bootstrap'
import { device } from '../../../constants/device'

const SloganBox = (props) => {
    return (
        <Jumbotron fluid style={{ background: "linear-gradient(90deg, rgba(202,144,107,1) 21%, rgba(207,175,129,1) 51%, rgba(211,199,147,1) 84%)" }}>
            <Title>Redefiniendo la experiencia del cliente</Title>
            <SubTitle>en las salas de espera</SubTitle>
        </Jumbotron>
    )
}

const Title = styled.h3`
    color: #fafafa;
    font-family: 'Times New Roman, serif';
    text-align: center;
    text-shadow: 3px 3px #838383;

    @media ${device.mobileM} { 
        font-size:1.6rem;
        padding:10px;
    }

    @media ${device.laptop} { 
        font-size:1.8rem;
    }

    @media ${device.desktop} { 
        font-size:1.8rem;
    }
`

const SubTitle = styled.p`
    color: #fafafa;
    font-family: 'Arial';
    text-align:center;
    margin-top:-10px;

    @media ${device.mobileM} { 
        font-size:2.0rem;
        padding:10px;
    }

    @media ${device.laptop} { 
        font-size:1.8rem;
    }

    @media ${device.desktop} { 
        font-size:1.8rem;
    }
`

export default SloganBox