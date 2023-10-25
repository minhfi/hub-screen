import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { getIsAuthenticated } from 'src/store/selectors'
import { StorageUtil } from 'src/utils/storage.util'
import { AUTH_FALLBACK_KEY } from 'src/constants'
import { IRouterOption } from 'src/interfaces'
import { routesAdmin } from 'src/router/admin'
import { LayoutContainer } from '../layout-container'

const PrivateRoute: FC<IRouterOption> = (props) => {
  const location = useLocation()
  const isAuthenticated = useSelector(getIsAuthenticated)

  if (isAuthenticated) {
    return (
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    )
  }

  StorageUtil.setItem(
    AUTH_FALLBACK_KEY,
    `${location.pathname}${location.search}`
  )
  return <Redirect to="/"/>
}

const PublicRoute: FC<IRouterOption> = (props) => {
  const isAuthenticated = useSelector(getIsAuthenticated)

  if (props.isRequired === false && isAuthenticated) {
    return <Redirect to="dashboard"/>
  }

  return (
    <Route path={props.path} exact={props.exact} component={props.component}/>
  )
}

export const RouterView: FC = () => {
  return (
    <LayoutContainer>
      <Switch>
        {routesAdmin.map((item) => {
          if (item.isRequired) {
            return <PrivateRoute key={item.path} {...item}/>
          }

          return <PublicRoute key={item.path} {...item}/>
        })}
      </Switch>
    </LayoutContainer>
  )
}
