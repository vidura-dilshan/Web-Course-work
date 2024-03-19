import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import PharmacistCreateAccount from './views/pharmacist-create-account'
import UserCreateAccount from './views/user-create-account'
import HealthStorePharmacist from './views/health-store-pharmacist'
import PrescriptionOrder from './views/prescription-order'
import UserLogin from './views/user-login'
import PharmacistLogin from './views/pharmacist-login'
import HealthStoreUser from './views/health-store-user'
import NotFound from './views/not-found'
import ImageUploadOCR from './views/ImageUploadOCR'
import UploadPrescription from './views/UploadPrescription'
import MapComponent from './views/MapComponent'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={PharmacistCreateAccount}
          exact
          path="/pharmacist-create-account"
        />
        <Route
          component={UserCreateAccount}
          exact
          path="/user-create-account"
        />
        <Route
          component={HealthStorePharmacist}
          exact
          path="/health-store-pharmacist"
        />
        <Route component={PrescriptionOrder} exact path="/prescription-order" />
        <Route component={UserLogin} exact path="/" />
        <Route component={PharmacistLogin} exact path="/pharmacist-login" />
        <Route component={HealthStoreUser} exact path="/health-store-user" />
        <Route component={ImageUploadOCR} exact path="/imageUploadOCR" />
        <Route component={UploadPrescription} exact path="/UploadPrescription" />
        <Route component={MapComponent} exact path="/MapComponent" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
