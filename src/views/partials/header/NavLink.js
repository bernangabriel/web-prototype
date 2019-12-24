import React from 'react'
import { Nav } from 'react-bootstrap'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const NavLink = ({ title, url }) => (
    <Nav.Link href={url}><Title>{title}</Title></Nav.Link>
)

const Title = styled.span`
    color: #696969;
`

NavLink.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default NavLink