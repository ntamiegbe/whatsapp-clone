import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Contacts from "./components/Contacts"
import Chats from "./components/Chats"
import './index.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Search />
      <div className="flex">
        <Contacts />
        <Chats />
      </div>
    </div>
  )
}

export default App
