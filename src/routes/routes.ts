import { lazy, LazyExoticComponent } from 'react';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element
interface Route {
  to: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string
}

//lazy es un método propio de React que hay que importar.
const Lazy1 = lazy(() => import( /* webpackChunkName:"Lazyload1" */'../01-lazyload/pages/LazyPage1'));
const lazy2= lazy(() => import( /* webpackChunkName:"Lazyload2" */'../01-lazyload/pages/LazyPage2'));
const lazy3 = lazy(() => import( /* webpackChunkName:"Lazyload3" */'../01-lazyload/pages/LazyPage3'));


export const routes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'lazy-1'
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: LazyPage2,
    name: 'lazy-2'
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: LazyPage3,
    name: 'lazy-3'
  }
]