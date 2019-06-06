import React from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from './store'
import {Route, Switch} from 'react-router-dom'
import Posts from './components/Posts/Posts'
import PostSingle from './components/Posts/Post/PostSingle/PostSingle'

class App extends React.Component {

  render() {
  return (
      <Provider store={store}>
        <div className="wr">
        <Switch>
          <Route
            path="/"
            exact
            component={Posts}
          ></Route>
          <Route
            path="/posts/:postId"
            component={PostSingle}
          ></Route>
          <Route
            path="/posts"
            component={Posts}
          ></Route>
            <Route
              render={()=><h1 style={{color:'red',textAlign:'center'}}>404 Not Found</h1>}
            />
        </Switch>
        </div>
      </Provider>
  )
  }
}

export default App;
