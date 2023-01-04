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
      <Contacts />
      <Chats />
    </div>
  )
}

export default App
