import React from 'react'
import styled from 'styled-components'
import { Row } from 'react-bootstrap'
import { CardBoxItem } from './'

const CardBoxList = (props) => {
    return (
        <div>
            <Title>Productos</Title>
            <Row className='m-2 mb-sm-0 ml-sm-0'>
                <CardBoxItem />
                <CardBoxItem />
                <CardBoxItem />
            </Row>
        </div>
    )
}

const Title = styled.h1`
    margin-top:40px;
    margin-bottom:50px;
    text-align:center;
    color: #585858;
`



export default CardBoxList