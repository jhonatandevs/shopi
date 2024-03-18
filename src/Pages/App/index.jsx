
import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'
import { Navbar } from '../../Components/Navbar'
import { ShoppingCartProvider } from '../../Context'
import { useState } from 'react'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import Category from '../Category'


const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/my-account',
      element: <MyAccount />
    },
    {
      path: '/my-order/:id',
      element: <MyOrder />
    },
    {
      path: '/my-orders',
      element: <MyOrders />
    },
    {
      path: '/category/:id',
      element: <Category />
    },
    {
      path: '/not-found',
      element: <NotFound />
    },
    {
      path: '/signin',
      element: <SignIn />
    }
  ])
  return routes;
}
function App() {
  const [count, setCount] = useState(0);
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes count={count} setCount={setCount} />
        <CheckoutSideMenu/>

      </BrowserRouter>
    </ShoppingCartProvider>

  )
}

export default App
