import "./App.css"
import Home from "./screens/Home/Home"
import ProductCreate from "./screens/ProductCreate/ProductCreate"
import ProductEdit from "./screens/ProductEdit/ProductEdit"
import ProductDetail from "./screens/ProductDetail/ProductDetail"
import SignUp from "./screens/SignUp/SignUp"
import SignIn from "./screens/SignIn/SignIn"
import SignOut from "./screens/SignOut/SignOut"
import { verifyUser } from "./services/users"
import Products from "./screens/Products/Products"
import { useState, useEffect } from "react"
import { Route, Switch, Redirect } from "react-router-dom"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const grabUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    grabUser()
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/products">
          <Products user={user} />
        </Route>
        <Route exact path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route exact path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route exact path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>
        <Route exact path="/add-product">
          {user ? <ProductCreate setUser={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/products/:id/edit">
          {user ? <ProductEdit user={user} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/products/:id">
          <ProductDetail user={user} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
