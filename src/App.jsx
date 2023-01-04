import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Contacts from "./components/Contacts"
import Chats from "./components/Chats"
import './index.css'

function App() {

  return (
    <div className="App">
      <div className="flex">
        <div className="">
          <Navbar />
          <Search />
          <Contacts />
        </div>
        <Chats />
      </div>
    </div>
  )
}

export default App
