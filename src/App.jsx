import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Contacts from "./components/Contacts"
import Chats from "./components/Chats"
import './index.css'
import useDarkSide from './hooks/useDarkSide'

function App() {

  return (
    <div className="h-full min-h-screen overflow-hidden dark:bg-[#272727]">
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
