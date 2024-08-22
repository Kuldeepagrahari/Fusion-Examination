import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"

function App() {
 

  return (
    <div className="app">
      <Sidebar />< Navbar/>
      <Home />
    </div>
  )
}

export default App
