import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Screens
import Home from './views/home-view'
import Product from './views/product-view'
import Cart from './views/cart-view'
import Login from './views/login-view'
import Register from './views/register-view'
import Profile from './views/profile-view'
import Shipping from './views/shipping-view'
import Payment from './views/payment-view'
import PlaceOrder from './views/place-order-view'
import Order from './views/order-screen'
import Users from './views/admin/users-view'
import UserEdit from './views/admin/user-edit'
import Products from './views/admin/products-view'
import ProductEdit from './views/admin/product-edit'
import Orders from './views/admin/orders-view'

/*****************************************************************
 * NOTE: This project was created by loosly following a tutorial.
 * There is a lot of code I dont agree with but I dont plan on
 * changing it as this was a learning project.
 ****************************************************************/
const App = () => {
  return (
    <Router>
      <Header />
      <Container className='py-3 main-content'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/search/:keyword' component={Home} />
          <Route exact path='/page/:pageNumber' component={Home} />
          <Route
            exact
            path='/search/:keyword/page/:pageNumber'
            component={Home}
          />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
          <Route path='/product/:id' component={Product} />
          <Route path='/cart/:id?' component={Cart} />
          <Route path='/shipping' component={Shipping} />
          <Route path='/payment' component={Payment} />
          <Route path='/place-order' component={PlaceOrder} />
          <Route path='/order/:id' component={Order} />
          <Route exact path='/admin/users' component={Users} />
          <Route path='/admin/users/:id/edit' component={UserEdit} />
          <Route
            exact
            path='/admin/products/:pageNumber?'
            component={Products}
          />
          <Route path='/admin/products/:id/edit' component={ProductEdit} />
          <Route exact path='/admin/orders' component={Orders} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
