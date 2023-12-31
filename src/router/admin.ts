import { lazy } from 'react'
import { IRouterOption } from 'src/interfaces'
import { Home } from 'src/modules/home'

// auth
// const SignIn = lazy(() => {
//   return Promise.all([
//     import('src/modules/auth'),
//     new Promise((resolve) => setTimeout(resolve, 300))
//   ]).then(([module]) => ({ default: module.SignIn }))
// })

const SignUp = lazy(() => {
  return Promise.all([
    import('src/modules/auth'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.SignUp }))
})

const ThankYouPage = lazy(() => {
  return Promise.all([
    import('src/modules/auth'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.ThankYouPage }))
})

const PrivacyPolicy = lazy(() => {
  return Promise.all([
    import('src/modules/auth'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.PrivacyPolicy }))
})

const TermsAndConditions = lazy(() => {
  return Promise.all([
    import('src/modules/auth'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.TermsAndConditions }))
})

// core
const Forbidden = lazy(() => {
  return Promise.all([
    import('src/modules/core'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.Forbidden }))
})

const NotFound = lazy(() => {
  return Promise.all([
    import('src/modules/core'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.NotFound }))
})

const InternalServerError = lazy(() => {
  return Promise.all([
    import('src/modules/core'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.InternalServerError }))
})

const DesignSystem = lazy(() => {
  return Promise.all([
    import('src/modules/core'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.DesignSystem }))
})

// dashboard
const Dashboard = lazy(() => {
  return Promise.all([
    import('src/modules/dashboard'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.Dashboard }))
})

export const routesAdmin: IRouterOption[] = [
  // auth
  {
    path: '/:geo(vn2|vn3|vn4|th1|th2|id1|id2|my1|ph1)?',
    exact: true,
    component: Home,
    isRequired: false
  },

  {
    path: '/sign-up',
    exact: true,
    component: SignUp,
    isRequired: false
  },
  {
    path: '/privacy-policy',
    exact: true,
    component: PrivacyPolicy,
    isRequired: false
  },
  {
    path: '/terms-conditions',
    exact: true,
    component: TermsAndConditions,
    isRequired: false
  },
  {
    path: '/thank-you-page',
    exact: true,
    component: ThankYouPage,
    isRequired: false
  },

  // private
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard,
    isRequired: true
  },

  {
    path: '/design-system',
    exact: true,
    component: DesignSystem,
    isRequired: true
  },

  // error
  {
    path: '/403',
    exact: true,
    component: Forbidden
  },
  {
    path: '/404',
    exact: true,
    component: NotFound
  },
  {
    path: '/500',
    exact: true,
    component: InternalServerError
  },

  // last route handle 404 error
  {
    path: '*',
    component: NotFound
  }
]
