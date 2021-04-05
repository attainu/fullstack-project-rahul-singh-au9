import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

import { MDBIcon } from 'mdbreact'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar style={{height:"120px"}} bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>US</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            
            <Nav className='ml-auto'  style={{ height:"auto", fontSize:"0.7rem",display:"flex",flexWrap:"nowrap",justifyContent:"space-evenly",alignItems:"center",backgroundColor:"#1A1717"}} >
            <LinkContainer  to='/services'>
            <Nav.Link >
            <MDBIcon fab icon="servicestack" style={{marginRight:"5px"}} />Services
              </Nav.Link>
              </LinkContainer>
            <LinkContainer  to='/products'>
            <Nav.Link >
               <MDBIcon  icon="store" style={{marginRight:"5px"}} />Products
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (    
                <>        
                  <LinkContainer to='/dashboard'>
                  <Nav.Link>
                  Dashboard
                  </Nav.Link>
                  </LinkContainer>
                <NavDropdown style={{paddingTop:"20px"}} title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                </>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown  style={{marginTop:"40px"}}  title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
