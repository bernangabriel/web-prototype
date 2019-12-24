import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NavDrop = ({ title, children }) => (
    <NavDropdown title={title} id="basic-nav-dropdown">
        {
            children.map(item => {
                return (<NavDropdown.Item
                    key={item.title}
                    href={item.url}>
                    <Title>{item.title}</Title>
                </NavDropdown.Item>)
            })
        }
    </NavDropdown>
)

const Title = styled.span`
    color: #696969;
`

NavDrop.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }))
}

export default NavDrop