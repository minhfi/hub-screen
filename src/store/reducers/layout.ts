import {
  LAYOUT_SET_DRAWER,
  LAYOUT_SET_NAVIGATE,
  LAYOUT_SET_LOADING,
  ILayoutState,
  ILayoutAction,
  LAYOUT_RESET_CONFIG,
  LAYOUT_SET_ASIDE,
  LAYOUT_SET_HEADER,
  LAYOUT_SET_PAGE_TITLE,
  LAYOUT_RESET_DRAWER,
  LAYOUT_SET_OPEN_MENU
} from './../types'

const initState: ILayoutState = {
  isHeader: true,
  isAside: true,
  pageTitle: null,
  isLoading: false,
  navigateTo: null,
  isOpenMenu: false,
  drawer: {
    title: '',
    open: false,
    content: '',
    action: ''
  }
}

export const reducer = (state = initState, action: ILayoutAction) => {
  switch (action.type) {
    case LAYOUT_RESET_CONFIG:
      return { ...state }
    case LAYOUT_SET_ASIDE:
      return {
        ...state,
        isAside: action.value
      }
    case LAYOUT_SET_HEADER:
      return {
        ...state,
        isHeader: action.value
      }
    case LAYOUT_SET_PAGE_TITLE:
      return {
        ...state,
        pageTitle: action.value
      }
    case LAYOUT_SET_LOADING:
      return {
        ...state,
        isLoading: action.value
      }
    case LAYOUT_SET_DRAWER:
      return {
        ...state,
        drawer: action.value
      }
    case LAYOUT_RESET_DRAWER:
      return {
        ...state,
        drawer: {
          title: '',
          open: false,
          content: '',
          action: ''
        }
      }
    case LAYOUT_SET_NAVIGATE:
      return {
        ...state,
        navigateTo: action.value
      }
    case LAYOUT_SET_OPEN_MENU:
      return {
        ...state,
        isOpenMenu: action.value
      }
    default:
      return state
  }
}
