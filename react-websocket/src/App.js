import LoginUser from './Authentication/Login'
import EditContent from './Edit/EditContent'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'

function App() {
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={LoginUser} />
          <Route path="/edit" exact component={EditContent} />
      </Switch>
    </Router>
  )
}

export default App;