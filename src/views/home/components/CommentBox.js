import React from 'react'
import styled from 'styled-components'

const CommentBox = (props) => {
    return (
        <Container>
            <Title>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            </Title>
            <SubTitle>
                "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera simplemente porque es el dolor."
            </SubTitle>
        </Container>
    )
}

const Container = styled.div`
    background: #DFE6B1;
    padding:40px;
    text-align:center;
`

const Title = styled.h4`
    font-size:1.2em;
    color: #585858;
    font-family:'Roboto, sans-serif';
`

const SubTitle = styled.p`
    font-size:0.7em;
    color:#585858;
    font-family:'Roboto, sans-serif';
    font-weight: 400;
    margin-top:-10px;
`

export default CommentBox