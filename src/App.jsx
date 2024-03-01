
import './App.css'
import Header from './components/Header/Header'
import Katalog from './components/Katalog/Katalog'
import Start from './components/Start/Start'
import Footer from './components/Footer/Footer'
import OneCard from './components/OneCard/OneCard'
import Users from './components/Users/Users'
import AddPage from './components/AddPage/Add'
import {Routes, Route} from 'react-router-dom'

function App() {

  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Start/>}></Route>
        <Route path="/katalog" element={<Katalog/>}></Route>
        <Route path="/katalog/:id" element={<OneCard/>}></Route>
        <Route path="/users" element = {<Users/>} />
        <Route path="/add" element = {<AddPage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
