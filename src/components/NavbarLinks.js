import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { navbarBrand } from '../config/api'
import ReactFlagsSelect from 'react-flags-select'
import GlobalState from '../contexts/GlobalState'

function NavbarLinks() {
  // const [selected, setSelected] = useState('AU')
  const [state, setState] = useContext(GlobalState)
  // const [global, setGlobal] = useContext(GlobalState)
  // window.location.replace(`/?locale=${selected}`)

  return (
    <div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link
            className={` nav-link ${
              state.lxCurrentPath === '/' ? 'active' : ''
            }`}
            to="/"
            onClick={() => {
              let currentPath = "/general/us"
              setState({...state, lxCurrentPath: `${currentPath}`,});
              HandleOnSelectChange(currentPath);
            }}
          >
            USA News
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={` nav-link ${
              state.lxCurrentPath === '/general/gb' ? 'active' : ''
            }`}
            to="/general/gb"
            onClick={() => {
              let currentPath = "/general/gb"
              setState({...state, lxCurrentPath: `${currentPath}`,});
              HandleOnSelectChange(currentPath);
            }}
          >
            UK News
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={` nav-link ${
              state.lxCurrentPath === '/general/au' ? 'active' : ''
            }`}
            to="/general/au"
            onClick={() => {
              let currentPath = "/general/au"
              setState({...state, lxCurrentPath: `${currentPath}`,});
              HandleOnSelectChange(currentPath);
            }}
          >
            AUS News
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={` nav-link ${
              state.lxCurrentPath === '/business' ? 'active' : ''
            }`}
            to="/business"
            onClick={() => {
              let currentPath = "/business"
              setState({...state, lxCurrentPath: `${currentPath}`,});
              HandleOnSelectChange(currentPath);
            }}
          >
            Business
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={` nav-link ${
              state.lxCurrentPath === '/sports' ? 'active' : ''
            }`}
            to="/sports"
            onClick={() => {
              let currentPath = "/sports"
              setState({...state, lxCurrentPath: `${currentPath}`,});
              HandleOnSelectChange(currentPath);
            }}            
          >
            Sports
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={` nav-link ${
              state.lxCurrentPath === '/science' ? 'active' : ''
            }`}
            to="/science"
            onClick={() => {
              let currentPath = "/science"
              setState({...state, lxCurrentPath: `${currentPath}`,});
              HandleOnSelectChange(currentPath);
            }}            
          >
            Science
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={` nav-link ${
              state.lxCurrentPath === '/health' ? 'active' : ''
            }`}
            to="/health"
            onClick={() => {
              let currentPath = "/health"
              setState({...state, lxCurrentPath: `${currentPath}`,});
              HandleOnSelectChange(currentPath);
            }}
          >
            Health
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={` nav-link ${
              state.lxCurrentPath === '/entertainment' ? 'active' : ''
            }`}
            to="/entertainment" 
            onClick={() => {
              let currentPath = "/entertainment" ;
              setState({...state, lxCurrentPath: `${currentPath}`,});
              HandleOnSelectChange(currentPath);
            }}            

          >
            Entertainment
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={` nav-link ${
              state.lxCurrentPath === '/technology' ? 'active' : ''
            }`}
            to="/technology"
            onClick={() => {
              let currentPath = "/technology";
              setState({...state, lxCurrentPath: `${currentPath}`,});
              HandleOnSelectChange(currentPath);
            }}
          >
            Technology
          </Link>
        </li>
      </ul>
    </div>
  )
}


function HandleOnSelectChange(currentPath) {
  console.log('<nav-item> You selected ' + `${currentPath}`)
  if ( currentPath === '/business' || 
       currentPath === '/sports' || 
       currentPath === '/health' || 
       currentPath === '/entertainment' || 
       currentPath === '/science' || 
       currentPath === '/technology' ) {
    document.querySelector("#component-flags-select").classList.add('XXX-class-name');
  } else {
    document.querySelector("#component-flags-select").classList.remove('XXX-class-name');
  }
}


export default NavbarLinks
