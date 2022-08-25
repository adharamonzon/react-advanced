import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes, NavLink } from "react-router-dom";
import  logo  from "../logo.svg";
import { routes } from '../routes/routes';

export const Navigation = () => {

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo"/>
            <ul>
             {
             routes.map(route => (
              <li key={route.name}>
              <NavLink to={route.to} className={({isActive}) => isActive ? 'nav-active' : ''}>
                {route.name}
              </NavLink>
              </li>
              ))
            }
            </ul>
          </nav>

          <Routes>
            {routes.map(route => (
              <Route key={route.name} path={route.path} element={<route.Component/>} />
              ))
            }
            <Route path="/*" element={<Navigate to='/lazy1' replace />} />   
         </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
};