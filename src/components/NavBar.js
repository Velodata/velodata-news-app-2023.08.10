import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { navbarBrand } from '../config/api'
import ReactFlagsSelect from 'react-flags-select'
import GlobalState from '../contexts/GlobalState'

function NavBar() {
  const [selected, setSelected] = useState('AU')
  const [state, setState] = useContext(GlobalState)
  const [global, setGlobal] = useContext(GlobalState)
  // window.location.replace(`/?locale=${selected}`)

  return (
    <div>
      <nav
        className={`navbar py-3 fixed-top navbar-expand-lg navbar-dark shadow`}
      >
        <Link
          className="navbar-brand ml-4"
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
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                className={` nav-link ${
                  state.lxCurrentPath === '/' ? 'active' : ''
                }`}
                to="/"
                onClick={() =>
                  setState({
                    ...state,
                    lxCurrentPath: `/`,
                  })
                }
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
                onClick={() =>
                  setState({
                    ...state,
                    lxCurrentPath: `/general/gb`,
                  })
                }
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
                onClick={() =>
                  setState({
                    ...state,
                    lxCurrentPath: `/general/au`,
                  })
                }
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
                onClick={() =>
                  setState({
                    ...state,
                    lxCurrentPath: `/business`,
                  })
                }
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
                onClick={() =>
                  setState({
                    ...state,
                    lxCurrentPath: `/sports`,
                  })
                }
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
                onClick={() =>
                  setState({
                    ...state,
                    lxCurrentPath: `/science`,
                  })
                }
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
                onClick={() =>
                  setState({
                    ...state,
                    lxCurrentPath: `/health`,
                  })
                }
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={` nav-link ${
                  state.lxCurrentPath === '/entertainment' ? 'active' : ''
                }`}
                to="/entertainment/au"
                onClick={() =>
                  setState({
                    ...state,
                    lxCurrentPath: `/entertainment/au`,
                  })
                }
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
                onClick={() =>
                  setState({
                    ...state,
                    lxCurrentPath: `/technology`,
                  })
                }
              >
                Technology
              </Link>
            </li>
          </ul>
          {/* <ReactFlagsSelect
            countries={['US', 'GB', 'AU']}
            fullWidth={false}
            alignOptionsToRight
            selectedSize={20}
            selectButtonClassName="react-flags-select-css-options"
            showSelectedLabel={true}
            selected={selected}
            onSelect={(code) => {
              setSelected(code)
              setState({
                ...state,
                lxKey: `${state.lxCategory}_${code}`,
                lxCountry: `${code}`,
              })
            }}
          /> */}
        </div>
      </nav>
    </div>
  )
}

function HandleNavBarChange(selected) {
  // const [state, setState] = useContext(GlobalState)
  // this.setState({ status: !this.state.status }, this.updateLibraryCount)
  // myInitObject.someProp = selected
  // const [state, setState] = useContext(GlobalState)
  console.log('lxCountry now equals', `${selected}`)
}

function handleLinkEvent(selected) {
  // const [state, setState] = useContext(GlobalState)
  // this.setState({ status: !this.state.status }, this.updateLibraryCount)
  // myInitObject.someProp = selected
  // const [state, setState] = useContext(GlobalState)
  console.log('state.lxCurrentPath = ', `${selected}`)
}

export default NavBar
