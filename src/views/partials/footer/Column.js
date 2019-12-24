import React from 'react'
import styled from 'styled-components'
import { white as whiteColor } from '../../../constants/colors'

const Column = (props) => {
    const { items } = props
    return (
        <div className="col-md-4">
            <div class="container text-center">
                {items.map(item => {
                    return item.primary
                        ? <ColumnTitle white primary>{item.title}</ColumnTitle>
                        : <ColumnTitle>{item.title}</ColumnTitle>
                })}
            </div>
        </div>
    )
}

const ColumnTitle = styled.p`
    color: ${({ white }) => white && whiteColor};
    font-size: ${({ primary }) => primary && '1.3em'};
    margin-bottom:3px;
`


export default Column