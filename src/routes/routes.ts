import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element
interface Route {
  to: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string
}

//lazy es un método propio de React que hay que importar.
const LazyLayout= lazy(() => import( /* webpackChunkName:"LazyLayout" */'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'LazyLayout - Dash'
},
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No lazy'
  }
]