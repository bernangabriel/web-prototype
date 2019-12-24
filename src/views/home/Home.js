import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { Header, Footer } from '../partials'
import { SloganBox, CardBoxList, CommentBox } from './components'
import { grey200 } from '../../constants/colors'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItems: [
                {
                    title: 'INICIO', url: '#home', type: 1
                },
                {
                    title: 'NOSOTROS', url: '#about-us', type: 1
                },
                {
                    title: 'INDUSTRIA', type: 2, children: [{ title: 'Item 1', url2: '#item1' }]
                },
                {
                    title: 'PRODUCTOS', type: 2, children: [{ title: 'Item 1', url2: '#item1' }]
                },
                {
                    title: 'MEDIA', type: 2, children: [{ title: 'Item 1', url2: '#item1' }]
                },
                {
                    title: 'CONTACTENOS', url: '#home', type: 1
                }
            ],
            footerItems: {
                column1: [{ title: 'Nosotros', primary: true }, { title: 'Inicio' }, { title: 'Quiénes somos' }],
                column2: [{ title: 'Nuestra Empresa', primary: true }, { title: 'Nosotros' }, { title: 'Partners' }],
                column3: [{ title: 'Support', primary: true }, { title: 'Apoyo técnico' }, { title: 'Aplicación de turnos' }]
            }
        }
    }

    render() {
        const { menuItems, footerItems: { column1, column2, column3 } } = this.state
        return (
            <Container className="mw-55">
                <ContainerWrapper grey>
                    <Header menu={menuItems} />
                    <SloganBox />
                    <CardBoxList size={3} />
                    <CommentBox />
                </ContainerWrapper>
                <Footer column1={column1}
                    column2={column2}
                    column3={column3} />
            </Container>
        )
    }
}

const ContainerWrapper = styled.div`
    background: ${({ grey }) => grey && grey200};
`

export default Home