// import React, { useState, useContext, createContext, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
} from 'react-router-dom'

// import BootstrapNavbar from './BootstrapNavbar.js'
// import PostList from './components/postList'
// import PostView from './components/postView'

import React, { useState, useContext, createContext, useEffect } from 'react'
import BootstrapNavbar from './components/BootstrapNavbar'
import GeneralNews from './components/GeneralNews'
import LoadingBar from 'react-top-loading-bar'
import GlobalState from './contexts/GlobalState'
import axios from 'axios'



function App() {
  const [state, setState] = useState({})



  return (
    <GlobalState.Provider value={[state, setState]}>
      {/* <Child key={state.lxKey} /> */}
      <Child />
    </GlobalState.Provider>
  )
}



function Child() {
  const [progress, setProgress] = useState(0)
  const pageSize = 8
  const [state, setState] = useContext(GlobalState)

  useEffect(() => {
    setState((state) => ({ ...state, lxCountry: 'AU' }))
    setState((state) => ({ ...state, lxCategory: 'general' }))
    setState((state) => ({ ...state, lxKey: 'general_us' }))
    setState((state) => ({ ...state, lxCurrentPath: '/' }))
    axios.get('https://ipapi.co/json/').then((response) => {
      let data = response.data;
      // this.setState({
      //     countryName: data.country_name,
      //     countryCode: data.country_code
      // });
      setState((state) => ({ ...state, countryName: data.country_name }));
      setState((state) => ({ ...state, countryCode: data.country_code }));
      console.log("Here's the Axios country_name", data.country_name);
      console.log("Here's the Axios country_code", data.country_code);
    }).catch((error) => {
      console.log(error);
    });
  }, []);


  // GetGeoInfo();

  return (
    <Router>
      <BootstrapNavbar></BootstrapNavbar>
      <LoadingBar color="#005abb" height={3} progress={progress} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <GeneralNews
              setProgress={setProgress}
              key="general_us"
              category="general"
              headline="USA News Headlines"
              pageSize={pageSize}
              country="us"
              lxCountry={state.lxCountry}
            />
          }
        />
        <Route
          path="/general/gb"
          element={
            <GeneralNews
              setProgress={setProgress}
              key="general_gb"
              category="general"
              headline="UK News Headlines"
              pageSize={pageSize}
              country="gb"
              lxCountry={state.lxCountry}
            />
          }
        />
        <Route
          path="/general/au"
          element={
            <GeneralNews
              setProgress={setProgress}
              key="general_au"
              category="general"
              headline="Australian News Headlines"
              pageSize={pageSize}
              country="au"
              lxCountry={state.lxCountry}
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <GeneralNews
              setProgress={setProgress}
              key={'business_' + state.lxCountry}
              category="business"
              headline="Latest Business"
              pageSize={pageSize}
              country="us"
              lxCountry={state.lxCountry}
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <GeneralNews
              setProgress={setProgress}
              key={'sports_' + state.lxCountry}
              category="sports"
              headline="Australian Sports Headlines"
              pageSize={pageSize}
              country="au"
              lxCountry={state.lxCountry}
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <GeneralNews
              setProgress={setProgress}
              key="science"
              category="science"
              headline="Latest Science"
              pageSize={pageSize}
              country="us"
              lxCountry={state.lxCountry}
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <GeneralNews
              setProgress={setProgress}
              key="health"
              category="health"
              headline="Australian Health"
              pageSize={pageSize}
              country="au"
              lxCountry={state.lxCountry}
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <GeneralNews
              setProgress={setProgress}
              key={'entertainment_' + state.lxCountry}
              category="entertainment"
              headline="Latest Entertainment Headlines"
              pageSize={pageSize}
              country="us"
              lxCountry={state.lxCountry}
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            // <TechCrunch
            <GeneralNews
              setProgress={setProgress}
              key="technology"
              category="technology"
              headline="Latest Technology"
              pageSize={pageSize}
              country="us"
              lxCountry={state.lxCountry}
            />
          }
        />
      </Routes>
    </Router>
  )
}




export default App
