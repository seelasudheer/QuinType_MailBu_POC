import React, { Component } from 'react'
import { Form, FormControl, Navbar, Nav } from 'react-bootstrap'
import Mail from '../assets/quintype.png'
import header from './data/data.json'
import styles from './CSS/navbar.module.css'

export class Navbars extends Component {
  constructor(props) {
    super(props)

    this.state = {
      check: false,
      headers: header.headers
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit() {
    this.setState({
      check: true
    })
  }
  render() {

    const { headers, check } = this.state
    return (
      <div className={styles.mainNavCss}>
          <Navbar collapseOnSelect bg="white"  expand="lg">
            <Navbar.Brand href="#home"><img src={Mail} alt="QuinType" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ml-auto" >
                {
                  headers.map((x, index) => {
                    return <Nav.Link key={index} href={x.path} ><h5 className={styles.bars}>{x.name}</h5></Nav.Link>
                  })
                }
              </Nav>
              <Form inline>
                {check ? <FormControl type="text" placeholder="Search" className="mr-sm-2" /> : ""}
                <a href="/#" onClick={() => this.handleSubmit()}><i className="fa fa-search"></i></a>
              </Form>
            </Navbar.Collapse>
          </Navbar>

      </div>
    )
  }
}

export default Navbars
