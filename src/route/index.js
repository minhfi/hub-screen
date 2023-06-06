import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  useLocation
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { getToken } from '@/util/localStorage'
import { routes } from './RoutesConfig'
import Layout from '@/layout'

export const AppRoute = () => {
  const token = getToken()
  const location = useLocation()
  const history = createBrowserHistory()

  const blackList = ['/']
  const active = blackList.includes(location.pathname) ? null : location.pathname
  const currentURL = history.location.pathname

  const redirectRoute = () => {
    const route = routes.find((r) => currentURL.includes(r.name))

    if (route?.view === 'isPublic' && token) {
      return <Redirect to="/home" />
    }

    if (route?.view === 'isPrivate' && !token) {
      return <Redirect to="/login" />
    }

    if (currentURL === '/') {
      return <Redirect to={token ? '/home' : '/login'} />
    }
  }

  return (
    <Layout>
      <SwitchTransition>
        <CSSTransition
          key={active}
          classNames="main-fade-up"
          timeout={{ enter: 750, exit: 200 }}
        >
          <Switch location={location}>
            {routes.map(r => (
              <Route
                key={r.path}
                exact={r.exact}
                path={r.path}
                component={r.component}
              />
            ))}
            {redirectRoute()}
          </Switch>
        </CSSTransition>
      </SwitchTransition>
    </Layout>
  )
}

export default AppRoute
