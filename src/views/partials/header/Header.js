import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { NavLink, NavDrop } from './'

const Menu = (props) => {
    const { menu } = props
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {menu.map(item => item.type === 1
                        ? (<NavLink title={item.title} />)
                        : (<NavDrop title={item.title} children={item.children} />))
                    }
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="#login">Ingresar</a> | <a href="#search-office">Buscar Oficina</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu