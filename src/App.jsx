
import { BrowserRouter,  Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import Signup from './Components/Signup'
import { Button } from "./Components/ui/button"
// import { Button } from "flowbite-react"
import LoginComponent from "./Components/LoginComponent"
function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          Login
          <Route path="/signin" element={<Login></Login>} />
          <Route path="/signup" element={<Signup></Signup>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
