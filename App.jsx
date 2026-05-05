import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import CountriesList from './components/CountriesList'

import './App.css'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'

const App = () => {
    const [dark, setdark] = useState(JSON.parse(localStorage.getItem('isDark')));

    return (
      <>
        <Header  theme={[dark, setdark]}/>
        <Outlet context={[dark, setdark]}/>
      </>
    )
  }

export default App



//  Search ki value bydefault empty string hoga, to initially sabhi countries show hongi kyunki ham jab "raunak".includes("") krte h to ye true return krta h to iska mtlb ye sari country ko pass krdega , jab user search karega to uske input ke hisab se countries filter hongi.