import React from 'react'
import { Route, Switch } from 'react-router'

import FormikForm from './formik-form'
import ReduxForm from './redux-form'
import FinalForm from './final-form'
import ReactForm from './react-form'

const Main = () => (
  <root>
    <Switch>
      <Route exact path='/' component={FormikForm}/>
      <Route path='/form1' component={FormikForm}/>
      <Route path='/form2' component={ReduxForm}/>
      <Route path='/form3' component={FinalForm}/>
      <Route path='/form4' component={ReactForm}/>
    </Switch>
  </root>
)

export default Main