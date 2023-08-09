import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { navbarBrand } from '../config/api'
import ReactFlagsSelect from 'react-flags-select'
import GlobalState from '../contexts/GlobalState'
import NavbarLinks from './NavbarLinks'
import {
  Container,
  Form,
  FormControl,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Offcanvas,
} from 'react-bootstrap'
import '../BootstrapNavbar.css'

function BootstrapNavbar() {
  const [selected, setSelected] = useState(`AU`)
  const [state, setState] = useContext(GlobalState)
  const [global, setGlobal] = useContext(GlobalState)
  // window.location.replace(`/?locale=${selected}`)


  useEffect(() => {
    // document.querySelector("#component-flags-select").classList.remove('ReactFlagsSelect-module_flagsSelect__2pfa2');
  }, []);

  return (
    // <div>
    //   <div className="row" style={{ marginBottom: '50px' }}>
    //     <div className="col-md-12">
    <Navbar variant="dark" shadow="true" sticky="top" expand="xl">
      <Container fluid>
        <Link
          className="navbar-brand nav-barml-4"
          to="/"
          onClick={() => {
            setState({...state, lxCurrentPath: `/`, });
          }}
        >
          <img
            alt=""
            src="./Velodata.png"
            width="50px"
            height="50px"
            className="d-inline-block align-center"
          />
          {navbarBrand}
        </Link>


        <div className="vdi-large-screen-only">
          <NavbarLinks></NavbarLinks>
        </div>



        <div className="vdi-large-screen-only" id = "component-flags-select" >
          <ReactFlagsSelect
            countries={['US', 'GB', 'AU']}
            
            fullWidth={false}
            alignOptionsToRight
            selectedSize={18}
            selectButtonClassName="react-flags-select-css-options"
            showSelectedLabel={true}
            selected={selected}
            onSelect={(code) => {
              setSelected(code);
              setState({...state, lxKey: `${state.lxCategory}_${code}`, lxCountry: `${code}`,});
              HandleFlagsSelectChange(`${state.lxCategory}_${code}`);
            }}
          />
        </div>

        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start" >
          <Offcanvas.Header closeButton>
            <Link
              className="navbar-brand nav-barml-4"
              to="/"
              onClick={() =>
                setState({
                  ...state,
                  lxCurrentPath: `/`,
                })
              }
            >
              <img
                alt=""
                src="./Velodata.png"
                width="50px"
                height="50px"
                className="d-inline-block align-center"
              />
              {navbarBrand}
            </Link>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <NavbarLinks></NavbarLinks>
            <ReactFlagsSelect
              countries={['US', 'GB', 'AU']}
              fullWidth={false}
              alignOptionsToRight
              selectedSize={20}
              selectButtonClassName="react-flags-select-css-options"
              showSelectedLabel={true}
              selected={selected}
              onSelect={(code) => {
                setSelected(code);
                setState({
                  ...state,
                  lxKey: `${state.lxCategory}_${code}`,
                  lxCountry: `${code}`,
                });
                HandleFlagsSelectChange(`${state.lxCategory}_${code}`);
              }}
            />
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    //     </div>
    //   </div>
    // </div>
  )
}


function HandleFlagsSelectChange(selected) {
  console.log('<ReactFlagsSelect> changed to ' + `${selected}`)
}


export default BootstrapNavbar
