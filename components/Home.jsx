import Header from './Header'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'

import '../App.css'
import React, { useEffect, useState } from 'react'
import React from 'react'
import Header from './Header'
import { useOutletContext } from 'react-router'


export default function Home() {

    const [dark, setdark] = useOutletContext()
    console.log(dark)

    const [search, setSearch] = useState('')
    const [region, setRegion] = useState('')
    
    return (
        <main className={`${dark ? 'dark' : ''}`}>
            <div className="search-filter-container">
                <SearchBar search={search} setSearch={setSearch} />
                <SelectMenu region={region} setRegion={setRegion} />
            </div>
            <CountriesList region={region} search={search} />
        </main>
    )
}
