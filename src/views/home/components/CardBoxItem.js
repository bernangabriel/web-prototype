import React from 'react'
import styled from 'styled-components'
import {Col} from 'react-bootstrap'
import { grey400, grey500 } from '../../../constants/colors'

const CardBoxItem = () => {
    return (
        <Col sm={12} md={4}>
            <div class="shadow p-3 mb-5 bg-white">
                <Title darkGrey>Lorem</Title>
                <Content lightGrey>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería
                    de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                </Content>
            </div>
        </Col>
    )
}

const Title = styled.h4`
    text-align:center;
    margin-top:30px;
    margin-bottom:20px;
    color: ${({ darkGrey }) => darkGrey && grey500};
`

const Content = styled.p`
    color: ${({ lightGrey }) => lightGrey && grey400};
    text-align: center;
    font-size:0.8em;
    padding:10px;
    margin-top:-10px;
`

export default CardBoxItem