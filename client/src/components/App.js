import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/animate.css'
import '../styles/css/App.css'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostsIndex from '../containers/PostsIndex'
import PostsNew from '../containers/PostsNew'
import PostsShow from '../containers/PostsShow'
import Login from '../containers/Login'
import Nav from '../containers/Nav'
import AddUser from '../containers/AddUser'
import Welcome from '../containers/Welcome'

const App = () => (
  <BrowserRouter>
    <div>
      <Nav/>
      <Welcome/>
      <Switch>
        <Route path="/posts/new" component={PostsNew}/>
        <Route path="/posts/:id" component={PostsShow}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={PostsIndex}/>
        <Route path="/adduser" component={AddUser}/>
        <Route path="/" component={PostsIndex}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default App



