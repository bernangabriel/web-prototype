import React, { Component } from 'react'
import styled from 'styled-components'
import Home from './views/home/Home'
import { white as whiteColor } from './constants/colors'

class App extends Component {
    render() {
        return (
            <Container>
                <Home white/>
            </Container>
        )
    }
}

const Container = styled.div`
    background: ${({ white }) => white && whiteColor};
`

export default App