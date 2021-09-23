import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from '../pages/About'
import Contacts from '../pages/Contacts'
import Home from '../pages/Home'
import Sellers from '../pages/Sellers'


const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path='/home'>
                <Home />
            </Route>
            <Route exact path='/sellers'>
                <Sellers />
            </Route>
            <Route exact path='/sellers/:id'>
                <Sellers />
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>
            <Route exact path='/contacts'>
                <Contacts />
            </Route>
        </Switch>
    )
}

export default AppRoutes


// import React from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import Contacts from '../pages/Contacts';
// import About from '../pages/About';
// import Sellers from '../pages/Sellers';
// import Page404 from '../pages/Page404';
  
// const AppRoutes = () => {
//     return (
//         <Switch>
//           <Route path='/contacts' exact>
//             <Contacts />
//           </Route>
//           <Route path='/about' exact>
//             <About />
//           </Route>
//           <Route exact path='/sellers'>
//             <Sellers />
//           </Route>
//           <Route exact path={`/sellers/:id`}>
//             <Sellers />
//           </Route>
//           <Route exact path='/page404'>
//             <Page404 />
//           </Route>
//           <Redirect to={'/page404'} />
//         </Switch>
//     )
// }

// export default AppRoutes
